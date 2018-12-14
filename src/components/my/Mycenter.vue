<template>
    <div class="w-100 h-100 back-gray color-regu flex-wrap flex-vertical">
        <!-- 头部 -->
        <div class="person flex-wrap flex-justify-center flex-align-center">
            <div class="content color-white w-100 flex-wrap flex-vertical flex-justify-between flex-align-center">
                <div class="imgbox"><img src="" alt=""></div>
                <h1 class='font-30'>昵称</h1>
                <div class="font-28 numberphone flex-wrap flex-horizontal flex-justify-center flex-align-center">
                     <span>135980967963</span>
                     <span class="icon-arrowright font-30 one-p"></span>
                </div>
            </div>
        </div>
        <!-- 数据 -->
        <div class="numbers border-b back-white flex-wrap flex-horizontal flex-align-center">
            <div class="flex-wrap border-r flex-vertical flex-align-center flex-justify-center flex-con">
                <h1 class="font-36 color-blue pb-10">0.00</h1>
                <h2 class="font-24 color-gray">总充电量（度）</h2>
            </div>
            <div class="flex-wrap border-r flex-vertical flex-align-center flex-justify-center flex-con">
                <h1 class="font-36 color-blue pb-10">0.00</h1>
                <h2 class="font-24 color-gray">减少碳排放（千克）</h2>
            </div>
            <div class="flex-wrap flex-vertical flex-align-center flex-justify-center flex-con">
                <h1 class="font-36 color-blue pb-10">0.00</h1>
                <h2 class="font-24 color-gray">总费用（元）</h2>
            </div>
        </div>
        <!-- 列表 -->
        <div class="flex-wrap flex-horizontal flex-align-center flex-justify-between listitem back-white border-b one-p">
            <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center"><span class="font-36 icon-wallet two-p"></span><span class="font-32 ml-10 one-p">我的钱包</span></div>
            <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center color-gray"><span class="font-28">0.00元</span><span class="font-40 icon-arrowright ml-20"></span></div>
        </div>
        <div class="flex-wrap flex-horizontal flex-align-center flex-justify-between listitem back-white border-b one-p">
            <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center"><span class="font-36 icon-text two-p"></span><span class="font-32 ml-10 one-p">我的订单</span></div>
            <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center color-gray"><span class="font-40 icon-arrowright ml-20"></span></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.person{height:4.74rem;background:burlywood;}
.content{height:3.2rem;}
.imgbox{width:1.7rem;height:1.7rem;border-radius:50%;border:1px solid #fff;}
.numberphone{border:1px solid #fff;border-radius:0.28rem;height:0.46rem;color:#fff;padding:0.04rem 0.1rem 0.04rem 0.14rem;}
.numbers{height:1.62rem;}
.listitem{height:1rem;}
.listitem div:nth-child(1){padding-left:0.3rem;}
.listitem div:nth-child(2){padding-right:0.3rem;}
</style>
