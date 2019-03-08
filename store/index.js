import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 存储数据
const state = {
  showFooter: true,
  flag: true,
  changeNumber: 0
}
// 获取数据
const getters = {
  isShow(state){
    return state.showFooter
  },
  changeNumber(state){
    return state.changeNumber
  }
}
// 改变数据
const mutations = { 
  show(state){
    state.showFooter = true
  },
  hide(state){
    state.showFooter = false
  },
  increateNumber(state,num){
    if(num)  return state.changeNumber = num; 
    state.changeNumber ++;
  }
}
// 操作数据改变
const actions = {
  showFooter(context){
    context.commit('show')
  },
  hideFooter(context){
    context.commit('hide')
  },
  plus(context, num){
    context.commit('increateNumber', num)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store