import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, people, date, time } = req.body ?? {}

  if (!name || !email || !phone || !people || !date || !time) {
    return res.status(400).json({ error: '請完整填寫所有欄位' })
  }

  const { error: dbError } = await supabase.from('bookings').insert({
    name,
    email,
    phone,
    people,
    booking_date: date,
    booking_time: time,
  })

  if (dbError) {
    console.error('Supabase insert failed', dbError)
    return res.status(500).json({ error: '預約失敗，請稍後再試' })
  }

  // Booking is already saved at this point, so a failed notification email
  // shouldn't turn into a user-facing error — just log it for follow-up.
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.BOOKING_NOTIFY_EMAIL,
      replyTo: email,
      subject: `新預約：${date} ${time}｜${name}`,
      text: `姓名：${name}\n電子信箱：${email}\n電話：${phone}\n人數：${people}\n日期：${date}\n時間：${time}`,
    })
  } catch (emailError) {
    console.error('Resend send failed', emailError)
  }

  return res.status(200).json({ ok: true })
}
