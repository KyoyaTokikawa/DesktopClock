<template>
    <div class="dials">
        <div 
            v-for="n in 60" 
            :key="n"
            :style="{
                'top':top(n) + 'px',
                'left': left(n) + 'px',
                'transform': 'rotate(' + rotate(n) + 'deg)'}"
            :class="['scale', {'fifth': n % 5 == 0}]">
            <p v-if="n % 5 == 0" 
               :style="{'transform': 'rotate(' + -rotate(n) + 'deg)'}">
                {{ n / 5 }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent ({
    setup(){
        const top = ((val: number) => {
            return 150 - Math.cos(Math.PI / 30 * val) * 150
        });

        const left = ((val: number) => {
            return 150 + Math.sin(Math.PI / 30 * val) * 150
        });

        const rotate = ((val: number) => {
            return 6 * val;
        })

        return {
            top,
            left,
            rotate
        }
    }
});
</script>

<style scoped>
.dials {
    background: rgb(255, 230, 4);
    border-radius: 300px;
    position: relative;
    height: 300px;
    width: 300px;
}

.scale {
    background-color: rgb(245, 0, 0);
    position: absolute;
    width: 1px;
    height: 10px;
    transform-origin: left top;
}

.fifth {
    width: 5px;
    height: 20px;
}

.fifth p {
    margin-top: 20px;
    margin-left: -15px;
    color: rgb(0, 17, 255);
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    width: 35px;
}
</style>