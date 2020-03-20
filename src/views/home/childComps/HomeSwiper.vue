<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banner" :key="item">
        <a :href="item.link">
          <img :src="item.image"/>
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
  props:{
    banner:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
