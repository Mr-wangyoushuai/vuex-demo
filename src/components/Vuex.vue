<template>


<div style="font-size: 18px; line-height: 30px;">
  <transition name="fade">
    <my-component ref="button" :number="number" v-show="showHeader">
      <template v-slot:first>
        <div style="color: red; cursor: pointer">插槽first</div>  
      </template>
      <template v-slot:second>
        <div>插槽second</div>  
      </template>
    </my-component> 
  </transition>
   
  <!-- <my-component ref="button" :number="number" v-show="showHeader"><div type="sub">我是你mama</div></my-component>   -->
  <div style="color: blue">
    vuex 改变数据:
  </div>
  <div>
    {{$store.state.changeNumber}}
  </div>
  <div>
    {{$store.state.showFooter}}
  </div>
 
  <button @click="change"> 数字+1</button>
  <button @click="show"> show header</button>
  <button @click="hide"> hide header</button>
   <div style="color: blue">
     icon图标添加
    </div>      
  <div class="icon">
    <span class="iconfont icon-icon_addperson"></span>
  </div>
</div>
</template>
<script>
import MyHeader from './common/MyHeader'
export default {
  name: 'vuex',
  data(){
    return {
      number: 100,
      showHeader: true
    }
  },
  components: {
    'my-component':MyHeader
  },
  methods: {
    show(){
      this.$store.dispatch('showFooter')
      this.showHeader = this.$store.getters.isShow;
      console.log(this.$store.getters.isShow)
    },
    hide(){
      this.$store.dispatch('hideFooter')
      this.showHeader = this.$store.getters.isShow;
    

    },
    change(){
      this.$store.dispatch('plus')
    },
    getElement(){
      alert(111)
      console.log(this.$refs.button)
    }
  },
  mounted(){
    console.log(this.$store.state.changeNumber)
  }
}
</script>
<style scoped>
  .icon{
    width: 50px;
    height: 50px;
    background: red;
    line-height: 50px;
    margin: 0 auto;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>


