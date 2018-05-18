var listParentCode = [];
var listChildCode = [];
var selectParentCode = "";
var noaa_vue = new Vue({
		el : "#codeController",
		data : {
			parent_code:'',
			parent_code_title:'',
			child_code:'',
			child_code_title:'',
			listParentCode : listParentCode,
			listChildCode : listChildCode
		},
		methods:{
			fnOnClickCreateParentCode : function(){
				var _obj={
						parent_code : this.parent_code,
						code_title : this.parent_code_title
				};
				axios.post(
						_context+'/action/code/parent/create', 
						{ "detail" : _obj}
				).then(function (data) {
			    });
			},
			fnOnClickDeleteParentCode : function(parent_code){
				axios.post(
						_context+'/action/code/parent/delete', 
						{ "paramParentCode" : parent_code}
				).then(function (data) {
			    });
			},
			fnOnClickCreateParentCode : function(){
				var _obj={
						parent_code : selectParentCode,
						child_code : this.child_code,
						code_title : this.child_code_title
				};
				axios.post(
						_context+'/action/code/child/create', 
						{ "detail" : _obj}
				).then(function (data) {
			    });
			},
			fnOnClickDeleteChildCode : function(child_code){
				axios.post(
						_context+'/action/code/child/delete', 
						{ "paramChildCode" : child_code}
				).then(function (data) {
			    });
			}
		},
		mounted : function(){
			axios.post(
					_context+'/action/code/parent/list'
			).then(function (data) {
				console.log(data);
				this.listParentCode = data.data.listParentCode;
		    })
		    .catch(function (error) {
		        console.log(error.message);
		    });
		},
		created: function(){
		    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		}
	});