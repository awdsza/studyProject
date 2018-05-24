//import pager from './template/pager-template.js';

var pager_component = Vue.component('base-pager');
var user_vue = new Vue({
		el : "#userController",
		data : {
			paramUserId:'',
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
				blockSize : 10
			}
		},
		mixins: [mixIn],
		methods:{
			fnListUser : function(pageNum){
				axios.post(
						_context+'/action/user/list',
						{"paramUserId" : this.paramUserId == '' ? null : this.paramUserId,
						 "pageNum" : pageNum == null ?  1 : pageNum,
						 "pageSize" : 10
						}
				).then(function (result) {
					this.listUser = result.data.listUser;
					this.pagerObj = {
							pagerNums : [],
							totalCount : result.data.totalCount == 0 ? 1 : result.data.totalCount,
							pageSize : 10,
							pageNum : pageNum == null ?  1 : pageNum,
							endPageNum : 1,
							startPageNum : 1,
							startBlockNum : 1,
							endBlockNum : 1,
							blockSize : 10
					};
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
			fnOnClickPager : function(pageNum){
				this.fnListUser(pageNum);
			}
		},
		mounted : function(){
			this.fnListUser();
		}
	});