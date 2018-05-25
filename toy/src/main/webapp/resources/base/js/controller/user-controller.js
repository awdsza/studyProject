//import pager from './template/pager-template.js';

var pager_component = Vue.component('base-pager');
var confPw = false;
var isUseId = false;
var user_vue = new Vue({
		el : "#userController",
		data : {
			paramUserId:'',
			paramUserName : '',
			listUser : [],
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
				user_name : ''
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
		},
		mixins: [mixIn],
		methods:{
			fnListUser : function(pageNum){
				axios.post(
						_context+'/action/user/list',
						{"paramUserId" : this.pagerObj.user_id == '' ? null : this.pagerObj.user_id,
						 "paramUserName" : this.pagerObj.user_name == '' ? null : this.pagerObj.user_name,
						 "pageNum" : pageNum == null ?  1 : pageNum,
						 "pageSize" : 10
						}
				).then(function (result) {
					this.listUser = result.data.listUser;
					this.pagerObj.totalCount = result.data.totalCount == 0 ? 1 : result.data.totalCount;
					this.pagerObj.pageSize = 10;
					this.pagerObj.pageNum = pageNum == null ?  1 : pageNum;
					this.setPager(this.pagerObj);
			    }.bind(this))
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickRestYn : function(item,yn){
				item.user_rest = yn;
				axios.post(
						_context+'/action/user/rest/update',
						{
							"detail" : item,
						}
				).then(function (result) {
			    }.bind(this))
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickUseYn : function(item,yn){
				item.user_yn = yn;
				axios.post(
						_context+'/action/user/use/update',
						{
								"detail" : item,
						}
				).then(function (result) {
			    }.bind(this))
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickSearch : function(){
				this.pagerObj.user_id = this.paramUserId;
				this.pagerObj.user_name = this.paramUserName;
				this.fnListUser(1);
			},
			fnOnClickCreateUser : function(){
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
			fnOnClickCheckID : function(){
				axios.post(
						_context+'/action/user/check/id',
						{"paramUserId" : this.detail.user_id}
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
			fnOnConfirmPw : function(){
				if(this.detail.user_pw == this.detail.user_pw_confirm) return true;
				else{
					return false;
				}
			},
			fnOnClickPager : function(pageNum){
				this.fnListUser(pageNum);
			}
		},
		mounted : function(){
			this.fnListUser(1);
		}
	});