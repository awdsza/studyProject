var listUser = [];
var noaa_vue = new Vue({
		el : "#userController",
		data : {
			paramUserId:'',
			listUser : listUser,
			pager : {
				pagerNums : [],
				totalCount : 0,
				pageSize : 10,
				pageNum : 1,
				endPageNum : 1,
				startPageNum : 1,
				startBlockNum : 1,
				endBlockNum : 1,
				blockSize : 10
			},
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
					this.pager.pagerNums = [];
					this.pager.totalCount = result.data.totalCount == 0 ? 1 : result.data.totalCount;
					this.pager.pageNum = pageNum == null ?  1 : pageNum,
					this.pager.pageSize = 10;
					var pageCnt = Math.trunc((result.data.totalCount / 10) + (result.data.totalCount % 10 == 0 ? 0 : 1));
					this.pager.endPageNum = pageCnt;
					
					this.pager.startBlockNum = this.pager.pageNum <= this.pager.blockSize ? 1 : (this.pager.blockSize * Math.trunc((this.pager.pageNum -1 )/ this.pager.blockSize)) + 1 ;
					this.pager.endBlockNum = this.pager.pageNum >= this.pager.startBlockNum ? this.pager.endPageNum :  this.pager.startBlockNum + this.pager.blockSize -1;
					
					for(var i = this.pager.startBlockNum ; i<=this.pager.endBlockNum ; i++){
						this.pager.pagerNums.push(i);
					}
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
		},
		created: function(){
		    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		}
	});