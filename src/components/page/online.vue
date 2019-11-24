<template>
  <div class="online">
    <heard/>
    <div class="head">
      <span>客服小丽</span>
    </div>
    <div class="msg_box">
      <div class="msg"> </div>
      <div class="msg_send"></div>
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
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style  scoped>
.online {
  background: #fcfcfc;
  font-size: 0.25rem;
      height: 100%;
}
.head {
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.8rem;
  text-align: center;
  color: #3e96ac;
  background: #e5e5e5;
}
.msg_box{
      width: 100%;
    height: 100%;
    background: #fff;
}
.msg_send{}
</style>
