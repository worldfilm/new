<template>
  <div class="profile">
    <heard/>
    <div class="top_box">
      <ul class="ul">
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal_id.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">银行卡管理</span>
              <span class="fr info">1548972</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal-name.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">真实姓名</span>
              <span class="fr info">方大异</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal-phone.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">手机号码</span>
              <span class="fr info">13536399864</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal-email.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">邮箱地址</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal-wechat.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">微信账号</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/personal-qq.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">QQ账号</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="user_box">
      <div class="vip_title">
        <span class="leve">我的VIP等级:</span>
        <span class="leve_num" v-text="leve"></span>
        <span class="btn" @click="vip">vip详情</span>
        <!-- <div class="border"></div> -->
      </div>
      <div>
         <span>你需要10000.00流水升至</span>
      </div>
      <div>
        <span class="vip">vip1</span>
        <div class="fl porgress">
          <span class="lon" :style="'width:'+porgress+'%'"></span>
        </div>
        <span class="vip">vip2</span>
      </div>
      <p>提示：截止2019.10.01</p>
      <p>你已完成 0 元流水</p>
    </div>
    <div class="bottom_box">
      <ul class="ul">
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/tatol.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">银行卡管理</span>
              <span class="fr info">1548972</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/amount.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">真实姓名</span>
              <span class="fr info">方大异</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/bet.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">手机号码</span>
              <span class="fr info">13536399864</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/recharge.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">QQ账号</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/cathecticTime.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">邮箱地址</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to class="li">
            <img src="../../assets/img/profile/deposit.png" alt class="fl" />
            <div class="right_box fr">
              <span class="fl title">微信账号</span>
              <span class="fr arrow_r"></span>
              <span class="fr info">未认证</span>
              <div class="border"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <foot/>
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
export default {
  components: {heard,foot},
  data() {
    return {
      leve: 2,
      porgress: 50,
      list: [{ icon: "", title: "" }]
    };
  },
  methods: {
    vip() {}
  },
  created() {}
};
</script>

<style  scoped>
.profile {
  height: 100%;
  width: 100%;
  margin-top: 1.2rem;
  font-size: 0.25rem;
}
.user_box {
  height: 3rem;
  width: 90%;
  margin: 0.2rem auto;
  background: url(../../assets/img/public/bg_h.png) no-repeat;
  text-align: center;
}
.vip_title {
  border-bottom: 0.01rem solid #eee;
  padding: 0.3rem 0;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 0.1rem;
  text-align: left;
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
.btn {
  height: 0.4rem;
  float: right;
  background: #2fa7b4;
  color: #fff;
  padding: 0 0.05rem;
  box-shadow: -0.01rem 0.02rem #420d13;
  border: 0.01rem solid #fff;
}
.leve {
  font-size: 0.3rem;
  color: #fff;
}
.leve_num {
  background: linear-gradient(to bottom, #cc8472, #b76064);
  -webkit-background-clip: text;
  color: transparent;
}
.top_box,
.bottom_box {
  width: 90%;
  margin: 0 auto;
  background: #fff;
}
.icon {
  background-size: 100% auto;
}
.icon_id {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.icon_name {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.icon_phone {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.icon_email {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.icon_wechat {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.icon_qq {
  background: url(../../assets/img/public/arrow_left.png) no-repeat;
}
.right_box {
  width: 93%;
  position: relative;
  height: 0.4rem;
  line-height: 0.4rem;
}
.border {
  width: 100%;
  border-bottom: 0.01rem solid #ddd;
  position: absolute;
  bottom: -0.1rem;
  height: 0.1rem;
}
.arrow_r {
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.08rem;
}
img {
  height: 0.28rem;
  margin-top: 0.05rem;
}
li {
  padding: 0.1rem 0.3rem;
  font-size: 0.25rem;
  color: #666666;
}
p {
  display: block;
}
.li {
  height: 0.4rem;
  line-height: 0.4rem;
  display: block;
}
</style>
