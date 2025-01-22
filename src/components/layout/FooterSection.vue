<script setup>
import CommonButtons from '../common/CommonButtons.vue'
</script>

<template>
  <div class="lg:h-[1117px] justify-center flex items-center flex-col relative">
    <div class="flex flex-col md:flex-col lg:flex-row justify-center gap-12 mb-20">
      <div class="basis-auto">
        <div class="text-center text-primary-on">
          <h3 class="text-display-m mb-6">Buddy House</h3>
          <p class="text-title-lg">
            我們會熱情的款待你 <br />
            陪你耗到天亮
          </p>
        </div>
      </div>
      <div class="basis-auto">
        <div class="text-center text-primary-on">
          <h3 class="text-display-m mb-6">壹耗店</h3>
          <p class="text-title-lg mb-6">
            週一公休 <br />
            週二至週四 下午 6:00 至 晚上 12:00 <br />
            週五至週六 下午 6:00 至 凌晨 1:00
          </p>
          <p class="text-title-lg">
            披薩出餐時間至晚上10:30 <br />
            廚房只到關店前一小時
          </p>
        </div>
      </div>
      <div class="basis-auto">
        <div class="text-center text-primary-on">
          <h3 class="text-display-m mb-6">台灣</h3>
          <p class="text-title-lg">新北市新店區中華路79號</p>
        </div>
      </div>
    </div>
    <div class="py-10 flex gap-4">
      <CommonButtons :class="['btn-neutral']"
        ><a href="https://www.facebook.com/BuddyHouseOne" target="_blank"
          >facebook</a
        ></CommonButtons
      >
      <CommonButtons :class="['btn-neutral']"
        ><a href="https://www.instagram.com/buddyhouse01/" target="_blank"
          >instagram</a
        ></CommonButtons
      >
      <CommonButtons :class="['btn-neutral']"
        ><a href="tel:0229161989">02-29161989</a></CommonButtons
      >
    </div>
    <div class="hidden md:block">
      <div class="absolute top-0 right-0">
        <img class="object-cover md:w-[207px] lg:w-auto" src="@/assets/images/drum.svg" alt="" />
      </div>
      <div class="absolute bottom-0 left-0">
        <img class="object-cover md:w-[207px] lg:w-auto" src="@/assets/images/guitar.svg" alt="" />
      </div>
    </div>
  </div>
</template>
