<template>
  <div class="bank">
    <heard/>
    <div class="myBank" v-if="showAddCard">
      <div class="header">
        <span class="title">我的卡</span>
        <span class="num">共5张</span>
        <span class="fr">+</span>
      </div>
      <div class="cardList" :style="'height:'+height+'rem'">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            :style="'top:'+index+'rem;'+ 'z-index:'+index"
            :class="['icon','li',item.icon]"
            @click="clickCard(item,index)"
            v-if="idx>=index"
          >
            <p class="card">
              <span class="title fl" v-text="item.name"></span>
              <span class="num fr" v-text="item.number"></span>
            </p>
            <p class="card">
              <span class="fl type" v-text="item.type===1?'储蓄卡':'信誉卡'"></span>
            </p>
            <p class="card">
              <span class="fr gif" v-text="item.text"></span>
            </p>
          </li>
        </ul>
        <div v-if="menu" class="menu" :style="'top:'+(idx+3)+'rem;'">
          <p class="menu_p">
            <span class="icon2 amount"></span>
            <span class>去充值</span>
          </p>
          <p class="menu_p">
            <span class="icon2 bet"></span>
            <span class>去提现</span>
          </p>
          <p class="menu_p">
            <span class="icon2 jl"></span>
            <span class>查看充值记录</span>
          </p>
          <p class="menu_p">
            <span class="icon2 yq"></span>
            <span class>联系客服更换解除绑定</span>
          </p>
        </div>
      </div>
      <div class="serve" v-if="menu?false:true">
        <span class="icon_serve fl"></span>
        <span class>绑定银行卡常见问题解答</span>
        <span class="arrow_r fr"></span>
      </div>
      <div class="addbankcard" v-if="menu?false:true">
        <button @click="addBankCard">
          <span class="add">+</span>
          <span>添加银行卡</span>
        </button>
        <p class="p">支持储蓄卡/信用卡</p>
      </div>
      <div class="footer" v-if="menu?false:true">
        <p>安全·便捷</p>
        <p>
          <span class="border"></span>
          <span class="icon_s"></span>
          <span class="border"></span>
        </p>
        <p>
          <span class="fl">全球领先技术</span>
          <span class="fr">保障资金安全</span>
        </p>
        <p>
          <span class="fl">优质民生理财</span>
          <span class="fr">享受全面服务</span>
        </p>
      </div>
      <div v-if="menu" class="menu_fiexd">
        <div class="btn">
          <ul>
            <li :data-l="(list.length-index)"
              v-for="(item,index) in list"
              :key="index"
              :style="'bottom:'+parseInt(list.length-index)*-0.3+'rem;'+ 'z-index:'+(list.length-index)"
              :class="['icon3','li',item.icon]"
              v-if="idx<index"
            >
              <p class="card">
                <span class="title fl" v-text="item.name"></span>
                <span class="num fr" v-text="item.number"></span>
              </p>
              <p class="card">
                <span class="fl type" v-text="item.type===1?'储蓄卡':'信誉卡'"></span>
              </p>
              <p class="card">
                <span class="fr gif" v-text="item.text"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="addCard" v-if="showAddCard?false:true">
      <p class="title_bind">添加应行卡</p>
      <p>
        <span class="span">请添加用户</span>
        <span v-text="usename"></span>
        <span class="span">的银行卡</span>
      </p>
      <p class="baind_box">
        <span>卡号</span>
        <input type="text" />
        <span class="fr closed"></span>
      </p>
      <p>
        <button class="bind">绑定</button>
      </p>
    </div>
    <!-- <foot/> -->
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
export default {
  components: {heard,foot},
  data() {
    return {
      idx: 0,
      usename: "sdsdsd",
      list: [
        {
          type: 1,
          number: "56464646544649646",
          name: "中国工商银行",
          icon: "icbc",
          text: "首充送1%彩金"
        },
        {
          type: 1,
          number: "56464646544649646",
          name: "兴业银行",
          icon: "cib",
          text: "首充送1%彩金"
        },
        {
          type: 2,
          number: "56464646544649646",
          name: "建设银行",
          icon: "ccb",
          text: "首充送1%彩金"
        },
        {
          type: 1,
          number: "56464646544649646",
          name: "农业银行",
          icon: "abc",
          text: "首充送1%彩金"
        },
        {
          type: 1,
          number: "56464646544649646",
          name: "兴业银行",
          icon: "cib",
          text: "首充送1%彩金"
        },
        {
          type: 2,
          number: "56464646544649646",
          name: "建设银行",
          icon: "ccb",
          text: "首充送1%彩金"
        },
        {
          type: 1,
          number: "56464646544649646",
          name: "中国工商银行",
          icon: "icbc",
          text: "首充送1%彩金"
        },
        {
          type: 1,
          number: "56464646544649646",
          name: "兴业银行",
          icon: "cib",
          text: "首充送1%彩金"
        },
        {
          type: 2,
          number: "56464646544649646",
          name: "建设银行",
          icon: "ccb",
          text: "首充送1%彩金"
        }
      ],
      showAddCard: true,
      menu: false
    };
  },
  computed: {
    // height: function() {
    //   return this.list.length + 1.5;
    // }
  },
  methods: {
    addBankCard() {
      this.showAddCard = false;
    },
    clickCard(item, index) {
      this.idx = index;
      this.menu = true;
      this.height = this.list.length + 0.5 + index;
    }
  },
  created() {
    this.idx = this.list.length;
    this.height = this.list.length + 1.5;
  }
};
</script>

