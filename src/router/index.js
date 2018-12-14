import Vue from 'vue'
import Router from 'vue-router'

import ChargingStation from '@/components/charge/ChargingStation'
import ChargeList from '@/components/charge/ChargeList'
import SearchCharge from '@/components/charge/SearchCharge'
import Filter from '@/components/charge/Filter'
import Address from '@/components/charge/Address'
import ChargeDetail from '@/components/charge/ChargeDetail'
import Chargepile from '@/components/charge/Chargepile'
import ChargingStandard from '@/components/charge/ChargingStandard'
import RealPicture from '@/components/charge/RealPicture'

import Mycenter from '@/components/my/Mycenter'
import Info from '@/components/my/Info'
import Wallet from '@/components/my/Wallet'
import Order from '@/components/my/Order'
import Collection from '@/components/my/Collection'
import Coupon from '@/components/my/Coupon'
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
		},
		{
			path:'/Mycenter',
			name:'Mycenter',
			component:Mycenter
		},
		{
			path:'/Info',
			name:'Info',
			component:Info
		},
		{
			path:'/Wallet',
			name:'Wallet',
			component:Wallet
		},
		{
			path:'/Order',
			name:'Order',
			component:Order
		},
		{
			path:'/Collection',
			name:'Collection',
			component:Collection
		},
		{
			path:'/Coupon',
			name:'Coupon',
			component:Coupon
		}
			
		
	]
})