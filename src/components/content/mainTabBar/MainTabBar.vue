<template>
    <tab-bar>
      <tab-bar-item path = "/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path = "/activity" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/activity.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/activity_active.png" alt="">
        <div slot="item-text">活动</div>
      </tab-bar-item>
      <tab-bar-item path = "/assignment" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/assignment.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/assignment_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path = "/mine" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/mine.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/mine_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
import Home from 'views/home/home.vue'
import Activity from 'views/activity/activity.vue'
import  Assignment from 'views/assignment/assignment.vue'
import Mine from 'views/mine/mine.vue'

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem,
        Home,
        Activity,
        Assignment,
        Mine
    }
}
</script>

<style>

</style>
