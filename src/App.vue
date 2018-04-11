<template>
  <div id="app">
    <order></order>
    <p>woOO</p>   
  </div>
</template>
<script>
import order from '@/views/order';
export default {
    name: 'App',
    components: {
        order
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
