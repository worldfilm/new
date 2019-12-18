<template>
  <div class="recharge">
    <heard/>
    <div class="info">
      <Info />
    </div>
    <div class="text">
      <i class="title">选择支付方式 :</i>
      <p class="p">
        <span>充值首选【</span>
        <span class="paink">微信转账、支付宝转账、银行卡转账</span>
        <span>】成功率100%存即送2%入款优惠 无上限！</span>
      </p>
    </div>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <div class="d1 fl">
          <img :src="item.src" alt class="icon" />
        </div>
        <div class="d2 fr">
          <span v-text="item.name" class="fl">银行卡转账</span>
          <img :src="item.isHot?hot:''" alt class="hot fl" />
          <span class="arrow_r fr"></span>
        </div>
      </li>
    </ul>
    <!-- <foot/> -->
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
import Info from "@/components/info.vue";
import alipay from "../../assets/img/recharge/alipay.png";
import bank from "../../assets/img/recharge/bank.png";
import hot from "../../assets/img/recharge/hot.png";
import nh from "../../assets/img/recharge/nh.png";
import weixin from "../../assets/img/recharge/weixin.png";
import shanfu from "../../assets/img/recharge/shanfu.png";

export default {
  components: {
    Info,foot,heard
  },
  data() {
    return {
      selected: 0,
      list: [
        { src: alipay, name: "支付宝转账", isHot: true },
        { src: weixin, name: "微信转账", isHot: false },
        { src: shanfu, name: "银行卡转账", isHot: true },
        { src: nh, name: "银行卡转账", isHot: false },
        { src: nh, name: "银行卡转账", isHot: false },
        { src: nh, name: "银行卡转账", isHot: false },
        { src: bank, name: "银行卡转账", isHot: true },
        { src: bank, name: "银行卡转账", isHot: false }
      ],
      hot: hot,
      payList: [],
      payType: null,
      loading: false,
      payUrl: ""
    };
  },
  methods: {
    getPakage() {
      this.loading = true;
    },
    getPayUrl() {
      if (this.selected === null) {
        this.$message({
          type: "error",
          message: "请选择套餐"
        });
        return;
      }
      if (this.payType === null) {
        this.$message({
          type: "error",
          message: "请选择支付方式"
        });
        return;
      }
      this.loading = true;
    },
    imgSrc(str) {
      return {
        wechat: "/weixin.png",
        alipay: "/zhifubao.png"
      }[str];
    }
  },
  created() {}
};
</script>

<style  scoped>
.recharge {
  width: 100%;
  font-size: 0.25rem;
  /* margin-bottom: 1rem; */
}
.title {
  font-style: italic;
  font-size: 0.4rem;
  /* font-weight: bold; */
  color: #dc7774;
  padding: 0.2rem 0rem;
  display: inline-block;
}
.p {
  color: #838383;
}
.info {
  height: 2rem;
  width: 94%;
  margin: 0 auto;
  background-image: url(../../assets/img/recharge/recharge_bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin-top: 1rem;
}
.text {
  height: 2rem;
  width: 94%;
  margin: 0 auto;
}
.list {
  color: #7b7b7b;
}
.icon {
  height: 0.5rem;
}
.arrow_r {
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  margin-top: 0.25rem;
}
li {
  height: 1rem;
  background: #fff;
  /* line-height: 1rem; */
  padding: 0.1rem 0.1rem 0rem 0.1rem;
  margin-bottom: 0.1rem;
  font-size: 0.25rem;
}
.d1 {
  text-align: center;
  display: inline-block;
  width: 1.1rem;
  height: 0.7rem;
  line-height: 0.7rem;
}
.d2 {
  text-align: center;
  display: inline-block;
  height: 0.7rem;
  line-height: 0.7rem;
  width: 84%;
}
.hot {
  height: 0.25rem;
  margin: 0.2rem;
}
.paink{color: #dc7774;}
</style>
