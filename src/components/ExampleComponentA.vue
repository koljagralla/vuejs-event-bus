<template>
  <div>{{ value }}</div>
</template>

<script>
import EventBus from '../EventBus';

export default {
  name: 'ExampleComponentA',
  data() {
    return {
      value: 'not set yet',
    };
  },
  mounted() {
    EventBus.$on('my-event', (payload) => {
      this.value = payload;
    });
  },
};
</script>

<style></style>
