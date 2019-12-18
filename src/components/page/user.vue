<template>
  <div class="usercenter">
    <div class="user_box">
      <div class="header-bar">
        <span class="left-btn" @click="goBack"></span>
        <div class="title">个人中心</div>
        <div class="right-btn">
          <slot></slot>
        </div>
      </div>
      <div v-if="userInfo" class="userinfo">
        <div class="header">
          <img :src="headerpic" alt />
          <span class="cpunt"></span>
        </div>
        <div class="d1">
          <p class="fl">
            <span class="name">xxxxxxxxx</span>
            <span class="fr btn" @click="profile">个人资料</span>
            <span class="fr score" v-text="'积分:'+score"></span>
          </p>
          <p class="fl porgress">
            <span class="lon" :style="'width:'+porgress+'%'"></span>
          </p>
          <p class="fl text_vip">
            <span class="fl vip_span">vip1</span>
            <span class="fr vip_span">vip2</span>
          </p>
          <p class="fl">
            <span class="vip_info">还需充值100升级到vip1</span>
          </p>
        </div>
        <div class="d2"></div>
      </div>
    </div>
    <ul class="ul">
      <li>
        <router-link to="/vip" class="li">
          <img src="../../assets/img/user/icon-vip.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">我的VIP</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/promot" class="li">
          <img src="../../assets/img/user/icon-tg.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">推广中心</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/report" class="li">
          <img src="../../assets/img/user/icon-mx.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">个人报表</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/recoad" class="li">
          <img src="../../assets/img/user/icon-cx.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">投注记录</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/charge" class="li">
          <img src="../../assets/img/user/icon-jl.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">充值记录</span>
            <span class="fr arrow_r"></span>
          </div>
        </router-link>
      </li>
    </ul>
    <ul class="ul">
      <li>
        <router-link to="/bank" class="li">
          <img src="../../assets/img/user/icon-bank.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">银行卡管理</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/safe" class="li">
          <img src="../../assets/img/user/icon-aq.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">安全中心</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/msg" class="li">
          <img src="../../assets/img/user/icon-info.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">我的消息</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/serve" class="li">
          <img src="../../assets/img/user/icon-yq.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">客服中心</span>
            <span class="fr arrow_r"></span>
            <div class="border"></div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="li">
          <img src="../../assets/img/user/icon-pr.png" alt class="fl" />
          <div class="right_box fr">
            <span class="fl vip_title">版本信息</span>
            <span class="fr arrow_r"></span>
          </div>
        </router-link>
      </li>
    </ul>

    <ul class="ul">
      <li class="logout">
        <span>退出登录</span>
      </li>
    </ul>
    <!-- <foot/> -->
  </div>
</template>

<script>
import headerpic from "../../assets/img/public/head.png";
import foot from "@/components/foot.vue";
export default {
  data() {
    return {
      porgress: 50,
      score: 888,
      headerpic: headerpic,
      userInfo: true,
      AppUserTop: [],
      list: [
        // {src:aq,name:'安全中心',link:"seaf"},
        // {src:bank,name:'银行卡管理',link:"seaf"},
        // {src:cx,name:'投注记录',link:"seaf"},
        // {src:info,name:'安全中心',link:"seaf"},
        // {src:jl,name:'投注记录',link:"seaf"},
        // {src:mx,name:'我的消息',link:"seaf"},
        // {src:pr,name:'版本信息',link:"seaf"},
        // {src:vip,name:'我的VIP',link:"seaf"},
        // {src:yp,name:'客服中心',link:"seaf"},
      ]
    };
  },
  components: {foot},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    profile() {
      this.$router.push("/profile");
    },
    logout() {},
    toPage() {}
  },
  mounted() {},
  created() {}
};
</script>

<style  scoped>
.usercenter {
  font-size: 0.2rem;
  height: 100%;
  font-family: PINGFANG_REGULAR;
}
.user_box {
  position: relative;
  height: 2.7rem;
  background-image: url(../../assets/img/public/bg_h.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin-bottom: 0.15rem;
}
img {
  height: 0.28rem;
  margin-top: 0.05rem;
}
li {
  padding: 0.1rem 0.3rem 0.25rem 0.3rem;
  font-size: 0.25rem;
  color: #666666;
}
p {
  width: 100%;
  text-align: left;
  line-height: 0.4rem;
}
.header-bar {
  position: relative;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
}

.title {
  color: #fff;
}

.left-btn,
.right-btn {
  position: absolute;
  top: 0;
}

.left-btn {
  left: 0;
  margin-left: 0.35rem;
  line-height: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  background: url(../../assets/img/public/arrow_left.png) 0.15rem 0.18rem
    no-repeat;
  background-size: 30%;
}

.right-btn {
  right: 0;
  padding-right: 0.1rem;
}
.arrow_r {
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.08rem;
  padding-right: 0.35rem;
}
.ul {
  background: #fff;
  margin-bottom: 0.3rem;
}
.li {
  height: 0.4rem;
  line-height: 0.4rem;
  display: block;
}
.right_box {
  width: 92%;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
}
.border {
  width: 96%;
  border-bottom: 0.01rem solid #ddd;
  position: absolute;
  bottom: -0.1rem;
  height: 0.1rem;
}
.logout {
  text-align: center;
  padding-left: 0.1rem;
  color: #999;
}
/* 用户信息 */
.userinfo {
  width: 95%;
  margin: 0 auto;
  position: relative;
  font-size: 0;
}
.header {
  height: 0.8rem;
  width: 0.8rem;
  display: inline-block;
  margin-left: 0.4rem;
  background: url(../../assets/img/public/header_bg.png) no-repeat;
}
.d1 {
  width: 78%;
  height: 1.2rem;
  display: inline-block;
  font-size: 0.25rem;
  color: #fff;
  padding-left: 0.1rem;
}
.btn {
  height: 0.4rem;
  float: right;
  background: #2fa7b4;
  color: #fff;
  padding: 0 0.05rem;
  box-shadow: -0.01rem 0.02rem #420d13;
  border: 0.01rem solid #fff;
}
.name {
  font-family: PINGFANG_BOLD;
}
.score {
  color: #f1e772;
  margin-right: 0.5rem;
  font-family: PINGFANG_BOLD;
}
.d2 {
  width: 39%;
}
.vip_info {
  color: #f1e772;
  font-family: PINGFANG_REGULAR;
}
.vip_span {
  font-family: PINGFANG_BOLD;
}
.vip_title {
  color: #666666;
  font-family: PINGFANG_REGULAR;
}
.content {
  height: 1rem;
  width: 0.6rem;
  display: inline-block;
}
.porgress {
  width: 70%;
  height: 0.1rem;
  background: #fff;
  margin: 0.15rem 0 0 0;
}
.lon {
  display: block;
  height: 100%;
  background: #efd97a;
}
.text_vip {
  width: 70%;
}
</style>
