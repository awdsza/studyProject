import Vue from 'vue';
import Axios from 'axios';
import ComPager from './component/pager-component.vue';
import commons from './common-module.js'

var confPw = false;
var isUseId = false;
Vue.component('pager', ComPager);
var user_vue = new Vue({
		el : "#userController",
		data(){
			return{
				paramUserId:'',
				paramUserName : '',
				isUpdate : false,
				isShowUpdatePage: false,
				listUser : [],
				listUserType : [],
				message : '',
				pagerObj : {
					pagerNums : [],
					totalCount : 0,
					pageSize : 10,
					pageNum : 1,
					endPageNum : 1,
					startPageNum : 1,
					startBlockNum : 1,
					endBlockNum : 1,
					blockSize : 10,
					user_id : '',
					user_name : '',
					fnOnClickNum : function(num){
						this.fnListUser(num);
					}
				},
				detail : {
					user_id : '',
					user_pw : '',
					user_name : '',
					user_phone : '',
					user_phone1 : '',
					user_phone2 : '',
					user_phone3 : '',
					user_email : '',
					user_addr : '',
					user_type : ''
				}
			}
		},
		methods:{
			fnListUser(pageNum){
				let vm = this;
				Axios.post(
						commons.context+'/action/user/list',
						{"paramUserId" : vm.pagerObj.user_id == '' ? null : vm.pagerObj.user_id,
						 "paramUserName" : vm.pagerObj.user_name == '' ? null : vm.pagerObj.user_name,
						 "pageNum" : pageNum == null ?  1 : pageNum,
						 "pageSize" : 10
						}
				).then(function (result) {
					vm.listUser = result.data.listUser;
					vm.pagerObj.totalCount = result.data.totalCount == 0 ? 1 : result.data.totalCount;
					vm.pagerObj.pageSize = 10;
					vm.pagerObj.pageNum = pageNum == null ?  1 : pageNum;
					ComPager.prop = ComPager.methods.setPager(vm.pagerObj);
					console.log(ComPager);
				})
	            .catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickRestYn(item,yn){
				
				item.user_rest = yn;
				Axios.post(
						commons.context+'/action/user/rest/update',
						{
							"detail" : item,
						}
				).then(function (result) {
				})
	            .catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickUseYn(item,yn){
				item.user_yn = yn;
				Axios.post(
						commons.context+'/action/user/use/update',
						{
								"detail" : item,
						}
				).then(function (result) {
				})
	            .catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickSearch(){
				this.pagerObj.user_id = this.paramUserId;
				this.pagerObj.user_name = this.paramUserName;
				this.fnListUser(1);
			},
			fnOnClickDetailUser(item){
				let vm = this;
				if(item.user_rest!='N' || item.user_yn!='Y'){
					alert('휴면계정이거나 사용되지 않는 계정이라 조회하실 수 없습니다.');
					return false;
				}
				Axios.post(
						commons.context+'/action/user/detail',
						{"paramUserId" : item.user_id}
				).then(function (result) {
					vm.detail = result.data.detail;
					vm.listUserType = result.data.listUserType;
					vm.isUpdate = true;
					vm.isShowUpdatePage = true;
				})
	            .catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickCreateUser(){
				if(this.detail.user_id == null || this.detail.user_id == ''){
					alert('ID를 입력하세요.')
					return false;
				}
				if(this.detail.user_pw == null || this.detail.user_pw == ''){
					alert('비밀번호를 입력하세요.')
					return false;
				}
				if(this.detail.user_name == null || this.detail.user_name == ''){
					alert('이름을 입력하세요.')
					return false;
				}
				if(this.detail.user_phone1 == null || this.detail.user_phone1 == '' 
					|| this.detail.user_phone2 == null || this.detail.user_phone2 == '' 
						|| this.detail.user_phone3 == null || this.detail.user_phone3 == ''){
					alert('번호를 입력하세요.')
					return false;
				}
				if(this.detail.user_email == null || this.detail.user_email == ''){
					alert('메일 주소를 입력하세요.')
					return false;
				}
				if(this.detail.user_addr == null || this.detail.user_addr == ''){
					alert('주소를 입력하세요.')
					return false;
				}
				if(!isUseId){
					alert('아이디 중복확인을 하세요.');
					return false;
				}
				if(!this.fnOnConfirmPw()){
					alert('비밀번호를 확인하세요.');
					return false;
				}
				this.detail.user_phone = this.detail.user_phone1 + "-" + this.detail.user_phone2 + "-" + this.detail.user_phone3;
				document.forms['accountFrm'].submit();
			},
			fnOnClickUpdate(){
				let vm = this;
				if(!vm.fnOnConfirmPw()){
					alert('비밀번호를 확인하세요.');
					return false;
				}
				if(vm.detail.user_name == null || vm.detail.user_name == ''){
					alert('이름을 입력하세요.')
					return false;
				}
				if(vm.detail.user_phone1 == null || vm.detail.user_phone1 == '' 
					|| vm.detail.user_phone2 == null || vm.detail.user_phone2 == '' 
						|| vm.detail.user_phone3 == null || vm.detail.user_phone3 == ''){
					alert('번호를 입력하세요.')
					return false;
				}
				if(vm.detail.user_email == null || vm.detail.user_email == ''){
					alert('메일 주소를 입력하세요.')
					return false;
				}
				if(vm.detail.user_addr == null || vm.detail.user_addr == ''){
					alert('주소를 입력하세요.')
					return false;
				}
				vm.detail.user_phone = vm.detail.user_phone1 + "-" + vm.detail.user_phone2 + "-" + vm.detail.user_phone3;
				Axios.post(
						commons.context+'/action/user/update',
						{"detail" : vm.detail}
				).then(function (result) {
					vm.fnOnClickCancel();
					vm.fnListUser(1);
			    })
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickCancel (){
				this.detail = {
					user_id : '',
					user_pw : '',
					user_name : '',
					user_phone : '',
					user_phone1 : '',
					user_phone2 : '',
					user_phone3 : '',
					user_email : '',
					user_addr : '',
					user_type : ''
				};
				this.isUpdate = false;
				this.isShowUpdatePage = false;
			},
			fnOnClickCheckID(){
				let vm = this;
				Axios.post(
						commons.context+'/action/user/detail',
						{"paramUserId" : vm.detail.user_id}
				).then(function (result) {
					if(result.data.detail == null){
						alert('사용가능한 ID입니다.');
						isUseId = true;
					}
					else{
						alert('사용중인ID입니다.');
						isUseId = false;
					}
			    })
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnConfirmPw(){
				if(this.detail.user_pw == this.detail.user_pw_confirm) return true;
				else{
					return false;
				}
			}
		},
		mounted(){
			this.fnListUser(1);
		}
	});