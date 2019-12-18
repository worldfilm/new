<template>
  <div class="main" >
    <!-- <heard/> -->
    <touch>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
       <Home/>
        </div>
        <div class="swiper-slide">
          <Promot/>
        </div>
        <div class="swiper-slide">
          <Recharge/>
        </div>
        <div class="swiper-slide">
          <User/>
        </div>
        <div class="swiper-slide">
          <News/>
        </div>
      </div>
    </div>
    </touch>
    <foot/>
  </div>
</template>

<script>
import Swiper from 'swiper';
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
import Home from '@/components/page/home.vue'//主页
import User from '@/components/page/user.vue'//个人中心
import Recharge from '@/components/page/recharge.vue'//充值
import Promot from '@/components/page/promot.vue'//推广中心
import News from '@/components/page/news.vue'//提现
import touch from "@/components/touch.vue";


export default {
  components: {
    Home,User,Recharge,heard,foot,Promot,News,touch
  },
  data() {
    return {
    };
  },
    mounted() {
      var newSwiper = new Swiper('.swiper-container',{
        scrollbar: '.swiper-scrollbar',
        autoplay: 0,
        pagination : '.swiper-pagination',
      paginationType : 'custom',
      paginationCustomRender: function (swiper, current, total) {
        console.log(current + ' of ' + total)
          return current + ' of ' + total;
      },
        loop:true ,
    });
    },
  methods: {
  },
  watch: {
  }
};
</script>

<style  scoped>
.main{
}
</style>
