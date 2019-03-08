<template>
  <header @click="numberConponent">
      我是header组件-{{myNumber}}
      <button>
        <slot name="first">haha</slot>
      </button>
      <button>
        <slot name="second">haha</slot>
      </button>
  </header>
</template>
<script>
export default {
  name: 'myHeader',
  data(){
    return {
      myNumber:this.number
    }
  },
  props:{number: Number},
  methods: {
    numberConponent(){
      this.$store.dispatch('plus',100)
    }
  }
}
</script>
<style scoped>
header{
  width: 100%;
  height: 80px;
  background: #eee;
}
</style>

