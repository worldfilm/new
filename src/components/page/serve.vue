<template>
  <div class="serve">
    <heard/>
    <ul class="serve_ul">
      <li v-for="(item,index) in list" @click="serve(index)" :key="index">
        <div class="serve_li">
          <span :class="['icon',item.class]"></span>
          <div class="m">
            <span v-text="item.title" class="serve_title"></span>
            <span v-text="item.info"></span>
          </div>
          <!-- <span class="arrow_r"></span> -->
          <span :class="['arrow_r',index==num?'d9':null]"></span>
        </div>
        <div v-if="num<3&&num>0&&num==index?toggled:null" class="serve_box">
          <div class="box">
            <img src="../../assets/img/serve/serve_q.png" alt class="img" />
            <span class="serve_name">昵称：客服专员</span>
            <span class="serve_conta">QQ：2121112</span>
            <button class="btn">点击进入</button>
          </div>
           <div class="box">
            <img src="../../assets/img/serve/serve_q.png" alt class="img" />
            <span class="serve_name">昵称：客服专员</span>
            <span class="serve_conta">QQ：2121112</span>
            <button class="btn">点击进入</button>
          </div>
           <div class="box">
            <img src="../../assets/img/serve/serve_q.png" alt class="img" />
            <span class="serve_name">昵称：客服专员</span>
            <span class="serve_conta">QQ：2121112</span>
            <button class="btn">点击进入</button>
          </div>
        </div>
      </li>
    </ul>
    <div class="asking" v-if="num==3?toggled:null">
      <ul class="tab_ul">
        <li
          :class="['tab_li',{active:tabNum==index}]"
          v-for="(item,index) in tabList"
          :key="index"
          @click="tabClick(item,index)"
        >
          <span v-text="item.title"></span>
        </li>
      </ul>
      <ul class="text_ul" v-if="tabNum+1" :data-xx="tabNum">
        <li v-for="(item,index) in changeList" :key="index" class="text_li">
          <span class="num" v-text="index+1"></span>
          <span class="text_title" v-text="item.title"></span>
          <span class="text_txt" v-text="item.text"></span>
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
      num: null,
      tabNum: 0,
      active: "",
      deg: "",
      list: [
        {
          class: "serve_icon",
          title: "在线客服",
          info: "24小时全天候服务",
          link: ""
        },
        {
          class: "qq_icon",
          title: "qq客服",
          info: "海量用户的第一选择",
          link: ""
        },
        {
          class: "weixin_icon",
          title: "微信客服",
          info: "一对一温馨客服",
          link: ""
        },

        {
          class: "asking_icon",
          title: "常见问题",
          info: "问题咨询，智能，自助",
          link: "ask"
        }
      ],
      tabList: [
        { title: "游戏问题" },
        { title: "充值提现" },
        { title: "账号管理" },
        { title: "充值提现" }
      ],
      txtList: [],
      changeList: [],
      showGroup: false,
      toggled: false
    };
  },
  methods: {
    serve(index) {
      this.num = index;
      this.toggled = !this.toggled;
      if (index == 0) {
        this.$router.push("/online")
      }
    },
    tabClick(item, index) {
      this.tabNum = index;
      this.changeList = this.txtList[index];
    },
    getData() {
      let list1 = [
        {
          title: "自己的邀请码在哪？",
          text:
            "自己的邀请码可以通过联系客服，根据客服 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        },
        {
          title: "自己的邀请码在哪？",
          text:
            "自己的邀请码可以通过联系客服，根据客服 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        },
        {
          title: "自己的邀请码在哪？",
          text:
            "自己的邀请码可以通过联系客服，根据客服 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        }
      ];
      let list2 = [
        {
          title: "xxxxxxxxx",
          text:
            "xxxxxxxxxxxxxxxx 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        },
        {
          title: "xxxxxxxxxx",
          text:
            "xxxxxxxxxxxxxxxx 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        }
      ];
      let list3 = [
        {
          title: "yyyyyyyyyyyy",
          text:
            "yyyyyyyyyyyyyyyyy 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        },
        {
          title: "yyyyyyyyyyyyyyyyy",
          text:
            "yyyyyyyyyyyyyyyyy 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        }
      ];
      let list4 = [
        {
          title: "zzzzzzzzzz",
          text:
            "zzzzzzzzzzzzzz 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        },
        {
          title: "zzzzzzzzzzzzzzzz",
          text:
            "zzzzzzzzzzzzzz 所要求，提供的资料，通过申请后客服会在 2-3个工作日发送邀请码给你。"
        }
      ];
      this.txtList = [list1, list2, list3, list4];
      this.changeList = this.txtList[0];
    }
    //  toggle (event) {
    //     this.toggled = !this.toggled
    //   },
  },
  created() {
    this.getData();
  }
};
</script>

<style  scoped>
.serve {
  margin-top: 0.8rem;
  font-size: 0.3rem;
  margin-bottom: 1rem;
}
.icon {
  width: 0.6rem;
  height: 0.7rem;
  display: inline-block;
  margin: 0.1rem 0.45rem;
}
.arrow_r {
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  margin: 0.2rem;
  margin-top: 0.3rem;
  float: right;
  transform: rotate(90deg);
}
.m {
  width: 3rem;
  display: inline-block;
  font-size: 0.22rem;
  color: #898989;
}
.serve_box {
     width: 92%;
    background: #fff;
    font-size: 0.22rem;
    color: #7b7b7b;
    margin: 0 auto;
    font-size: 0;
}
.box {
  display: inline-block;
  text-align: center;
  background: #efefef;
  margin: 0.15rem 0;
  padding: 0.1rem;
  width: 29%;
  margin-left: 0.22rem;
}
.img {
  height: 1rem;
  display: block;
  margin: 0 auto;
}
.serve_name,
.serve_conta {
  padding: 0.1rem 0;
      font-size: 0.22rem;
}
.btn {
  background: #e77087;
  color: #fff;
  padding: 0.05rem 0.1rem;
  border-radius: 0.1rem;
  display: block;
  margin: 0.1rem auto;
}
/* .d9{transform: rotate(90deg);} */
.serve_title {
  font-size: 0.3rem;
  display: block;
  margin-bottom: 0.2rem;
}
.serve_li {
  background: #fff;
  margin: 0.2rem 0;
  padding: 0.2rem 0;
  padding-right: 0.3rem;
}
.serve_ul {
  padding-top: 0.1rem;
}
.asking {
  width: 88%;
  margin: 0 auto;
}
.tab_ul {
  border-top: 0.01rem solid #fff;
}
.tab_li {
  width: 25%;
  display: inline-block;
  text-align: center;
  padding: 0.1rem 0;
}
.active {
  background: #c84f5c;
  color: #fff;
}
.text_ul {
  background: #fff;
  padding: 0.4rem;
}
.text_li {
  padding: 0.2rem 0;
  border-bottom: 0.01rem solid #ddd;
}
.num {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  display: inline-block;
  background: #c84f5c;
  text-align: center;
  border-radius: 0.2rem;
  color: #fff;
}
.text_title {
  color: #c84f5c;
  font-size: 0.3rem;
}
.text_txt {
  font-size: 0.25rem;
  display: block;
  line-height: 0.45rem;
}
.qq_icon {
  background: url(../../assets/img/serve/qq.png) no-repeat;
  background-size: 100% auto;
}
.weixin_icon {
  background: url(../../assets/img/serve/weixin.png) no-repeat;
  background-size: 100% auto;
}
.serve_icon {
  background: url(../../assets/img/serve/serve.png) no-repeat;
  background-size: 100% auto;
}
.asking_icon {
  background: url(../../assets/img/serve/ask.png) no-repeat;
  background-size: 100% auto;
}
</style>
