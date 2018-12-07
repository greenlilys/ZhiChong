<template>	
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return {
								
			}
		},
		methods: {
			init() {
				var fun = function(doc, win) {
					var docEl = doc.documentElement,
					resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
					recalc = function() {
						var clientWidth = docEl.clientWidth;
							// console.log(clientWidth);
							if(!clientWidth) return;
							docEl.style.fontSize = (clientWidth / 7.5) + 'px';
						};
						if(!doc.addEventListener) return;
						win.addEventListener(resizeEvt, recalc, false);
						doc.addEventListener('DOMContentLoaded', recalc, false);
					};
					fun(document, window);
				},	
		
			
		},
		created(){
					
			//页面刷新保持数据
			// if (sessionStorage.getItem("store") ) {
			// 	this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
			// } 
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			// window.addEventListener("beforeunload",()=>{
			// 	sessionStorage.setItem("store",JSON.stringify(this.$store.state))
			// })
			
		},
		mounted() {
			this.init();//计算根节点rem
		},
		watch:{
			//切换页面监听路由设置样式
			$route(to,from){				
			}
		}
	}
</script>

<style scoped>
#app {font-family: '微软雅黑', Arial, 'Avenir', Helvetica, sans-serif;height: 100%;width:100%;}
#content{ width:100%; overflow:auto;}
</style>