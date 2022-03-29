<template>
    <div class="hand" :class="type" :style="{'transform': 'rotate(' + rotate + 'deg)'}" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        rotate: Number,
        type: String
    }
})
</script>

<style scoped>
.hand {
    background-color: rgba(0, 0, 0, 0.8);
}

.seconds {
    width: 1px;
    height: 150px;
    transform-origin: 0px 130px;
}

.minutes {
    width: 3px;
    height :150px;
    transform-origin: 1.5px 130px;
}

.hours {
    width: 5px;
    height: 100px;
    transform-origin: 2.5px 80px;
}
</style>