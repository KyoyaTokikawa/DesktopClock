<template>
    <div class="neko-wrap-a">
        <div class="neko-box-a">
            <div class="city_border_white"></div>
            <div class="city_border_Navy_1"></div>
            <div class="city_border_Navy_2"></div>
            <div class="EarCharm_sub-1"></div>
            <div class="EarCharm_sub-2"></div>
            <div class="EarCharm left"></div>
            <div class="EarCharm right"></div>
            <div class="EarCharm_ring left"></div>
            <div class="EarCharm_main"></div>
            <div class="EarCharm_ring right"></div>
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
.neko-box-a::before, 
.neko-box-a::after {
 height: 200px;
 width: 200px;
 position: absolute;
 content:'';
 top: -150px;
 z-index: -1;
}
.neko-box-a::before {
 left: 3%;
 background: rgb(250, 239, 141); /* 左耳背景色 */
 border-top: 18px solid; /* 左耳枠線(太さ・線種・色) */
 border-right: 12px solid; /* 左耳枠線(太さ・線種・色) */
 border-left: 12px solid; /* 左耳枠線(太さ・線種・色) */
 border-bottom: 8px solid; /* 左耳枠線(太さ・線種・色) */
 border-color: gold;
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 125deg );
}
.neko-box-a::after {
 right: 3%;
 background: rgb(250, 239, 141); /* 右耳背景色 */
 border-top: 12px solid; /* 右耳枠線(太さ・線種・色) */
 border-right: 18px solid; /* 右耳枠線(太さ・線種・色) */
 border-left: 8px solid; /* 右耳枠線(太さ・線種・色) */
 border-bottom: 12px solid; /* 右耳枠線(太さ・線種・色) */
 border-color: gold;
 border-radius: 300px 1px 300px 1px;
 transform: rotate( 155deg );
}
.EarCharm
{
    width: 90px;
    height: 60px;
    top: -60px;
    position: absolute;
    border: solid 2px rgb(46, 46, 105);
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    content: "";
}

.EarCharm.left {
    border-radius: 30% 60% 0 10% / 30% 60% 0 10%;
    left: -15px;
}
.EarCharm.right {
    border-radius: 60% 30% 10% 0 / 60% 30% 10% 0;
    left: 90px
}

.EarCharm_main {
    position: absolute;
    content: "";
    width: 25px;
    height: 35px;
    left: 70px;
    top: -35px;
    border-radius: 40%;
    border: solid 2px rgb(46, 46, 105);
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    z-index: 1;
}


.EarCharm_ring {
    border-radius: 100%;
    position: absolute;
    width: 90px;
    height: 20px;
    top: -12px;
    content: "";
    border: solid 2px rgb(46, 46, 105);
    transform: rotate(180deg);
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
}
.EarCharm_ring.left {
    left: -15px;
}
.EarCharm_ring.right {
    left: 90px;
}
.EarCharm_sub-1,
.EarCharm_sub-2 {
    height: 100px;
    width: 40px;
    top: -15px;
    border: solid 2px rgb(46, 46, 105);
}
.EarCharm_sub-1 {
    position: absolute;
    left: 20px;
    margin: 0;
    padding: 10px 0;
    z-index: 2;
    border-radius: 50px 0px 0px 0px ;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    transform: rotate(15deg);
    z-index: auto;
}

.EarCharm_sub-1:after {
    content: '';
    position: absolute;
    left: -2px;
    top: 100%;
    height: 0px;
    width: 0px;
    border-radius: 0px 0px 10px 10px;
    border-left: 22px solid rgb(46, 46, 105);
    border-right: 22px  solid rgb(46, 46, 105);
    border-bottom: 5px solid transparent;
}

.EarCharm_sub-2 {
    position: absolute;
    left: 115px;
    margin: 0;
    padding: 10px 0;
    z-index: 2;
    border-radius: 0px 50px 0px 0px ;
    background: linear-gradient(rgb(93, 92, 173) 0%, rgb(46, 46, 105) 99%);
    transform: rotate(-25deg);
    z-index: auto;
}

.EarCharm_sub-2:after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    height: 0px;
    width: 0px;
    border-radius: 0px 0px 10px 10px;
    border-left: 22px solid rgb(46, 46, 105);
    border-right: 22px  solid rgb(46, 46, 105);
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

.neko-wrap-a{
 background-color: transparent;
 position: relative;
 height: 50%;
 -webkit-app-region: drag;
}
</style>