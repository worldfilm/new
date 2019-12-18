<template>
  <div class="touch"
   @touchmove="touchmove"
   @touchstart="touchstart"
   @touchend="touchend"
   @touchcancel="touchcancel"
   :style="style_txt">
    <slot></slot>
   </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      txt: 'Welcome',
      startX:null,
      startY:null,
      endX:null,
      endY:null,
      cou:0,
      style_txt:'xx',
    }
  },
  computed: {},
  mounted() {
    // console.log(this)
  },
  methods: {
    // swipeleft() {this.txt="swipeleft: 向左滑动"},
    // swiperight() {this.txt="swiperight: 向右滑动"},
    // swipeup() {this.txt="swipeup: 向上滑动"},
    // swipedown() {this.txt="swipedown: 向下滑动"},
    //
    // panstart() {this.txt="panstart: 拖动开始"},
    // panend() {this.txt="panend: 拖动结束"},
    // panmove() {this.txt="panmove: 拖动过程"},
    // panleft() {this.txt="panleft: 向左拖动"},
    // panright(){this.txt="panright: 向右拖动"},
    // panup(){this.txt="panup: 向上拖动"},
    // pandown(){this.txt="pandown: 向下拖动"},
    // pancancel() {this.txt="pancancel: 拖动取消"},
    touchmove(e){
      // e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      let touch = e.touches[0]; //获取第一个触点
      let x = touch.pageX; //页面触点X坐标
      let y = touch.pageY; //页面触点Y坐标
      this.endX = x;
      this.endY = y;
      let startY=this.startY
      let abs = Math.abs(y - startY)
      // console.log(y - startY)
      // console.log(cou)
      if (abs > 50 && abs < 180) {
          this.cou=this.cou++
           console.log(this.cou)
       //低版本安卓机拉伸有抖动现象，通过减少动画次数来规避
       if ( /*mui.os.android &&*/ ++this.cou % 10 == 0) {
         // console.log(cou)
        this.style_txt = "transition:1s cubic-bezier(.1, .57, .1, 1); -webkit-transition:1s cubic-bezier(.1, .57, .1, 1); -webkit-transform: translate(0px, " + (y - startY) + "px) translateZ(0px);";
       }
      }
    },
    touchstart(e){
      // e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      var touch = e.touches[0]; //获取第一个触点
      var x = touch.pageX; //页面触点X坐标
      var y = touch.pageY; //页面触点Y坐标
      //记录触点初始位置
      this.startX = x;
      this.startY = y;
      this.cou = 0;
    },
     touchend(e){},
     touchcancel(e){},
     touchend(e) {
     // e.preventDefault();
     this.style_txt = "transition:300ms cubic-bezier(.1, .57, .1, 1); -webkit-transition: 300ms cubic-bezier(.1, .57, .1, 1);  -webkit-transform: translate(0px,0px) translateZ(0px);";
    }

    // function support_touch_event() {
    //  return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
    // }
  },
  created() {

  }
}
</script>
<style  scoped>
.touch {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
    text-align: center;
}
</style>
