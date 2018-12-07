<template>
    <div class="w-100 h-100 back-gray color-regu flex-wrap flex-vertical">
       <div class="head w-100 box-s fill-both flex-wrap flex-horizontal flex-align-center f-content 
        border-b back-white">
        <!-- <router-link :to="{path:'/Main/Businessdetail',query:{ id:scope.row.id}}">		-->			
           <div class="h-100 ripples flex-con flex-horizontal flex-align-center flex-wrap" @click="openSearch">
               <span class="icon-address font-34"></span>
               <div class="flex-con line-only">龙泽苑街道回龙观西大街西大街</div>
               <span class="pr-20 pl-20" v-bind:class="[isSearch ? 'icon-arrowDown' : 'icon-arrowUp']"></span>
           </div>
        <!-- </router-link> -->
           <div class="border-l h-100 ripples flex-horizontal flex-align-center flex-justify-center flex-wrap" @click="openFilter">
               <div class=""> 筛选</div>
               <span class="ml-10" v-bind:class="[isFilter ? 'icon-arrowDown' : 'icon-arrowUp']"></span>
            </div>
           <div class="border-l h-100 ripples flex-align-center flex-wrap flex-justify-end" @click="openAddress">
               <div class="pl-20">地图模式</div>
            </div>
       </div>

        <router-view class="flex-con"></router-view>     

           
    </div>
</template>
<script>
export default {
    data(){
        return{
           isSearch:true,
           isFilter:true
        }
    },
    methods:{
       openSearch(){
           if(this.isSearch){
               this.isSearch = false;
                this.$router.push({path:'/ChargingStation/SearchCharge',query:{}});                
           }else{
               console.log(9)
                this.$router.push({path:'/ChargingStation',query:{}});
                this.isSearch = true;
           }          

       },
       openFilter(){
           if(this.isFilter){
               this.isFilter = false;
                this.$router.push({path:'/ChargingStation/Filter',query:{}});                
           }else{
                this.$router.replace({path:'/ChargingStation',query:{}});
                this.isFilter = true;
           }             
       },
       openAddress(){
           this.$router.push({path:'/Address',query:{}})
       }
    }
}
</script>
<style scoped>
.head{height:0.96rem;}
.head div:nth-child(2){width:1.46rem;text-align:center;}

</style>


