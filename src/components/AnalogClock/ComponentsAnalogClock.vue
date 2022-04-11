<template>
    <div class="clock">
        <Dials style="margin: 0; "/>
        <Hand class="hand seconds" type="seconds" :rotate="seconds"/>
        <Hand class="hand minutes" type="minutes" :rotate="minutes" />
        <Hand class="hand hours"   type="hours"   :rotate="hours"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Hand from './ComponentsHand.vue'
import Dials from './ComponentsDials.vue'
import { DateTimeStore } from '../../store/DateTimeStore'

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
            let val = 6 * (ss.value + nn.value / 100000);
            if (ss.value % 5 === 0)
            {
                val = val + 1
            }
            return val;
        });
        const minutes = computed(() => {
            let val = 6 * (mm.value + ss.value / 360);
            if (mm.value % 5 === 0 || mm.value === 0
            )
            {
                val = val + 1;
            } 
            return val;
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