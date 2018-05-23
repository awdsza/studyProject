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
		mixins: [mixIn],
		methods:{
			fnListParentCode : function(){
				axios.post(
						_context+'/action/code/parent/list',
						{}
				).then(function (result) {
					this.listParentCode = result.data.listParentCode;
			    }.bind(this))
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickCreateParentCode : function(){
				if( this.parent_code == '' || this.parent_code_title == ''){
					alert('코드 또는 코드명을 전부 입력해주세요.');
					return false;
				}
				var _obj={
						parent_code : this.parent_code,
						code_title : this.parent_code_title
				};
				axios.post(
						_context+'/action/code/parent/create', 
						{ "detail" : _obj}
				).then(function (result) {
					this.parent_code = ''
					this.parent_code_title = ''
					this.fnListParentCode();
			    }.bind(this));
			},
			fnOnClickDeleteParentCode : function(parent_code){
				if(confirm('삭제하시겠습니까?')){
					axios.post(
							_context+'/action/code/parent/delete', 
							{ "paramParentCode" : parent_code}
					).then(function (result) {
						alert('삭제되었습니다.');
						this.listChildCode = [];
						this.fnListParentCode();
					}.bind(this));
				}
			},
			fnOnClickListChildCode : function(parent_code){
				axios.post(
						_context+'/action/code/child/list',
						{ "paramParentCode" : parent_code}
				).then(function (result) {
					selectParentCode = parent_code;
					this.listChildCode = result.data.listChildCode;
			    }.bind(this))
			    .catch(function (error) {
			        console.log(error.message);
			    });
			},
			fnOnClickCreateChildCode : function(){
				if(selectParentCode == '' || this.child_code == '' ||  this.child_code_title == ''){
					alert('코드값을 입력하거나 부모코드를 선택하세요.');
					return false;
				}
				var _obj={
						parent_code : selectParentCode,
						child_code : this.child_code,
						code_title : this.child_code_title
				};
				axios.post(
						_context+'/action/code/child/create', 
						{ "detail" : _obj}
				).then(function (result) {
					this.child_code = ''
					this.child_code_title = ''
					this.fnOnClickListChildCode(selectParentCode);
				}.bind(this));
			},
			fnOnClickDeleteChildCode : function(child_code){
				if(confirm('삭제하시겠습니까?')){
					axios.post(
							_context+'/action/code/child/delete', 
							{ "paramChildCode" : child_code}
					).then(function (result) {
						alert('삭제되었습니다.');
						this.fnOnClickListChildCode(selectParentCode);
					}.bind(this));
				}
			}
		},
		mounted : function(){
			this.fnListParentCode();
		},
		created: function(){
		    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		}
	});