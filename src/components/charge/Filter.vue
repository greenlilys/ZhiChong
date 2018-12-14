<template>
    <div class="filter fill-both w-100 h-100 back-white">
        <div class="lineh border-b flex-wrap flex-forizontal flex-align-center flex-justify-between">
            <div class="f-content one-p">仅显示有空闲的站点</div>
            <mt-switch v-model="value" @change='handlechange'  class='one-p'></mt-switch>
        </div>
        <div class="lineh border-b flex-wrap flex-forizontal flex-align-center flex-justify-between">
            <div class="f-content one-p">仅显示对外开放的站点</div>
            <mt-switch v-model="value1" @change='handlechange1' class='one-p'></mt-switch>
        </div>
        <!-- 支持车型 -->
        <div class="font-32 mt-20" style="height:.6rem;line-height:.6rem;">支持车型</div>
        <div class="carBox border-b pb-30 f-content color-gray flex-wrap flex-align-center flex-horizontal flex-justify-between" style="flex-wrap:wrap;">
            <template v-for='(item,index) in carType'>
                <div :key="index" class="itemCar mt-20 flex-wrap flex-align-center flex-justify-center">{{item.type}}</div>
            </template>
        </div>
        <!-- 充电桩类型 -->
         <div class="font-32 mt-20" style="height:.6rem;line-height:.6rem;">充电桩类型</div>
        <div class="carBox  border-b pb-30 f-content color-gray flex-wrap flex-align-center flex-horizontal flex-justify-between" style="flex-wrap:wrap;">
            <template v-for='(item,index) in carType'>
                <div :key="index" class="itemCar mt-20 flex-wrap flex-align-center flex-justify-center">{{item.type}}</div>
            </template>
        </div>

        <div class="btn btn-back-gray ripples flex-wrap flex-align-center flex-justify-center" style="margin-top:.8rem;box-shadow: 0px 0px  8px #ccc;">
                <div class="font-34 btn-back-color one-p">重 置</div>
        </div>
         <div class="btn back-blue ripple flex-wrap flex-align-center flex-justify-center" style="margin-top:.4rem;">
                <div class="font-34 one-p">确 定</div>
        </div>
 
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:false,
            value1:false,
            carType:[{type:'小货车'},{type:'小货车'},{type:'小货车'},{type:'小货车'},{type:'小货车'},{type:'小货车'}]
        }
    },
    methods:{
        handlechange(v){            
            this.value = !v;
            // console.log(this.value)
        },
         handlechange1(v){            
            this.value1 = !v;
            // console.log(this.value)
        }
    },
    created(){
        
    }
}
</script>
<style scoped>
.filter{margin:0 auto;box-sizing: border-box;}
.lineh{height:1rem;}
.itemCar{border:1px solid #ddd;padding:.12rem;border-radius:0.08rem;margin-right:.2rem;}
.carBox div:nth-child(5n){margin-right:0;}
</style>
