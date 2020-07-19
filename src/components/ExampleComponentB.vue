<template>
  <button v-on:click="handleClick">Click me!</button>
</template>

<script>
import EventBus from '../EventBus';

export default {
  name: 'ExampleComponentB',
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleClick() {
      this.counter += 1;
      EventBus.$emit('my-event', this.counter);
    },
  },
};
</script>

<style></style>
