<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <img class="img" :src="item.src" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import '../assets/fonts/swiper.min.css';
import png_1 from '../assets/img/home/1.png';
import png_2 from '../assets/img/home/2.png';
import png_3 from '../assets/img/home/3.png';
import png_4 from  '../assets/img/home/4.png';

export default {
  data() {
    return {
      list:[
        {'src':png_1},
        {'src':png_2},
        {'src':png_3},
        {'src':png_4}]
    }
  },
  mounted() {
    // var mySwiper = new Swiper('.swiper-container', {
    //   scrollbar: '.swiper-scrollbar',
    //   autoplay: {
    //     disableOnInteraction: false,
    //   },
    //   // slidesPerView: 'auto',
    //   loop:true ,
    // })
  },
}
</script>
<style scoped>
  .swiper-container{width: 94%;
     margin: 0 auto;margin-top: 0.2rem;}
  .swiper-wrapper{}
  .swiper-slide{}
  .img{width: 100%;}
</style>
