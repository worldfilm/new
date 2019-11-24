<template>
  <div class="home">
    <swiper />
    <div class="marquee_content">
      <div class="icon_left">
        <i class="iconfont icon-horn"></i>
      </div>
      <div class="marquee">
        <marquee
          class="quee"
          style="font-size: 0.25rem;float: left;font-family: PINGFANG_BOLD;"
          scrollamount="3"
          direction="left"
          align="Middle"
          loop="infinite"
        >
          欢迎您进入【江湖娱乐网】 : 【江湖娱乐网www.xxx.com】用心打造彩界第一品牌。
          24小时客服热线：0063-9388855555 【江湖娱乐开奖直播站：www.xxxx.com 比官方更快一步】
        </marquee>
      </div>
    </div>
    <div class="info">
      <info />
    </div>
    <div class="gamelist">
      <div class="li" v-for="(item,index) in list" :key="index">
        <div :class="item.src">
          <div class="content_title">
            <span
              v-text="item.name"
              class="title"
              :style="'text-shadow: -0.03rem 0.02rem 0.02rem #'+item.color"
            ></span>
          </div>
          <div class="content_txt">
            <span v-text="item.txt" class="txt"></span>
          </div>
          <div class="img_box">
            <img :src="item.icon" alt :class="['img_icon',item.className]" />
          </div>
        </div>
      </div>
    </div>
    <div class="editgame">
      <ul class="editgame_ul">
        <li v-for="(item,index) in gameList" :key="index" class="editgame_li">
          <img :src="item.src" alt :class="['editgame_img','g_'+index]" />
        </li>
      </ul>
    </div>
    <foot/>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import info from "@/components/info.vue";
import foot from "@/components/foot.vue";

