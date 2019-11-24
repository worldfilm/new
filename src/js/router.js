import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home.vue'//主页
import User from '@/components/page/user.vue'//个人中心
import Login from '@/components/page/login.vue'//登录
import Register from '@/components/page/register.vue'//注册
import Forget from '@/components/page/forget.vue'//找回密码
import Pay from '@/components/page/Pay.vue'//支付
import Profile from '@/components/page/profile.vue'//个人信息
import Safe from '@/components/page/safe.vue'//安全中心
import Avator from '@/components/page/avator.vue'//修改头像
import Withdraw from '@/components/page/withdraw.vue'//提现
import Recharge from '@/components/page/recharge.vue'//充值
import News from '@/components/page/news.vue'//提现
import Vip from '@/components/page/vip.vue'//vip
import Report from '@/components/page/report.vue'//个人报表
import Recoad from '@/components/page/recoad.vue'//投注记录
import Charge from '@/components/page/charge.vue'//充值记录
import Bank from '@/components/page/bank.vue'//银行卡
import Msg from '@/components/page/msg.vue'//消息中心
import Serve from '@/components/page/serve.vue'//客服中心
import About from '@/components/page/about.vue'//版本信息
import Promot from '@/components/page/promot.vue'//推广中心
import Online from '@/components/page/online.vue'//在线客服
import Team from '@/components/page/team.vue'//团队管理
import TeamReport from '@/components/page/teamReport.vue'//团队报表    
import Income from '@/components/page/income.vue'//团队报表   

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home, meta: { title: '首页' }, },
    { path: '/home', meta: { title: '首页' }, component: Home },
    { path: '/user', meta: { title: '个人中心' }, component: User },
    { path: '/recharge', meta: { title: '充值' }, component: Recharge },
    { path: '/withdraw', meta: { title: '提现' }, component: Withdraw },
    { path: '/news', meta: { title: '消息中心' }, component: News },
    { path: '/login', meta: { title: '登录' }, component: Login },
    { path: '/register', meta: { title: '注册' }, component: Register },
    { path: '/forget', meta: { title: '忘记密码' }, component: Forget },
    { path: '/profile', meta: { title: '个人资料', requiresAuth: true }, component: Profile },
    { path: '/avator', meta: { title: '修改头像', requiresAuth: true }, component: Avator },
    { path: '/vip', meta: { title: 'vip详情', requiresAuth: true }, component: Vip },
    { path: '/report', meta: { title: '个人报表', requiresAuth: true }, component: Report },
    { path: '/recoad', meta: { title: '投注记录', requiresAuth: true }, component: Recoad },
    { path: '/charge', meta: { title: '充值记录', requiresAuth: true }, component: Charge },
    { path: '/bank', meta: { title: '银行卡', requiresAuth: true }, component: Bank },
    { path: '/safe', meta: { title: '安全中心', requiresAuth: true }, component: Safe },
    { path: '/msg', meta: { title: '消息中心', requiresAuth: true }, component: Msg },
    { path: '/serve', meta: { title: '客服中心', requiresAuth: true }, component: Serve },
    { path: '/about', meta: { title: '版本信息', requiresAuth: true }, component: About },
    { path: '/promot', meta: { title: '推广中心', requiresAuth: true }, component: Promot },
    { path: '/online', meta: { title: '在线客服', requiresAuth: true }, component: Online },
    { path: '/team', meta: { title: '团队管理', requiresAuth: true }, component: Team },
    { path: '/teamReport', meta: { title: '团队报表', requiresAuth: true }, component: TeamReport },
    { path: '/income', meta: { title: '团队收益', requiresAuth: true }, component: Income },
  ]
})

export default router
