<template>
<div class="header-bar">
  <span class="left-btn " @click="goBack"></span>
  <div class="title">{{title}}</div>
  <div class="right-btn">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    titler: {
      type: String
    }
  },
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$route.meta.title || this.titler
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ?
        this.$router.go(-1) :
        this.$router.push('/')
    }
  }
}
</script>

<style  scoped>
.header-bar {
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  box-shadow: -1px 0px 1px #ccc;
  background-image: url(../assets/img/public/bg_h.png);
  background-size: 100% auto;
  background-repeat: no-repeat;
  z-index: 1000;
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
  background: url(../assets/img/public/arrow_left.png) 0.15rem 0.18rem no-repeat;
  background-size: 30%;
}

.right-btn {
  right: 0;
  padding-right: 0.1rem;
}
</style>
