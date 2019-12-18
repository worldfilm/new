<template>
  <div class="footer">
    <div class="link" v-for="(item,index) in list" @click="footClick(item,index)" :key="index">
      <div :class="item.class">
        <!-- <img :src="item.imgSrc2" :class="['link_img',item.class2,item.color]" /> -->
        <!-- <span :class="item.class"></span> -->
      </div>
      <div class="link_text">
        <span v-text="item.name" :class="item.color"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "/",
      bottomAd: [],
      list: [
        {
          name: "首页",
          link: "/home",
          class: "iconfont icon-zhuye",
        },
        {
          name: "推广",
          link: "/promot",
          class: "iconfont icon-telegram",
        },
        {
          name: "充值",
          link: "/recharge",
          class: "iconfont icon-jia jia",
        },
        {
          name: "个人",
          link: "/user",
          class: "iconfont icon-geren_",
        },
        {
          name: "消息",
          link: "/news",
          class: "iconfont icon-tongzhi",
        }
      ]
    };
  },
  methods: {
    footClick(item, index) {
      let list=this.list
      let arr=[foot_h,foot_t,foot_a,foot_p,foot_n]
      for(let i in arr){
         this.list[i].imgSrc2=arr[i]
         this.list[i].color='pocity'
         this.list[2].color='blue'
      }
      if(index!=2){
      this.list[index].color='deep'
      this.list[2].color='light_blue'
      }
      this.list[index].imgSrc2=item.imgSrc
      this.$router.push(item.link);
    }
  },
  created() {}
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  height: 0.9rem;
  background: url(/img/footer_bg.png);
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-size: 100% auto;
}
.iconfont{font-size: 0.4rem;}

.blue{color: #2fa6b4;}
.link {
  font-size: 0.2rem;
  display: inline-block;
  width: 25%;
  text-align: center;
  padding-top: 0.1rem;
  color: #e65854;
}
.link_text {
  color: #ce616b;
  font-size: 0.25rem;
}
.txt {
  position: relative;
  bottom: 0.44rem;
}
img {
  height: 0.45rem;
}

.footer_h {
  background: url();
}
.footer_t {
  background: url();
}
.footer_a {
  background: url();
  height: 0.5rem;
  width: 0.5rem;
}
/* .icon-jia:before{transform: rotate(45deg);} */
.jia {
  /* width: 0.9rem; */
  height: 0.45rem;
  position: relative;
  /* transform: rotate(45deg); */
  bottom: 0.6rem;
  display: inline-block;
  /* background: #f5eae2; */
  font-size: 1rem;
}
/* .img_jia {
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
} */
.pocity{opacity: 0.8;}
.deep{opacity: 1;}
.light_blue{opacity: 0.8;color: #2fa6b4;}
</style>
