<template>
    <div class="tab-bar-item" @click="clickItem">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active:isActive}" :style="fontStyleColor"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return {
           
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        },
        fontStyleColor(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        clickItem(){
            console.log('点击了icon'+this.path);
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
#tab-bar{
  display: flex;
  background: #f5f5f5;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 13px;
}
.tab-bar-item img{
    margin-top: 5px;
    height: 23px;
    widows: 23px;
}
.active{
    color: red;
}
</style>