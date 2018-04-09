<template>
  <div class="order">
     <!-- 商家模块头部 -->
     
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
