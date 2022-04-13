<template>
<div class="Style" style="display: flex; margin: 20px 30px;">
    <div class="AnalogClock">
        <div style=" margin: 0 auto; display: inline-block;">
            <ComponentsAnalogClockVue />
        </div>
    </div>
    <div style="display: flex; flex-direction: column;">
        <div :class="[DateBox]">
            <div class="Date">
                <ComponentsDateVue />
            </div>
        </div>
        <div  class="DigitalClockBox">
            <div class="DigitalClock">
                <ComponentsDigitalClockVue />
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentsAnalogClockVue from './AnalogClock/ComponentsAnalogClock.vue';
import ComponentsDateVue from "./Date/ComponentsDate.vue";
import ComponentsDigitalClockVue from "./DigitalClock/ComponentsDigitalClock.vue"

export default defineComponent({
    name: 'ClockBase',
    components : {
        ComponentsAnalogClockVue,
        ComponentsDateVue,
        ComponentsDigitalClockVue
    },
    props:{
    },
    setup(){
        let AnalogClock = 'AnalogClock';
        let DateBox = 'DateBox'+ " "+ 'GoldCity_DateBox';
        return {
            AnalogClock,
            DateBox
        }
    }
})
</script>

<style scoped>

</style>