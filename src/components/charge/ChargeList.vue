<template>
    <div>
         <div class="mt-20 border-t border-b back-white fill-both">
           <div class="border-b flex-wrap flex-horizontal flex-justify-between flex-align-center" style="height:0.7rem;" @click="openDetail">
               <div class="fl-address">龙城花园</div>
               <div class="fl-name">智充</div>
           </div>
           <div class="border-b flex-wrap flex-horizontal flex-justify-between flex-align-center" @click="openDetail">
               <div class="f-content line-hl pt-10 pb-10">
                   <div class="flex-wrap flex-horizontal" style="line-height:0.52rem">
                       <div>详细地址：</div>
                        <div style="width:4.1rem;" class="line-two">龙泽苑街道回龙观西大街西大街西大街西大街西大街</div>
                   </div>
                   <div>电桩数量：2个交流</div>
                   <div>资费范围：1.6元/度</div>
                   <div>开放时间：不对外开放</div>
                   
               </div>
               <div class="border-l pl-20 flex-wrap flex-justify-center flex-align-center" style="height:0.76rem;">
                   <div style="height:0.76rem;line-height:0.76rem;" class="font-28">                       
                        <span class="fl-distance">4</span><span class="f-content">KM</span>
                   </div>                  
               </div>
           </div>
           <div class="clear box-s" style="padding:0.1rem 0 0.1rem 0;">
               <div class="fl-btn fl" style='border:1px solid #71cd87;border-radius:4px;padding:0.07rem .08rem 0.06rem;'> <span class="one-p">有空闲</span>    </div>
               <div class="fl-btn fl ml-10" style='border:1px solid #0099ff;border-radius:4px;padding:0.07rem .08rem 0.06rem;'> <span class="one-p">支持排队</span>    </div>
               <div class="f-content color-blue fr" style="padding-top:0.08rem;">
                   <span class="icon-navigation"></span>  导航                
                </div>
           </div>
       </div>   
         
        <!-- 手指按钮 -->
       <div class="hand back-white color-blue ripples flex-wrap flex-horizontal flex-align-center flex-justify-center" @click="inputCode">
           <span class="icon-hand one-p"></span>
       </div>
       <!-- 扫码充电 -->
       <div class="sao color-white back-blue ripple flex-wrap flex-horizontal flex-align-center flex-justify-center">  
            <span class="icon-sweep one-p"></span>
           <div class="pl-20 one-p">  扫码启动充电</div>
       </div> 
       <!-- 输入终端号码 -->
       <div class="zhezhao flex-wrap flex-justify-center flex-align-center" v-show="isShow">
           <div class="back-white codebox flex-wrap flex-vertical flex-justify-around ">
               <div class="font-34 flex-wrap flex-horizontal flex-align-center" >
                   <div class="pr-20 flex-con" style="height:0.7rem;line-height:0.7rem;">输入终端代码</div>
                   <input type="text" class="code flex-con" style="height:0.7rem;line-height:0.7rem;" v-model="code">
                </div>
               <div class="clear">
                   <div class='fl btn btn-back-gray font-30 ripple flex-wrap flex-align-center flex-justify-center' style="margin-right:0rem;" @click="cancle"> 
                         <span class="one-p btn-back-color">取消</span>  
                    </div>
                   <div class="fr btn back-blue font-30 color-white ripple flex-wrap flex-align-center flex-justify-center" >
                        <span class="one-p">充电</span> 
                     </div>
               </div>
           </div>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
             code:'001',
            isShow:false
        }        
    },
    methods:{
         inputCode(){            
            this.isShow = true;
        },
        cancle(){           
            this.isShow = false;            
        },
        openDetail(){
           this.$router.push({path:'/ChargeDetail',query:{}});
        }
    }
}
</script>
<style scoped>
.hand{width:0.96rem;height:0.96rem;position:fixed;bottom:0.4rem;left:1.1rem;border-radius:50%;font-size:0.5rem;line-height:0.96rem;
text-align:center;}
.sao{font-size:0.34rem;height:0.94rem;width:3.8rem;border-radius:0.1rem;text-align: center;position:fixed;
bottom:0.4rem;right:1.1rem;}
.zhezhao{width:100%;height:100%;position:fixed;top:0;background:rgba(0,0,0,0.5);z-index:50;}
.codebox{width:6rem;height:3.4rem;border-radius:0.2rem;box-sizing: border-box;padding:0.32rem 0.8rem;}
.code{border:none;outline:none;background:transparent;border-bottom:1px solid #393939;width:2.1rem;}
.btn{width:1.8rem;height:0.8rem;text-align:center;border-radius:0.1rem;box-shadow:none;}
.btn span{line-height:1;}
</style>
