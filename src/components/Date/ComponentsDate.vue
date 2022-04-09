<template>
    <div style="font-size: 70px; font-family:monospace, sans-serif;">
        {{ Year }}.{{ Month }}.{{ Day }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DateTimeStore } from '@/store/DateTimeStore'

export default defineComponent({
    name: 'DateBorad',
    setup(){
        const date: DateTimeStore = new DateTimeStore();
        let Year = date.ValStrYear;
        let Month = date.ValStrMonth;
        let Day = date.ValStrDay;

        return {
            Year,
            Month,
            Day
        }
    }
})
</script>

<style scoped>
</style>