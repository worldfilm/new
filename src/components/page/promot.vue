<template>
  <div class="promot">
    <div class="user_box">
      <div class="header-bar">
        <span class="left-btn" @click="goBack"></span>
        <div class="title">推广中心</div>
        <div class="right-btn">
          <slot></slot>
        </div>
      </div>
      <div class="box">
        <ul>
          <li class="li" v-for="(item,index) in list" :key="index">
            <span
              class="num"
              v-text="Math.floor(item.count*100)/100==0?'0.00':Math.floor(item.count*100)/100"
            >0.00</span>
            <button class="btn" v-text="item.title">直属下级人数</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab_box">
      <div class="item">
        <router-link to="/team">
          <span class="icon footer_guanli"></span>
          <span class="txt">团队管理</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/teamReport">
          <span class="icon footer_chaxun"></span>
          <span class="txt">团队报表</span>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/income">
          <span class="icon footer_wanjia"></span>
          <span class="txt">代理收益</span>
        </router-link>
      </div>
    </div>
    <div class="tui">
      <span>推荐好友赚取丰厚佣金，好运分享哦</span>
      <button class="share" @click="share">分享</button>
    </div>
    <div class="masker" v-if="showShare" @click="maskClick">
      <div class="share_box" @click="boxClick">
        <span class="title_title">推广方式</span>
        <span class="title_txt">推广好友，提高自得洗码奖励还能拿下级洗码金额</span>
        <div class="content">
          <div class="qrcode">
            <img src="../../assets/img/promot/qr.png" alt class="qr_img" />
            <span>长安保存图片</span>
          </div>
          <div class="content_box">
            <div class="tab">
              <div class="share_to">
                <router-link to>
                  <img src="../../assets/img/promot/分享到朋友圈.png" alt />
                </router-link>
              </div>
              <div class="share_to">
                <router-link to>
                  <img src="../../assets/img/promot/分享到微信.png" alt />
                </router-link>
              </div>
              <div class="share_to">
                <router-link to>
                  <img src="../../assets/img/promot/分享到QQ.png" alt />
                </router-link>
              </div>
            </div>
            <div class="share_link">
              <span class="title_link text_paink">推广链接:</span>
              <span class="link">www.jianghuahuyu.com</span>
              <button class="copy paink">复制</button>
            </div>
            <div class="share_link">
              <span class="title_link text_purple">推广链接:</span>
              <span class="link">www.jianghuahuyu.com</span>
              <button class="copy purple">复制</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot/>
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
export default {
  components: {foot},
  data() {
    return {
      list: [
        { count: 1.256, title: "今日团队新增" },
        { count: 0.0, title: "今日团队新增" },
        { count: 0.0, title: "今日团队新增" },
        { count: 0.0, title: "今日团队新增" },
        { count: 0.0, title: "今日团队新增" },
        { count: 0.0, title: "今日团队新增" }
      ],
      showShare: false
    };
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    share() {
      this.showShare = true;
    },
    maskClick() {
      this.showShare = false;
    },
    boxClick(event) {
      event.stopPropagation();
    }
  },
  created() {}
};
</script>

<style  scoped>
.promot {
  font-size: 0.25rem;
  height: 100%;
}
.masker {
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  background: rgba(15, 14, 14, 0.7);
  z-index: 0;
}
.share_box {
  position: relative;
  top: 8.2rem;
  width: 100%;
  height: 4.5rem;
  background: #ffffff;
  z-index: 10;
  text-align: center;
}
.share_to {
  width: 1.3rem;
  height: 0.75rem;
  display: inline-block;
  margin-right: 0.05rem;
}
.share_link {
  text-align: left;
}
.title_title {
  display: block;
  color: #333333;
  font-size: 0.35rem;
  padding: 0.2rem;
}
.title_txt {
  display: block;
  color: #666666;
  padding: 0.2rem 0;
}
.title_link {
  display: block;
  text-align: left;
  font-size: 0.22rem;
  margin: 0.05rem auto;
}
.tab {
  text-align: left;
}
.link {
  background: #eee;
    padding: 0.1rem;
    display: inline-block;
}
.content {
  margin-top: 0.1rem;
  text-align: left;
}
.qrcode {
  float: left;
  width: 30%;
  border: 0.01rem solid #b7b7b7;
  padding: 0.1rem;
  margin: 0rem 0rem 0rem 0.5rem;
  text-align: center;
}
.qr_img {
  width: 2rem;
  height: 2rem;
  background: #eee;
  display: inline-block;
}
.content_box {
  display: inline-block;
  margin-left: 0.2rem;
}
.copy{
    padding: 0.1rem 0.2rem;
    color: #fff;
}
.btn {
  background: #c76871;
  color: #fff;
  padding: 0.05rem 0.1rem;
  display: block;
  margin: 0 auto;
  font-size: 0.2rem;
}
.num {
  font-size: 0.35rem;
  display: block;
  margin: 0 auto;
  background: linear-gradient(to bottom, #cc8472, #b76064);
  -webkit-background-clip: text;
  color: transparent;
  padding: 0.05rem;
}
.li {
  text-align: center;
  width: 33%;
  display: inline-block;
  padding: 0.3rem 0;
  padding-bottom: 0.2rem;
}
.txt {
  color: #2ea2b2;
}
.item {
  width: 32%;
  display: inline-block;
  text-align: center;
  padding: 0.6rem 0;
}
.tab_box {
  text-align: center;
}
.icon {
  margin: 0.2rem auto;
  height: 0.6rem;
  width: 0.6rem;
  display: block;
  margin-top: 0;
}
.tui {
  padding: 0.3rem 0.5rem;
  background: #fff;
  color: #666666;
}
.share {
  background: #2ea2b2;
  color: #fff;
  height: 0.4rem;
  width: 0.8rem;
  float: right;
}
.header-bar {
  position: relative;
  top: 0;
  left: 0;
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
.usercenter {
  font-size: 0.2rem;
  height: 100%;
}
.user_box {
  position: relative;
  height: 4.95rem;
  background-image: url(../../assets/img/promot/bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.box {
  width: 87%;
  margin: 0 auto;
  background-image: url(../../assets/img/promot/box_bg.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 3.5rem;
  margin-top: 0.25rem;
}
.footer_chaxun {
  background: url(../../assets/img/promot/footer_chaxun.png) no-repeat;
  background-size: 100% auto;
}
.footer_guanli {
  background: url(../../assets/img/promot/footer_guanli.png) no-repeat;
  background-size: 100% auto;
}
.footer_wanjia {
  background: url(../../assets/img/promot/footer_wanjia.png) no-repeat;
  background-size: 100% auto;
}
.paink{background:#bc488c;}
.purple{background:#7148bc;}
.text_paink{color:#bc488c;}
.text_purple{color:#7148bc;}
</style>
