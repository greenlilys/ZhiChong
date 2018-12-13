import Vue from 'vue'
import Router from 'vue-router'

import ChargingStation from '@/components/ChargingStation'
import ChargeList from '@/components/ChargeList'
import SearchCharge from '@/components/SearchCharge'
import Filter from '@/components/Filter'
import Address from '@/components/Address'
import ChargeDetail from '@/components/ChargeDetail'
import Chargepile from '@/components/Chargepile'
import ChargingStandard from '@/components/ChargingStandard'
import RealPicture from '@/components/RealPicture'
Vue.use(Router)

export default new Router({
	// mode:history,
	routes: [
		{
			path: '/',	
			redirect: '/ChargingStation'		
	
		},
		{			
			path:'/ChargingStation',
			component:ChargingStation,
			children:[
				{
					path:'',
					name:'ChargeList',
					component:ChargeList
				},
				{
					path:'SearchCharge',
					name:'SearchCharge',
					component:SearchCharge
				},
				{
					path:'Filter',
					name:'Filter',
					component:Filter
				},
				{
					path:'Address',
					name:'Address',
					component:Address
				}				
			]
		},
		{
			path:'/ChargeDetail',			
			component:ChargeDetail,
			children:[
				{
					path:'',
					name:'Chargepile',
					component:Chargepile
				},
				{
					path:'ChargingStandard',
					name:'ChargingStandard',
					component:ChargingStandard
				},
				{
					path:'RealPicture',
					name:'RealPicture',
					component:RealPicture
				}
			]
		}	
			
		
	]
})