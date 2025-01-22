ｚ
<script setup>
import CommonButtons from '../common/CommonButtons.vue'
</script>

<template>
  <div class="h-[812px] md:h-[1106px] lg:h-[1117px] flex flex-col justify-center relative">
    <div class="absolute top-0 left-0 -z-10 w-[327px] md:w-[584px] lg:w-auto">
      <img src="@/assets/images/pizza.svg" alt="" />
    </div>
    <div class="absolute bottom-0 right-0 -z-10 w-[327px] md:w-[584px] lg:w-auto">
      <img src="@/assets/images//beer.svg" alt="" />
    </div>
    <div class="flex overflow-hidden justify-center">
      <img class="w-[168px] md:w-[300px] lg:w-auto" src="@/assets/images//buddy house.svg" alt="" />
      <img class="w-[168px] md:w-[300px] lg:w-auto" src="@/assets/images//buddy house.svg" alt="" />
      <img class="w-[168px] md:w-[300px] lg:w-auto" src="@/assets/images//buddy house.svg" alt="" />
    </div>
  </div>
  <div class="h-[812px] md:h-[1106px] lg:h-[1117px] flex flex-col justify-center relative">
    <div class="text-center">
      <h2 class="text-display-m md:text-display-lg text-primary-on">吃最飽 <br />喝最爽</h2>
    </div>
    <div class="absolute bottom-0 right-0 w-[300px] md:w-[500px] lg:w-auto">
      <img src="@/assets/images/skateboard.svg" alt="" />
    </div>
  </div>
  <div class="flex flex-col justify-center items-center gap-12 md:py-20 h-[812px] md:h-auto">
    <h3 class="md:text-display-lg text-display-m text-primary-on text-center">
      pizza <br />beer <br />food<br />and<br />you
    </h3>
    <div class="flex flex-col md:gap-12 gap-4">
      <p class="text-primary-on md:text-display-m text-heading-s text-center">
        如果你想吃，可以使用外送平台，<br />或是打電話到店裡
      </p>
      <div class="flex justify-center gap-3">
        <CommonButtons :class="['btn-neutral']"
          ><a
            href="https://www.ubereats.com/tw/store/buddy-house-%E5%A3%B9%E8%80%97%E5%BA%97/kOAzAXuaQjiy7OF1mY5TEw?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
            target="_blank"
            >叫外送</a
          ></CommonButtons
        >
        <CommonButtons :class="['btn-neutral']"
          ><a href="tel:0229161989">我要外帶</a></CommonButtons
        >
      </div>
    </div>
  </div>
  <div
    class="flex flex-col gap-4 justify-center items-center h-[812px] md:h-[1106px] lg:h-[1117px] container"
  >
    <div class="flex flex-col gap-12 text-center">
      <h4 class="md:text-display-m text-display-s text-primary-on">
        來吃飯吧！<br />
        來喝酒吧！
      </h4>
      <div class="flex flex-col gap-6">
        <p class="md:text-heading-lg text-heading-s text-primary-on">
          如果需要包場或是多人，請來電或訊息給我們， <br />否則到現場沒位置，我們可不負責的唷
        </p>
        <p class="md:text-heading-lg text-heading-s text-primary-on">
          只收現金 <br />
          每人低消 200元
        </p>
      </div>
    </div>
    <div><CommonButtons :class="['btn-neutral']">快打給我</CommonButtons></div>
  </div>
</template>
