<template>
  <div class="vip">
    <div class="header-bar">
      <span class="left-btn" @click="goBack"></span>
      <div class="title">个人中心</div>
      <div class="right-btn">
        <slot></slot>
      </div>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="list_h">
          <span class="icon_vip"></span>
          <span v-text="'VIP'+item.vip" class="white"></span>
          <span class="fr yellow" v-text="item.text"></span>
        </div>
        <div>
          <div class="start">
            <span v-text="'VIP'+item.vip" class="start_t"></span>
          </div>
          <div class="fr content_r">
            <p>
              <span class="fl">特权：</span>
            </p>
            <p>
              <span class="fl">晋级礼金:</span>
              <span class="fl red" v-text="item.b+'元'"></span>
              <span class="fr">每周礼金：</span>
              <span class="fr red" v-text="item.c+'元'"></span>
            </p>
            <p>
              <span class="fl">签到加倍：</span>
              <span class="fl red" v-text="item.d+'倍'"></span>
              <span class="fr">红包加倍：</span>
              <span class="fr red" v-text="item.e+'倍'"></span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <foot/>
  </div>
</template>

<script>
import foot from "@/components/foot.vue";
export default {
  components: {foot},
  data() {
    return {
      list: [
        {
          vip: 1,
          b: 20,
          c: 30,
          d: 40,
          e: 50,
          text: "晋级要求:累计有效投注 1+"
        },
        {
          vip: 2,
          b: 20,
          c: 30,
          d: 40,
          e: 50,
          text: "晋级要求:累计有效投注 1+"
        },
        { vip: 3, b: 20, c: 30, d: 40, e: 50, text: "晋级要求:累计有效投注 1+" }
      ]
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>
<style  scoped>
.vip {
  font-size: 0.25rem;
  height: 100%;
}
.header-bar {
  position: relative;
  width: 100%;
  height: 3.55rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  background-image: url(../../assets/img/vip/bg_h.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
}

.title {
  color: #fff;
}
.left-btn {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0.35rem;
  line-height: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url(../../assets/img/public/arrow_left.png) 0.15rem 0.18rem
    no-repeat;
  background-size: 30%;
}
ul {
}
li {
  margin: 0.2rem 0.5rem;
  font-size: 0.25rem;
  color: #666666;
  background: #fff;
  box-shadow: 0rem 0.02rem 0.1rem #c6ccd0;
}
p {
  width: 100%;
  text-align: left;
  line-height: 0.4rem;
}
.list_h {
  height: 0.4rem;
  line-height: 0.4rem;
  background: #dc7b7b;

  padding: 0 0.4rem;
}
.icon_vip {
  background-image: url(../../assets/img/vip/start_s.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 0.27rem;
  height: 0.27rem;
  display: inline-block;
  margin-top: 0.07rem;
}
.yellow {
  color: #f8d58f;
  font-size: 0.2rem;
}
.white {
  color: #fff;
}
.start {
  background-image: url(../../assets/img/vip/start_b.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 1.2rem;
  width: 1.7rem;
  display: inline-block;
  margin: 0.2rem 0.2rem;
}
.start_t {
  position: relative;
  top: 0.8rem;
  left: 0.6rem;
  color: #f1da6d;
  font-size: 0.2rem;
}
.content_r {
  padding: 0.2rem;
  font-size: 0.22rem;
}
p {
  width: 100%;
  height: 0.4rem;
  padding-right: 0.7rem;
}
</style>
