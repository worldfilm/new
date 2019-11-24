<template>
  <div class="footer">
    <div class="link" v-for="(item,index) in list" @click="footClick(item,index)" :key="index">
      <div :class="['link_img',item.class]">
        <img :src="item.imgSrc2" :class="['link_img',item.class2,item.color]" />
      </div>
      <div :class="['link_text',item.class3]">
        <span v-text="item.name" :class="item.color"></span>
      </div>
    </div>
  </div>
</template>

<script>
import footer_h from "../assets/img/public/footer_h.png";
import footer_t from "../assets/img/public/footer_t.png";
import footer_a from "../assets/img/public/footer_a.png";
import footer_p from "../assets/img/public/footer_p.png";
import footer_n from "../assets/img/public/footer_n.png";
import foot_h from "../assets/img/public/foot_h.png";
import foot_t from "../assets/img/public/foot_t.png";
import foot_a from "../assets/img/public/foot_a.png";
import foot_p from "../assets/img/public/foot_p.png";
import foot_n from "../assets/img/public/foot_n.png";
export default {
  data() {
    return {
      selected: "/",
      bottomAd: [],
      list: [
        {
          name: "首页",
          imgSrc: footer_h,
          link: "/home",
          class: "",
          class2: "",
          class3: "",
          color:'',
          imgSrc2:footer_h
        },
        {
          name: "推广",
          imgSrc: footer_t,
          link: "/promot",
          class: "",
          class2: "",
          class3: "",
          color:'pocity',
          imgSrc2:foot_t
        },
        {
          name: "充值",
          imgSrc: footer_a,
          link: "/recharge",
          class: "jia",
          class2: "img_jia",
          class3: "txt",
          color:'blue',
          imgSrc2:foot_a
        },
        {
          name: "个人",
          imgSrc: footer_p,
          link: "/user",
          class: "",
          class2: "",
          class3: "",
          color:'pocity',
          imgSrc2:foot_p
        },
        {
          name: "消息",
          imgSrc: footer_n,
          link: "/news",
          class: "",
          class2: "",
          class3: "",
          color:'pocity',
          imgSrc2:foot_n
        }
      ]
    };
  },
  methods: {
    footClick(item, index) {
      let list=this.list
      let arr=[foot_h,foot_t,foot_a,foot_p,foot_n]
      for(let i in arr){
         this.list[i].imgSrc2=arr[i]
         this.list[i].color='pocity'
         this.list[2].color='blue'
      }
      if(index!=2){
      this.list[index].color='deep'
      this.list[2].color='light_blue'
      }
      this.list[index].imgSrc2=item.imgSrc
      this.$router.push(item.link);
    }
  },
  created() {}
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  height: 0.9rem;
  background: url(../assets/img/public/footer_bg.png);
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-size: 100% auto;
}
.blue{color: #2fa6b4;}
.link {
  font-size: 0.2rem;
  display: inline-block;
  width: 25%;
  text-align: center;
  padding-top: 0.1rem;
}
.link_text {
  color: #ce616b;
}
.txt {
  position: relative;
  bottom: 0.44rem;
}
img {
  height: 0.45rem;
}

.footer_h {
  background: url();
}
.footer_t {
  background: url();
}
.footer_a {
  background: url();
  height: 0.5rem;
  width: 0.5rem;
}
.jia {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
  transform: rotate(45deg);
  bottom: 0.4rem;
  display: inline-block;
  background: #f5eae2;
}
.img_jia {
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.pocity{opacity: 0.8;}
.deep{opacity: 1;}
.light_blue{opacity: 0.8;color: #2fa6b4;}
</style>
