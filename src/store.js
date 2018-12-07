import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'mint-ui';
import {httpPost} from './assets/common.js'

Vue.use(Vuex)

var state = {	


};

const actions = {
	addnum:({commit})=>{
		commit('addnum');
	}
};

const mutations = {	
	getmsg(state,{openId}){		
		console.log(openId)
		state.openId = openId;		
		httpPost('sp/appUser/getUserId',{
			openId:openId
		}).then(data=>{
			console.log('用户标示' + data.data.userId)
			state.userId = data.data.userId;			
			return data.data.userId;
		}).then(data=>{//userId
			return httpPost('sp/appUser/queryUser',{
				id:data
			})
		}).then(data=>{	
			// console.log(data)					
			state.rightsValidity = data.data[0].rightsValidity;
			state.timeLength = data.data[0].timeLength;
			state.bjUserId = data.data[0].bjUserId;
			// console.log('权益有效期' + state.rightsValidity)
			// console.log('剩余权益时长' + state.timeLength)
		})
	}
	
};

const getters = {	
	timeLength(state){//剩余权益时长
		return state.timeLength
	}
	

}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})