import icon_1 from "../../assets/img/home/icon_1.png";
import icon_2 from "../../assets/img/home/icon_2.png";
import icon_3 from "../../assets/img/home/icon_3.png";
import icon_4 from "../../assets/img/home/icon_4.png";
import icon_5 from "../../assets/img/home/icon_5.png";
import icon_6 from "../../assets/img/home/icon_6.png";
import kpqznn from "../../assets/img/home/kpqznn.png";
import gxks from "../../assets/img/home/gxks.png";
import mrpy from "../../assets/img/home/mrpy.png";
import jsys from "../../assets/img/home/jsys.png";
export default {
  components: {
    swiper,
    info,
    foot
  },
  data() {
    return {
      list: [
        {
          name: "热门游戏",
          src: "bg_1",
          txt: "最热门的都在这里",
          icon: icon_1,
          className: "img_1",
          color: "ee2921"
        },
        {
          name: "老虎机合集",
          src: "bg_2",
          txt: "最热门的都在这里",
          icon: icon_2,
          className: "img_2",
          color: "fc4705"
        },
        {
          name: "真人棋牌",
          src: "bg_3",
          txt: "美女在线陪玩",
          icon: icon_3,
          className: "img_3",
          color: "f53a94"
        },
        {
          name: "趣味竞猜",
          src: "bg_4",
          txt: "赚现金 赢大奖",
          icon: icon_4,
          className: "img_4",
          color: "8a35fd"
        },
        {
          name: "棋牌游戏 ",
          src: "bg_5",
          txt: "赚现金 赢大奖",
          icon: icon_5,
          className: "img_5",
          color: "14cc69 "
        },
        {
          name: "竞技竞猜",
          src: "bg_6",
          txt: "竞技竞猜",
          icon: icon_6,
          className: "img_6",
          color: "15a4c7"
        }
      ],
      gameList: [
        { src: kpqznn, type: 1 },
        { src: gxks, type: 1 },
        { src: mrpy, type: 2 },
        { src: jsys, type: 1 }
      ]
    };
  }
};
</script>
<style  scoped>
.home {
  margin-bottom: 1rem;
}
.editgame_ul {
  padding: 0 0.2rem 0 0.65rem;
}
.editgame_li {
  display: inline-block;
  width: 25%;
  height: 1.3rem;
  position: relative;
}
.editgame_img {
  display: block;
  height: 1.2rem;
  margin: 0 auto;
  position: absolute;
}
.g_0 {
  left: 0.1rem;
  top: 0.02rem;
}
.g_1 {
  left: 0.12rem;
  top: 0.02rem;
}
.g_2 {
  left: 0.07rem;
  top: 0.02rem;
}
.g_3 {
  left: 0.22rem;
  top: 0.02rem;
}
.info {
  background-image: url(../../assets/img/home/user_info.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 1.77rem;
  width: 94%;
  margin: 0 auto;
}
.marquee_content {
  height: 0.5rem;
  width: 94%;
  margin: 0 auto;
}
.li {
  display: block;
  height: 1rem;
}
.marquee {
  width: 91%;
  float: left;
  line-height: 0.5rem;
  font-family: PINGFANG_BOLD;
  color: #727269;
}

.icon_left {
  height: 0.5rem;
  width: 0.5rem;
  float: left;
  padding-left: 0.1rem;
  margin-right: 0.1rem;
  padding-left: 0.05rem;
}

.icon-horn {
  display: block;
  height: 0.35rem;
  margin-top: 0.1rem;
  width: 0.5rem;
  background: url(../../assets/img/home/notice.png) no-repeat;
  background-size: 100% auto;
}
.gamelist {
  font-size: 0;
  width: 96.7%;
  margin: 0.1rem auto;
}
.li {
  width: calc(100% / 2);
  display: inline-block;
  height: 1.75rem;
  position: relative;
}
.bg_1 {
  background: url("../../assets/img/home/game_bg_1.png") no-repeat;
}
.bg_2 {
  background: url("../../assets/img/home/game_bg_2.png") no-repeat;
}
.bg_3 {
  background: url("../../assets/img/home/game_bg_3.png") no-repeat;
}
.bg_4 {
  background: url("../../assets/img/home/game_bg_4.png") no-repeat;
}
.bg_5 {
  background: url("../../assets/img/home/game_bg_5.png") no-repeat;
}
.bg_6 {
  background: url("../../assets/img/home/game_bg_6.png") no-repeat;
}
.bg_1,
.bg_2,
.bg_3,
.bg_4,
.bg_5,
.bg_6 {
  background-size: 100% auto;
  height: 92%;
  margin: 0.1rem 0.1rem 0 0.1rem;
  box-shadow: 0.01rem 0.03rem 0.03rem #c7c7c7;
}

.editgame {
  background: url(../../assets/img/home/editgame.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  height: 1.47rem;
  margin-bottom: 0.8rem;
  border: 0.1rem solid #379eb4;
  width: 94%;
  margin: 0 auto;
  margin-top: 0.2rem;
  box-shadow: 0.03rem 0.03rem 0.1rem #c7c7c7;
}
.content_title {
  position: absolute;
  top: 0.4rem;
  left: 0.25rem;
}
.content_txt {
  position: absolute;
  top: 0.9rem;
  left: 0.25rem;
}
.title {
  font-size: 0.25rem;
  color: #fff;
  font-family: FZCQK;
  font-size: 0.37rem;
}
.txt {
  font-size: 0.2rem;
  color: #fff;
}
.img_box {
  height: 1.6rem;
  width: 1.5rem;
  display: inline-block;
  float: right;
  position: relative;
  bottom: 0rem;
}
.img_icon {
  position: absolute;
  bottom: 0;
  height: 100%;
}
.icon_1 {
  background: url("../../assets/img/home/icon_1.png") no-repeat;
}
.icon_2 {
  background: url("../../assets/img/home/icon_2.png") no-repeat;
}
.icon_3 {
  background: url("../../assets/img/home/icon_3.png") no-repeat;
}
.icon_4 {
  background: url("../../assets/img/home/icon_4.png") no-repeat;
}
.icon_5 {
  background: url("../../assets/img/home/icon_5.png") no-repeat;
}
.icon_6 {
  background: url("../../assets/img/home/icon_6.png") no-repeat;
}
.icon_1,
.icon_2,
.icon_3,
.icon_4,
.icon_5,
.icon_6 {
  height: 1.5rem;
  width: 1rem;
  display: inline-block;
  float: right;
  position: relative;
  bottom: 0.6rem;
}
.img_1 {
  height: 2.2rem;
  bottom: 0.2rem;
  left: 0.1rem;
}
.img_2 {
  height: 1rem;
  bottom: 0.2rem;
  left: 0.3rem;
}
.img_3 {
  height: 1.35rem;
  left: 0.26rem;
}
.img_4 {
  height: 1.3rem;
  left: 0.22rem;
}
.img_5 {
  height: 1.1rem;
  bottom: 0.2rem;
  left: 0.1rem;
}
.img_6 {
  height: 1rem;
  right: 0.1rem;
  bottom: 0.15rem;
}
</style>
