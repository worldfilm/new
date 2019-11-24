<template>
  <div class="withdraw">
    <heard/>
    <div class="box">
      <ul>
        <li>
          <img src="../../assets/img/withdraw/icon_1.png" class="img" />
          <span class="info b">可提现</span>
          <span class="num b">999999.99</span>
        </li>
        <li>
          <img src="../../assets/img/withdraw/icon_2.png" class="img" />
          <span class="info r">不可提现</span>
          <span class="num r">999999.99</span>
        </li>
        <li>
          <img src="../../assets/img/withdraw/icon_3.png" class="img" />
          <span class="info g">还需打码量</span>
          <span class="num g">999999.99</span>
        </li>
      </ul>
      <ul>
        <li class="li">
          <span class="lr">收款账号：</span>
          <span class="d">您暂时未绑定银行卡，请前往绑定</span>
          <button>查询</button>
        </li>
        <li class="li">
          <span class="lr">提现账号：</span>
          <input type="text" placeholder="请输入提示金额" />
          <button>查询</button>
        </li>
        <li class="li">
          <span class="lr">安全码 ：</span>
          <span class="d">你还未设置安全码，请立即设置</span>
          <button>查询</button>
        </li>
      </ul>
      <p class="d">如果没有绑定账号，请前往 个人-银行卡管理 进行绑定</p>
    </div>
    <foot/>
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
import icon_1 from "@/assets/img/withdraw/icon_1.png";
import icon_2 from "@/assets/img/withdraw/icon_2.png";
import icon_3 from "@/assets/img/withdraw/icon_3.png";
import bg from "@/assets/img/withdraw/bg.png";
export default {
  components: {heard,foot},
  data() {
    return {
      selected: 0,
      icon_1: icon_1,
      icon_2: icon_2,
      icon_3: icon_3,
      bg: bg,
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
    }
  },
  created() {}
};
</script>

<style  scoped>
.withdraw {
  height: 100%;
  width: 100%;
  font-size: 0.3rem;
}
.content {
}
.box {
  width: 7rem;
  border: 0.03rem solid #dd7883;
  margin: 0 auto;
  position: relative;
  top: 1.5rem;
  padding: 0.3rem;
  background: #fffaf7;
  margin-bottom: 1rem;
}
.li {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: url(../../assets/img/withdraw/bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0.2rem 0;
  font-size: 0.2rem;
}
.img {
  height: 0.3rem;
}
.info {
  display: inline-block;
  width: 34%;
  text-align: left;
  padding-left: 0.2rem;
}
.num {
  display: inline-block;
  text-align: left;
  background: #eeeae7;
  padding: 0.05rem;
  border-radius: 0.1rem;
}
li {
  padding: 0.2rem 0;
}
.b {
  color: #2fa7b4;
}
.r {
  color: #db6a76;
}
.g {
  color: #2fb46e;
}
.d {
  color: #9f9c9b;
  font-size: 0.2rem;
  text-align: center;
  padding: 0.2rem 0;
}
.lr {
  color: #cf8b88;
  padding-left: 0.3rem;
  width: 1.3rem;
  display: inline-block;
  text-align: right;
}
input {
  height: 0.4rem;
  font-size: 0.2rem;
  width: 3rem;
  background: #fff;
  margin-top: 0.2rem;
}
button {
  height: 0.4rem;
  margin-top: 0.15rem;
  margin-right: 0.5rem;
  float: right;
  background: #2fa7b4;
  color: #fff;
  padding: 0 0.05rem;
  box-shadow: -0.03rem 0.03rem #394d87;
}
</style>
