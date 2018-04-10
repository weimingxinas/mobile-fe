<template>
  <div class="order">
     <!-- 商家模块头部 -->
     <seller-header :seller="seller"></seller-header>
     <div class="tab">
       <div class="tab-item">
         <router-link to="">点菜</router-link>
       </div>
       <div class="tab-item">
         <router-link to="">评价</router-link>
       </div>
       <div class="tab-item">
         <router-link to="">商家</router-link>
       </div>
     </div>

     <keep-alive>
       <router-view :seller="seller"></router-view>
     </keep-alive>      
  </div>
</template>
<script>
export default {
    name: 'order',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        };
    },
    created () {
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
