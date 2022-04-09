<template>
    <div style="font-size: 70px; font-family:monospace, sans-serif;">
        {{Hour}}:{{Minutes}}:{{Seconds}}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DateTimeStore } from '@/store/DateTimeStore'

export default defineComponent({
    name: 'DigitalClock',
    setup(){
        const date: DateTimeStore = new DateTimeStore();
        let Hour    = date.ValStrHH;
        let Minutes = date.ValStrMM;
        let Seconds = date.ValStrSS;

        return {
            Hour,
            Minutes,
            Seconds
        }
    }
})
</script>

<style scoped>
</style>