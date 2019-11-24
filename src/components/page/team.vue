<template>
  <div class="team">
    <heard/>
    <div class="content">
      <div class="box_h">
        <select name id>
          <option value>热门</option>
          <option value>xxxx</option>
          <option value>xxxxx</option>
          <option value>xxxxx</option>
          <option value>xxxxx</option>
        </select>
        <select name id class="red">
          <option value>今天</option>
          <option value>昨天</option>
          <option value>一周</option>
          <option value>本月</option>
          <option value>本月</option>
          <option value>本月</option>
        </select>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>日期</th>
            <th>输赢</th>
            <th>活动</th>
            <th>实际盈亏</th>
          </tr>
        </thead>
        <tr></tr>
        <tbody>
          <tr v-for="(item,index) in list" :key="index">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
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
        list:[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ]
    };
  },
  methods: {
    getPakage() {},
    getPayUrl() {}
  },
  created() {}
};
</script>

<style  scoped>
.team {
  height: 100%;
  width: 100%;
  font-size: 0.25rem;
}
.content {
  margin: 0.8rem 0;
  font-size: 0;
}
.box_h {
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.01rem solid #ccc;
  padding: 0.25rem 0 0 0.5rem;
      margin-bottom: 0.3rem;
}
table {
  height: 100%;
  width: 95%;
  font-size: 0.25rem;
  margin: 0 auto;
  border: 0.01rem solid #eee;
}
th {
  color: #c84e5c;
  height: 0.6rem;
  line-height: 0.6rem;
  background: #fcf6f4;
  width: 25%;
  border: none;
  font-weight: normal;
}
tr {
}
td {
  height: 0.6rem;
  line-height: 0.6rem;
  background: #fff;
}
select{color: #666666;}
.red{color: #c84e5c;}
</style>
