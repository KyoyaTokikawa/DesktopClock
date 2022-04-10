<template>
<div style="display: flex; margin: 20px 30px;">
    <div class="AnalogClock">
        <div style=" margin: 0 auto; display: inline-block;">
            <ComponentsAnalogClockVue />
        </div>
    </div>
    <div style="display: flex; flex-direction: column;">
        <div class="DateBox">
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
    }
})
</script>

<style scoped>
.AnalogClock {
    width: 50%;
    text-align: center;
}

.DigitalClockBox {
    display: flex;
    align-items: center;
    height: 50%;
    width: 370px;
    border: 5px solid;
    border-color: gold;
    margin-top: 5px;
    background-color: blue;
    z-index: 0;
}
.DigitalClock {
    color: rgb(255, 255, 255);
    margin: 0 auto;
}


.DateBox {
    display: flex;
    align-items: center;
    height: 50%;
    width: 370px;
    border: 5px solid;
    border-color: gold;
    background-color: red;
    margin-bottom: 5px;
    z-index: 0;
}
.Date {
    color: rgb(253, 253, 255);
    margin: 0 auto;
}
</style>