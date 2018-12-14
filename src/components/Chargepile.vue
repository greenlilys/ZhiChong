<template>
    <div>
         <div class="fill-both onp-p back-white listheight flex-wrap flex-horizontal flex-align-center">
             <span class="icon-message font-34 mr-10 one-p" style="color:#f44d5b;"></span>
             <span class="one-p font-28"> 点击下列枪头可进行充电或预约充电</span>  
         </div>
         <div class="font-28 listheight fill-both border-t border-b back-white flex-wrap flex-horizontal flex-align-center">
             <span class="icon-lightning font-36 mr-10 two-p" style="color:#78c829;margin-left:-0.02rem;"></span>
             <span class="two-p">交流</span>
         </div>
         <div class="w-100 one-p flex-wrap border-b flex-horizontal flex-align-center" style="flex-wrap:wrap;">
           
             <div class="item back-white flex-wrap flex-horizontal flex-justify-between flex-align-center">
                 <div class="flex-wrap flex-horizontal flex-justify-between flex-align-center">
                     <span class="icon-chargepile chargeicon"></span>
                     <span class="f-content ml-10" style="color:#f49500;">待拔枪</span>
                 </div>
                 <div class="infobox flex-wrap flex-vertical flex-justify-center flex-align-center f-content">
                     <span class="line-only">交流3号交流3号交流3号</span>
                     <span class="line-only">7.0KM</span>
                 </div>
             </div>
             <div class="item border-l back-white flex-wrap flex-horizontal flex-justify-between flex-align-center">
                 <div class="flex-wrap flex-horizontal flex-justify-between flex-align-center">
                     <span class="icon-chargepile chargeicon"></span>
                     <span class="f-content ml-10" style="color:#f49500;">待拔枪</span>
                 </div>
                 <div class="infobox flex-wrap flex-vertical flex-justify-center flex-align-center f-content">
                     <span class="line-only">交流3号交流3号交流3号</span>
                     <span class="line-only">7.0KM</span>
                 </div>
             </div>
         </div>
         <div class="font-28 mt-20 listheight fill-both border-t border-b back-white flex-wrap flex-horizontal flex-justify-between flex-align-center">
             <div class="flex-wrap h-100 flex-horizontal flex-justify-center flex-align-center">
                <span class="icon-clock font-36 mr-10 two-p" style="color:#78c829;margin-left:-0.02rem;"></span>
                <span class="three-p">当前无人排队</span>
             </div>
             <div class="flex-wrap flex-horizontal flex-justify-center h-100 flex-align-center">
                    <span class="icon-problem font-36 three-p color-gray"></span>
             </div>
            
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped>

.item{width:50%;height:1.8rem;box-sizing:border-box;padding:0 0.3rem;}
.chargeicon{border:1px solid #f49500;border-radius:50%;padding:0.1rem;font-size:0.4rem;color:#f49500;}

.infobox{width:1.2rem;}

</style>
