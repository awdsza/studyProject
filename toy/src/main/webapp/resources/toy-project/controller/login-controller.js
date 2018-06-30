//import pager from './template/pager-template.js';

var pager_component = Vue.component('base-pager');
var login_vue = new Vue({
		el : "#loginController",
		data : {
			paramUserId:'',
			paramUserPw : '',
		},
		mixins: [mixIn],
		methods:{
			fnOnClickLogin : function(){
				if(this.paramUserId == '' || this.paramUserPw == ''){
					alert('비밀번호와 정보를 입력하세요.');
					return false;
				}
				document.forms['loginFrm'].submit();
			}
		}
	});