<template>
    <div class="clock">
        <Dials />
        <Hand class="hand seconds" type="seconds" :rotate="seconds"/>
        <Hand class="hand minutes" type="minutes" :rotate="minutes" />
        <Hand class="hand hours"   type="hours"   :rotate="hours"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Hand from './ComponentsHand.vue'
import Dials from './ComponentsDials.vue'
import { DateTimeStore } from '@/store/DateTimeStore'

export default defineComponent({
    components: {
        Hand,
        Dials
    },
    setup(){
        const datetimestore = new DateTimeStore();

        let hh = datetimestore.ValNumHH;    
        let mm = datetimestore.ValNumMM;
        let ss = datetimestore.ValNumSS;
        let nn = datetimestore.ValNumNN;

        const seconds = computed(() => {
            return 6 * (ss.value + nn.value / 1000);
        });
        const minutes = computed(() => {
            return 6 * (mm.value + ss.value / 360)
        });
        const hours = computed(() => {
            return 30 * (hh.value + mm.value / 360)
        });

        return {
            seconds,
            minutes,
            hours
        }
    }
})
</script>

<style scoped>
.clock {
    position: relative;
}

.hand {
    position: absolute;
}

.seconds {
    left: 150px;
    top: 20px;
}

.minutes {
    left: 149px;
    top: 20px;
}

.hours {
    left: 148px;
    top: 70px;
}
</style>