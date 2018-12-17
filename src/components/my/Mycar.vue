<template>
    <div class="w-100 h-100 back-gray color-regu">     
         
        <div class="othername one-p back-white fill-both flex-wrap flex-horizontal flex-align-center flex-justify-between">
            <span class="font-32">车辆型号</span>
             <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center">
                <span class="font-32 color-regu">奥迪A6</span>
                <span class="icon-arrowright font-40 color-gray ml-20 two-p" style="margin-right:-0.1rem"></span>
            </div>
        </div>    
         <div class="othername border-b border-t one-p back-white fill-both flex-wrap flex-horizontal flex-align-center flex-justify-between" @click="openplatenumber">
            <span class="font-32">车牌号</span>
            <div class="flex-wrap flex-horizontal flex-align-center flex-justify-center">
                <span class="font-32 color-regu">未添加</span>
                <span class="icon-arrowright font-40 color-gray ml-20 two-p" style="margin-right:-0.1rem"></span>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    methods:{
        openplatenumber(){
            this.$router.push({path:'/Platenumber',query:{}})
        }
    }
}
</script>
<style scoped>
.othername{height:1rem;}
</style>
