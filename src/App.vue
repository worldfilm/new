<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import foot from "@/components/foot.vue";
import heard from "@/components/heard.vue";
export default {
  name: "App",
  components: {
    foot,
    heard
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
  },
  created() {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  position: absolute;
  top: 0.2rem;
  bottom: 0.8rem;
  width: 100%;
  font-size: 0.2rem;
}
#app * {
  box-sizing: border-box;
}
.disabled {
  color: #aaa !important;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  cursor: pointer;
}

input {
  outline: none;
}

li {
  list-style: none;
}
img {
  border: none;
  max-width: 100%;
  vertical-align: middle;
}

body,
p,
form,
input,
button,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

input,
textarea {
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
  -webkit-appearance: none;
}

table {
  border-collapse: collapse;
}

input,
select,
textarea {
  outline: none;
  border: none;
  background: none;
}

a {
  outline: 0;
  cursor: pointer;
  color: #666;
}

a:link,
a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a {
  text-decoration: none;
  -webkit-touch-callout: none;
}


.fl {
  float: left;
}

.fr {
  float: right;
}

body {
  margin: 0 auto;
  min-width: 320px;
  color: #666;
  background: #fff;
}

body>* {
  box-sizing: border-box;
}

/*单行文本溢出显示省略号*/
.text_splice {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*多行文本溢出显示省略号*/
.more_text_splice {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.arrow_r {
  background-image: url(./assets/img/public/arrow_r.png);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
