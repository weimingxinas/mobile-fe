<template>
  <div id="app">
    <sellerHeader></sellerHeader>
    
  </div>
</template>
<script>
import sellerHeader from '@/components/common/sellerHeader/sellerHeader';
export default {
    name: 'App',
    components: {
        sellerHeader
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
