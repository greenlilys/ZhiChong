<template>
    <div class="back-white h-100 fill-both">
        <div class="w-100 search flex-wrap flex-vertical justify-align-center">
            <input type="text" v-model="val" placeholder="请输入搜索地址" class="pl-20">
            <div class="btn back-blue ripple flex-wrap flex-align-center flex-justify-center">
                <div class="font-34 one-p">搜 索</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            val:''
        }
    }
}
</script>
<style scoped>
.search input{margin:0 auto;width:6.66rem;border:1px solid #999;border-radius:.1rem;height:.9rem;
margin-bottom:.4rem;box-sizing:border-box;}
.search{padding-top:1.2rem;}
</style>
