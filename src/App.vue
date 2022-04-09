<template>
  <ClockStyle />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClockStyle from './components/Style/ComponentsStyle.vue';

export default defineComponent({
  name: 'App',
  components: {
    ClockStyle,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
