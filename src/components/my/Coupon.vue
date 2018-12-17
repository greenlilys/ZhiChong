<template>
<div class="w-100 h-100 back-gray">
    <div class="w-100 back-white font-28 color-regu flex-wrap flex-horizontal flex-align-center cardbox">
             <template v-for="(item,index) in arr">
                 <div :key="index" class="tabcard h-100 border-b flex-con flex-wrap flex-justify-center flex-align-center" :class="[index == currentindex ? 'border-bs active' : '']" @click="changetab(index)">
                      <div class="ripples three-p w-100 h-100 flex-wrap flex-horizontal flex-justify-center flex-align-center">
                             <span class="one-p">{{item.val}} ({{item.num}})</span>
                          </div>
                </div>               
             </template>             
    </div> 
</div>
         
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    val:'待使用',
                    num:0
                },
                 {
                    val:'已使用',
                    num:0
                },
                 {
                    val:'已过期',
                    num:0
                }
            ],
            currentindex:0
        }
    },
    methods:{
          changetab(i){
            if(i ==  this.currentindex) return false;
            this.currentindex = i;
          
        },
    }
}
</script>
<style scoped>
.cardbox div{height:0.96rem;}
.tabcard{text-align:center;}
.active{color:#0099FF;}

.border-t,.border-bs{ position:relative; }
.border-t:before,.border-bs:after{content: ''; position: absolute; left: 0;right:0;
background: #0099FF;height: 0.02rem;-webkit-transform: scaleY(0.5);
transform: scaleY(0.5); }
.border-bs:after{ bottom:-1px;-webkit-transform-origin: 0 0;transform-origin: 0 0;}
.border-t:before{top:0;-webkit-transform-origin: 0 0;transform-origin: 0 0;}
</style>
