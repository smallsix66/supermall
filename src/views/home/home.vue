<template>
  <div>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banner="banner"></HomeSwiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from 'network/home.js'
export default {
  name:'Home',
  data(){
    return {
      banner:[],
      recommand:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper
  },
  created(){
    //1、请求多个数据
    getHomeMultidata().then(res=>{
      this.banner = res.data.banner.list;
      this.recommand = res.data.recommend.list;
    })
  }
}
</script>

<style>

</style>
