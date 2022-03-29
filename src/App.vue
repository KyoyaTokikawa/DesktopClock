<template>
  <ComponentsAnalogClockVue style="top: 50%;left: 30%;"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponentsAnalogClockVue from './components/ComponentsAnalogClock.vue';

export default defineComponent({
  name: 'App',
  components: {
    ComponentsAnalogClockVue
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
  margin-top: 60px;
}
</style>
