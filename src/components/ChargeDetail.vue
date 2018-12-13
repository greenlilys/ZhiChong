<template>
    <div class="w-100 h-100 back-gray flex-wrap flex-vertical">
        <!-- 头部地址 -->
        <div class="back-blue color-white fill-both tophead">
            <h1 class="fl-address">百度大厦</h1>
            <h2 class="font-28 mt-20 mb-20">地址：龙泽苑街道回龙观西大街西大街西大街西大街西大街
                <span>4</span><span>KM</span>
            </h2>
            <div class="font-28 clear"><span class="fl">开放时间：不对外开放</span><span class="fr">智充</span></div>
        </div>
        <!-- 选项卡 -->
         <div class="w-100 back-white font-28 color-regu flex-wrap flex-horizontal flex-align-center mt-20 cardbox">
             <template v-for="(item,index) in arr">
                 <div :key="index" class="tabcard ripples flex-con flex-wrap flex-justify-center flex-align-center" :class="[index == currentindex ? 'active' : 'noactive']" @click="changetab(index)">
                      <span class="">{{item.val}}</span>
                </div>
             </template>
         </div>
         <router-view class="flex-con"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    val:'充电桩'
                },
                 {
                    val:'收费标准'
                },
                 {
                    val:'实景图'
                }
            ],
            currentindex:0
        }
    },
    methods:{
        changetab(i){
            if(i ==  this.currentindex) return false;
            this.currentindex = i;
            switch(i){
                case 0:
                this.$router.push({path:'/ChargeDetail',query:{}});
                break;
                case 1:
                this.$router.push({path:'/ChargeDetail/ChargingStandard',query:{}});
                break;
                case 2:
                this.$router.push({path:'/ChargeDetail/RealPicture',query:{}});
                break;
            }
        },
        reset(routename){
            if(routename == 'ChargingStandard'){
                this.currentindex = 1;
            }
             if(routename == 'Chargepile'){
                this.currentindex = 0;
            }
             if(routename == 'RealPicture'){
                this.currentindex = 2;
            }
        }
    },
    created(){
        this.reset(this.$route.name)
        console.log(this.$route.name)

    }
}
</script>
<style scoped>
.tophead{padding-top:0.4rem;padding-bottom:0.4rem;}
.tophead h2{width:5.6rem;}
.tophead h2{line-height:0.5rem;}
.cardbox div{height:0.76rem;}
.tabcard{text-align:center;}
.active{border-bottom:1px #0099FF solid;color:#0099FF;}
.noactive{border-bottom:1px #999 solid;}
</style>
