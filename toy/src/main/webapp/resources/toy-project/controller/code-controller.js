import Vue from 'vue';
import Axios from 'axios';
import ComPager from './component/pager-component.vue';
import commons from './common-module.js'
var listParentCode = [];
var listChildCode = [];
var selectParentCode = "";

Vue.component('pager', ComPager);

var noaa_vue = new Vue({
		el : "#codeController",
		data(){
			return{
				parent_code:'',
				parent_code_title:'',
				child_code:'',
				child_code_title:'',
				listParentCode : [],
				listChildCode : []
				
			}
		},
		//mixins: [mixIn],
		methods:{
			fnListParentCode(){
				let vm = this;
				Axios.post(
						commons.context+'/action/code/parent/list',
						{}
				).then(function (result) {
					vm.listParentCode = result.data.listParentCode;
			    })
	            .catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickCreateParentCode (){
				if( this.parent_code == '' || this.parent_code_title == ''){
					alert('코드 또는 코드명을 전부 입력해주세요.');
					return false;
				}
				var _obj={
						parent_code : this.parent_code,
						code_title : this.parent_code_title
				};
				let vm = this;
				Axios.post(
						commons.context+'/action/code/parent/create', 
						{ "detail" : _obj}
				).then(function (result) {
					vm.parent_code = ''
					vm.parent_code_title = ''
					vm.fnListParentCode();
			    }).catch(function (error) {
	                console.log(error.message);
	            });
			},
			fnOnClickDeleteParentCode(parent_code){
				if(confirm('삭제하시겠습니까?')){
					let vm = this;
					Axios.post(
							commons.context+'/action/code/parent/delete', 
							{ "paramParentCode" : parent_code}
					).then(function (result) {
						alert('삭제되었습니다.');
						vm.listChildCode = [];
						vm.fnListParentCode();
					}).catch(function (error) {
		                console.log(error.message);
		            });
				}
			},
			fnOnClickListChildCode(parent_code){
				let vm = this;
				Axios.post(
						commons.context+'/action/code/child/list',
						{ "paramParentCode" : parent_code}
				).then(function (result) {
					selectParentCode = parent_code;
					vm.listChildCode = result.data.listChildCode;
			    }).catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickCreateChildCode(){
				let vm = this;
				if(selectParentCode == '' || this.child_code == '' ||  this.child_code_title == ''){
					alert('코드값을 입력하거나 부모코드를 선택하세요.');
					return false;
				}
				var _obj={
						parent_code : selectParentCode,
						child_code : vm.child_code,
						code_title : vm.child_code_title
				};
				Axios.post(
						commons.context+'/action/code/child/create', 
						{ "detail" : _obj}
				).then(function (result) {
					vm.child_code = ''
					vm.child_code_title = ''
					vm.fnOnClickListChildCode(selectParentCode);
				}).catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickDeleteChildCode (child_code){
				if(confirm('삭제하시겠습니까?')){
					let vm = this;
					Axios.post(
							commons.context+'/action/code/child/delete', 
							{ "paramChildCode" : child_code}
					).then(function (result) {
						alert('삭제되었습니다.');
						vm.fnOnClickListChildCode(selectParentCode);
					}).catch(function (error) {
				        console.log(error.message);
				    });
				}
			}
		},
		mounted : function(){
			this.fnListParentCode();
		}
	});