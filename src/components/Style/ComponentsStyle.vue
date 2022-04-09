<template>
    <div class="neko-wrap-a">
        <div class="neko-box-a">
            <div class="city_border_white"></div>
            <div class="city_border_blue"></div>
            <ComponetnsBaseVue />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponetnsBaseVue from "../ComponentsBase.vue";

export default defineComponent({
    name: 'ClockBase',
    components : {
        ComponetnsBaseVue
    }
})
</script>

<style scoped>
.neko-box-a {
 position: relative;
 margin: 20em auto 3em;
 width: 50%; /* ボックス幅 */
 background: #000000; /* ボックス背景色 */
 color: #333333; /* 文字色 */
 font-weight: bold; /* テキスト太字（不要なら行を削除） */
 text-align: center; /* テキスト中央（不要なら行を削除） */
 border: 7px solid rgb(247, 204, 93); /* ボックス枠線(太さ・線種・色) */
 border-radius: 50px;
 z-index: auto;
}
.neko-box-a::before, 
.neko-box-a::after {
 height: 200px;
 width: 200px;
 position: absolute;
 content:'';
 top: -150px;
 z-index: -10;
}
.neko-box-a::before {
 left: 3%;
 background: rgb(250, 239, 141); /* 左耳背景色 */
 border: 7px solid rgb(247, 204, 93); /* 左耳枠線(太さ・線種・色) */
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 115deg );
}
.neko-box-a::after {
 right: 3%;
 background: rgb(250, 239, 141); /* 右耳背景色 */
 border: 7px solid rgb(247, 204, 93); /* 右耳枠線(太さ・線種・色) */
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 155deg );
}

.city_border_white {
    position: absolute;
    background-color: white;
    top: 20%;
    width: 100%;
    height: 60%;
}
.city_border_blue {
    position: absolute;
    background-color: navy;
    top: 40%;
    width: 100%;
    height: 20%;
}
.neko-wrap-a{
 background-color: transparent;
 position: relative;
 height: 50%;
 z-index: 0;
}
</style>