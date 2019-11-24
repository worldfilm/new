<template>
  <div class="safe">
    <heard/>
    <div class="tab">
      <a href="javascript:;" :class="{active: tabId === 0}" @click="tabId = 0">账户密码</a>
      <a href="javascript:;" :class="{active: tabId === 2}" @click="tabId = 2">支付密码</a>
    </div>
    <div class="safe-box">
    </div>
    <foot/>
  </div>
</template>

<script>
import heard from "@/components/heard.vue";
import foot from "@/components/foot.vue";
export default {
components: {heard,foot},
  data () {
    return {
      tabId: 0,
      userInfo: {},
      birthday: '',
      signature: '',
      sex: 0
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style  scoped>

</style>
