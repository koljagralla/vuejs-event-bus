<template>
  <div id="app">
    <ExampleComponentA />
    <ExampleComponentB />
  </div>
</template>

<script>
import ExampleComponentB from './components/ExampleComponentB.vue';
import ExampleComponentA from './components/ExampleComponentA.vue';

export default {
  name: 'App',
  components: {
    ExampleComponentA,
    ExampleComponentB,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
