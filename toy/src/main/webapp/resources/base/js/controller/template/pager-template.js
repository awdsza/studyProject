Vue.component('base-pager',{
	name : 'base-pager',
	data : function(){
		return {
			pagerObj :  {
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
		}
	},
	mounted : function(){
		bus.$on("setPager",function(_pager){
			this.pagerObj.pagerNums = [];
			this.pagerObj.totalCount = _pager.totalCount;
			this.pagerObj.pageNum = _pager.pageNum;
			this.pagerObj.pageSize = _pager.pageSize;
			var pageCnt = Math.ceil(_pager.totalCount / this.pagerObj.blockSize );
			this.pagerObj.endPageNum = pageCnt;
			
			this.pagerObj.startBlockNum = this.pagerObj.pageNum <= this.pagerObj.blockSize ? 1 : (this.pagerObj.blockSize * Math.trunc((this.pagerObj.pageNum -1 )/ this.pagerObj.blockSize)) + 1 ;
			this.pagerObj.endBlockNum = this.pagerObj.pageNum >= this.pagerObj.startBlockNum ? this.pagerObj.endPageNum :  this.pagerObj.startBlockNum + this.pagerObj.blockSize -1;
			
			for(var i = this.pagerObj.startBlockNum ; i<=this.pagerObj.endBlockNum ; i++){
				this.pagerObj.pagerNums.push(i);
			}
		})
	},
	methods : {
		setPager:function(_pager){
			this.pagerObj.pagerNums = [];
			this.pagerObj.totalCount = _pager.totalCount;
			this.pagerObj.pageNum = _pager.pageNum;
			this.pagerObj.pageSize = _pager.pageSize;
			var pageCnt = Math.ceil(_pager.totalCount / this.pagerObj.blockSize );
			this.pagerObj.endPageNum = pageCnt;
			
			this.pagerObj.startBlockNum = this.pagerObj.pageNum <= this.pagerObj.blockSize ? 1 : (this.pagerObj.blockSize * Math.trunc((this.pagerObj.pageNum -1 )/ this.pagerObj.blockSize)) + 1 ;
			this.pagerObj.endBlockNum = this.pagerObj.pageNum >= this.pagerObj.startBlockNum ? this.pagerObj.endPageNum :  this.pagerObj.startBlockNum + this.pagerObj.blockSize -1;
			
			for(var i = this.pagerObj.startBlockNum ; i<=this.pagerObj.endBlockNum ; i++){
				this.pagerObj.pagerNums.push(i);
			}
		}
	},
	watch : {
		setPager:function(_pager){
			this.pagerObj.pagerNums = [];
			this.pagerObj.totalCount = _pager.totalCount;
			this.pagerObj.pageNum = _pager.pageNum;
			this.pagerObj.pageSize = _pager.pageSize;
			var pageCnt = Math.ceil(_pager.totalCount / this.pagerObj.blockSize );
			this.pagerObj.endPageNum = pageCnt;
			
			this.pagerObj.startBlockNum = this.pagerObj.pageNum <= this.pagerObj.blockSize ? 1 : (this.pagerObj.blockSize * Math.trunc((this.pagerObj.pageNum -1 )/ this.pagerObj.blockSize)) + 1 ;
			this.pagerObj.endBlockNum = this.pagerObj.pageNum >= this.pagerObj.startBlockNum ? this.pagerObj.endPageNum :  this.pagerObj.startBlockNum + this.pagerObj.blockSize -1;
			
			for(var i = this.pagerObj.startBlockNum ; i<=this.pagerObj.endBlockNum ; i++){
				this.pagerObj.pagerNums.push(i);
			}
		}
	}
});
