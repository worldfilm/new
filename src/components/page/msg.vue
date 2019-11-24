<template>
  <div class="news">
    <heard/>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>
          <span
            v-text="item.type===1?'系统':null||item.type===2?'公告':null||item.type===3?'站内':null"
            :class="item.type===1?'system':null||item.type===2?'notice':null||item.type===3?'zone':null"
          ></span>
          <span class="red" v-if="item.isNew">NEW!</span>
          <span v-text="item.time" class="fr"></span>
        </p>
        <p>
          <span v-text="item.text" class="text text_splice"></span>
          <span class="arrow_r fr"></span>
        </p>
      </li>
    </ul>
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
      list: [
        {
          isNew: true,
          type: 1,
          time: "2019-09-17   15:02",
          text: "欢饮莅临江湖互娱棋牌中心！热门活动推荐{新会员}"
        },
        {
          isNew: false,
          type: 2,
          time: "2019-09-17   15:02",
          text:
            "欢饮莅临江湖互娱棋牌中心！热门活动推荐{新会员}欢饮莅临江湖互娱棋牌中心！热门活动推荐{新会员}欢饮莅临江湖互娱棋牌中心！热门活动推荐{新会员}"
        },
        {
          isNew: true,
          type: 3,
          time: "2019-09-17   15:02",
          text: "欢饮莅临江湖互娱棋牌中心！热门活动推荐{新会员}"
        }
      ]
    };
  }
};
</script>
<style  scoped>
.news {
  font-size: 0.25rem;
  height: 100%;
}
ul{
  padding: 1rem 0;
}
li {
  padding: 0.2rem 0.2rem 0.05rem 0.6rem;
  background: #fff;
  color: #999999;
  margin-top: 0.25rem;
}
p {
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-bottom: 0.1rem;
}

.arrow_r {
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.red {
  color: #e22e2e;
  font-weight: bold;
}
.text {
  width: 6.2rem;
  float: left;
}
</style>
