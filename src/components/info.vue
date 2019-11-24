<template>
  <div class="userinfo">
    <div class="header">
      <div class="header_bg"></div>
      <img :src="header" alt class="header_img" />
      <span class="count_v"></span>
      <span class="count"></span>
      <span class="count2"></span>
    </div>
    <div class="d1">
      <span class="name" v-text="name">dsfsdfsdfds</span>
      <span class="id" v-text="'ID:'+id">ID:132546</span>
    </div>
    <div class="d1 d2">
      <div class="d2_content">
        <img src="../assets/img/public/coins.png" alt class="coins" />
        <span class="border_b blance" v-text="'余额: '+money"></span>
        <div class="border_bottom"></div>
      </div>
    </div>
    <div class="d1 d3 fr">
      <p class="content">
        <img src="../assets/img/public/serve.png" alt class="serve" />
        <span>客服</span>
      </p>
      <p class="content">
        <img src="../assets/img/public/gif.png" alt class="active" />
        <span>活动</span>
      </p>
    </div>
  </div>
</template>

<script>
import header from "../assets/img/public/head.png";
export default {
  data() {
    return {
      header: header,
      money:12345678,
      name:'rgtdfgdfg',
      id:'352353'
    };
  },
  mounted() {}
};
</script>
<style scoped>
.userinfo {
  background-image: url(../assets/img/public/bg_d1.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 1.2rem;
  line-height: 1.2rem;
  width: 95%;
  margin: 0 auto;
  position: relative;
  top: 0.35rem;
  font-size: 0;
}
.name,
.id {
  font-family: PINGFANG_REGULAR;
  font-size: 0.2rem;
}
.d2_content{    width: 100%;
    height: 100%;
      
    }
.header {
  height: 0.8rem;
  width: 0.8rem;
  display: inline-block;
  margin-left: 0.35rem;
  margin-top: 0.18rem;
  position: relative;
}
.header_bg {
  background: url(../assets/img/public/header_bg.png) no-repeat;
  background-size: 100% auto;
  z-index: 2;
  height: 0.8rem;
  width: 0.8rem;
  position: absolute;
}
.header_img {
  height: 0.7rem;
  width: 0.7rem;
  z-index: 1;
  position: absolute;
  margin: 0.05rem;
}
.count_v {
  background: url(../assets/img/public/v.png) no-repeat;
  background-size: 100% auto;
  height: 0.25rem;
  width: 0.25rem;
  position: absolute;
  bottom: 0.05rem;
  right: 0.05rem;
  z-index: 2;
}
.count {
  height: 0.2rem;
  width: 0.2rem;
  position: absolute;
  bottom: 0.08rem;
  right: -0.1rem;
  background: url(../assets/img/public/5.png) no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
.count2 {
  height: 0.2rem;
  width: 0.2rem;
  position: absolute;
  bottom: 0.08rem;
  right: -0.25rem;
  background: url(../assets/img/public/3.png) no-repeat;
  background-size: 100% 100%;
  z-index: 2;
}
.count_0{background: url(../assets/img/public/0.png) no-repeat;}
.count_1{background: url(../assets/img/public/1.png) no-repeat;}
.count_2{background: url(../assets/img/public/2.png) no-repeat;}
.count_3{background: url(../assets/img/public/3.png) no-repeat;}
.count_4{background: url(../assets/img/public/4.png) no-repeat;}
.count_5{background: url(../assets/img/public/5.png) no-repeat;}
.count_6{background: url(../assets/img/public/6.png) no-repeat;}
.count_7{background: url(../assets/img/public/7.png) no-repeat;}
.count_8{background: url(../assets/img/public/8.png) no-repeat;}
.count_9{background: url(../assets/img/public/9.png) no-repeat;}
.border_bottom{width: 85%;
    position: relative;
    margin-left: 0.15rem;
    top: 0.4rem;
    border-bottom: 0.02rem solid #e09f94;}
.d1,
.d2 {
  width: 1.25rem;
  height: 1.2rem;
  display: inline-block;
  padding: 0.3rem 0rem;
  font-size: 0.25rem;
}
.d1{    margin-left: 0.25rem;}
.d2 {
  width: 2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  display: inline-block;
  padding: 0;
  background: #e6dbd1;
  border-radius: 0.2rem;
  margin: 0.35rem 0;
  position: relative;
}
.d3 {
  width: 1.5rem;
  margin-left: 0;
}
.coins {
  position: absolute;
  height: 0.45rem;
  bottom: -0.02rem;
  left: -0.05rem;
}
.content {
  height: 1rem;
  width: 0.55rem;
  display: inline-block;
  font-size: 0.2rem;
}
.serve {
  float: left;
}
.active {
  float: left;
}
li {
  height: 0.6rem;
  line-height: 0.6rem;
  float: left;
}
span {
  float: left;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #ca7b74;
  font-family: PINGFANG_BOLD;
}
img {
  height: 0.35rem;
}
.blance {
  float: left;
  height: 0.4rem;
  line-height: 0.4rem;
  padding-left: 0.39rem;
  background: linear-gradient(to bottom, #e39075, #cc6967);
  -webkit-background-clip: text;
  color: transparent;
  font-family: PINGFANG_BOLD;
  font-size: 0.2rem;
}
.border_b {
}
</style>
