<template>
    <div class="base-wrap-a">
        <div class="base-box-a">
            <div class="city_border_white"></div>
            <div class="city_border_Navy_1"></div>
            <div class="city_border_Navy_2"></div>
            <div class="EarCharm_sub-1"></div>
            <div class="EarCharm_sub-2"></div>
            <div class="EarCharm"></div>
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
.base-box-a {
 position: relative;
 top: 180px;
 width: 98%; /* ボックス幅 */
 background: #000000; /* ボックス背景色 */
 color: #333333; /* 文字色 */
 font-weight: bold; /* テキスト太字（不要なら行を削除） */
 text-align: center; /* テキスト中央（不要なら行を削除） */
 border: 10px solid gold; /* ボックス枠線(太さ・線種・色) */
 border-radius: 50px;
 z-index: auto;
}
.base-box-a::before, 
.base-box-a::after {
 height: 200px;
 width: 200px;
 position: absolute;
 content:'';
 top: -150px;
 z-index: -1;
}

.base-box-a::before {
 left: 3%;
 background: rgb(250, 239, 141);
 border-top: 18px solid;
 border-right: 12px solid;
 border-left: 12px solid;
 border-bottom: 8px solid;
 border-color: gold;
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 125deg );
}

.base-box-a::after {
 right: 3%;
 background: rgb(250, 239, 141);
 border-top: 12px solid;
 border-right: 18px solid;
 border-left: 8px solid;
 border-bottom: 12px solid;
 border-color: gold;
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 155deg );
} 
.EarCharm,
.EarCharm::after{
    width: 80px;
    height: 80px;
    left: 12%;
    content: "";
}

.EarCharm {
    position: absolute;
    top: -80px;
    left: 40px;
    border-radius: 40px 200px 200px 40px;
    transform: rotate(15deg);
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
}
.EarCharm::after {
    position: absolute;
    content: "";
    border-radius: 300px 40px 40px 300px;
    left: 100px;
    top: 0px;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    z-index: -10;
}

.EarCharm::before {
    position: absolute;
    content: "";
    width: 40px;
    height: 60px;
    left: 70px;
    top: 10px;
    border-radius: 40%;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
}

.EarCharm_sub-1 {
    position: absolute;
    left: 65px;
    top: -25px;
    margin: 0;
    padding: 10px 0;
    z-index: 2;
    height: 100px;
    width: 40px;
    border-radius: 0px 40px 0px 0px ;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    transform: rotate(30deg);
    z-index: auto;
}

.EarCharm_sub-1:after {
    content: '';
    position: absolute;
    left: 0;
    top: 99%;
    height: 0px;
    width: 0px;
    border-radius: 0px 0px 10px 10px;
    border-left: 20px solid rgb(46, 46, 105);
    border-right: 20px  solid rgb(46, 46, 105);
    border-bottom: 5px solid transparent;
}

.EarCharm_sub-2 {
    position: absolute;
    left: 125px;
    top: -10px;
    margin: 0;
    padding: 10px 0;
    z-index: 2;
    height: 100px;
    width: 40px;
    border-radius: 40px 0px 0px 0px ;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    transform: rotate(350deg);
    z-index: auto;
}

.EarCharm_sub-2:after {
    content: '';
    position: absolute;
    left: 0;
    top: 99%;
    height: 0px;
    width: 0px;
    border-radius: 0px 0px 10px 10px;
    border-left: 20px solid rgb(46, 46, 105);
    border-right: 20px  solid rgb(46, 46, 105);
    border-bottom: 5px solid transparent;
}
.city_border_white {
    position: absolute;
    background-color: white;
    top: 20%;
    width: 100%;
    height: 60%;
}
.city_border_Navy_1 {
    position: absolute;
    background-color: navy;
    top: 32%;
    width: 100%;
    height: 12%;
}

.city_border_Navy_2 {
    position: absolute;
    background-color: navy;
    top: 56%;
    width: 100%;
    height: 12%;
}

.base-wrap-a{
 background-color: transparent;
 position: relative;
 height: 50%;
 -webkit-app-region: drag;
}
</style>