<style  scoped>
.menu_fiexd{
position: fixed;
  bottom: 0rem;
  left: 0;
  width: 100%;
  padding: 0 0.4rem;
}
.btn {
  /* height: 3rem; */
  width: 100%;
      position: relative;
}
.jl {
  background: url(../../assets/img/bank/jl.png) no-repeat;
}
.yq {
  background: url(../../assets/img/bank/yq.png) no-repeat;
}
.bet {
  background: url(../../assets/img/bank/bet.png) no-repeat;
}
.amount {
  background: url(../../assets/img/bank/amount.png) no-repeat;
}
.icon2 {
  width: 0.4rem;
  height: 0.45rem;
  background-size: 100% auto;
}

.menu_p {
  /* height: 0.6rem; */
  /* line-height: 0.6rem; */
  border-bottom: 0.01rem solid #999;
  padding: 0.2rem 0.3rem;
}
.menu {
  position: relative;
  border-top: 0.01rem solid #999;
}
.addCard {
  height: 100%;
  width: 100%;
  background: #fff;
  padding: 1rem 1rem 0.7rem 1rem;
  font-size: 0.25rem;
}
.closed {
  background: url(../../assets/img/bank/closed.png) no-repeat;
  height: 0.25rem;
  width: 0.25rem;
  background-size: 100% auto;
  margin-right: 0.07rem;
}
.bind {
  width: 5.5rem;
  margin: 0 auto;
  display: block;
  margin-top: 0.7rem;
}
.title_bind {
  text-align: center;
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.span {
  font-size: 0.2rem;
  color: #999;
}
input {
  margin-top: 0.05rem;
}
.baind_box {
  border-bottom: 0.01rem solid #999;
  margin: 0.25rem 0;
}
.icbc {
  background: url(../../assets/img/bank/ICBC.png) no-repeat;
}
.ccb {
  background: url(../../assets/img/bank/CCB.png) no-repeat;
}
.cib {
  background: url(../../assets/img/bank/CIB.png) no-repeat;
}
.abc {
  background: url(../../assets/img/bank/ABC.png) no-repeat;
}
.icon {
  background-size: cover;
}
.myBank {
  width: 100%;
  font-size: 0.25rem;
  margin-top: 0.8rem;
  padding: 0 0.5rem;
}
.header {
  height: 0.8rem;
  line-height: 0.8rem;
}
.cardList {
  position: relative;
}
.li {
  height: 2.5rem;
  width: 100%;
  position: absolute;
  background-size: 100% auto;
}
.border {
  border-bottom: 0.01rem solid #999;
  width: 45%;
  height: 0.15rem;
}
.icon_s {
  background-image: url(../../assets/img/bank/icon_safe.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 0.2rem;
  height: 0.25rem;
}
.icon_serve {
  background-image: url(../../assets/img/bank/icon_serve.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  bottom: 0.1rem;
  margin: 0 0.3rem;
}
.footer {
  width: 100%;
  text-align: center;
  padding: 0 1.5rem;
  color: #999;
  padding-top: 0.4rem;
  font-size: 0.22rem;
  margin-bottom: 1rem;
}
.addbankcard {
  background: #fff;
  text-align: center;
  color: #666666;
  font-size: 0.2rem;
  padding: 0.4rem 0;
  box-shadow: 0.02rem 0.03rem 0.05rem #c6ccd0;
}
span {
  display: inline-block;
}
button {
  height: 0.7rem;
  background: #db6a76;
  color: #fff;
  width: 2.5rem;
  box-shadow: 0.02rem 0.03rem 0.05rem #c6ccd0;
}
.add {
  border-radius: 0.3rem;
  background: #fff;
  color: #db6a76;
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  line-height: 0.32rem;
  font-size: 0.45rem;
  margin: 0 0.05rem;
}
.p {
  padding-top: 0.2rem;
}
.serve {
  box-shadow: 0.02rem 0.03rem 0.05rem #c6ccd0;
  background: #fff;
  text-align: left;
  color: #666666;
  font-size: 0.25rem;
  padding: 0.25rem 0.25rem;
  margin: 0.25rem 0;
}
.arrow_r {
  height: 0.3rem;
  width: 0.2rem;
}
.card {
  color: #fff;
  width: 80%;
  float: right;
  margin-top: 0.3rem;
}

.title {
  font-size: 0.3rem;
  font-weight: normal;
}
.num {
  padding-right: 0.3rem;
  font-size: 0.2rem;
}
.type {
  font-size: 0.2rem;
  position: relative;
  bottom: 0.25rem;
}
.gif {
  padding-right: 0.3rem;
  font-size: 0.2rem;
  padding-top: 0.3rem;
}
</style>
