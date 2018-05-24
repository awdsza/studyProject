var _context = '';

var mixIn = {
	created: function(){
	    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	},
	methods : {
		setPager:function(_pager){
			_pager.pagerNums = [];
			var pageCnt = Math.ceil(_pager.totalCount / _pager.blockSize );
			_pager.endPageNum = pageCnt;
			
			_pager.startBlockNum = _pager.pageNum <= _pager.blockSize ? 1 : (_pager.blockSize * Math.trunc((_pager.pageNum -1 )/ _pager.blockSize)) + 1 ;
			_pager.endBlockNum = _pager.pageNum >= _pager.startBlockNum ? _pager.endPageNum :  _pager.startBlockNum + _pager.blockSize -1;
			
			for(var i = _pager.startBlockNum ; i<=_pager.endBlockNum ; i++){
				_pager.pagerNums.push(i);
			}
			return _pager;
		}
	}
};
var bus = new Vue();
//var pager = require("./controller/template/pager-template.js");
/*var noaa_vue = new Vue({
	el : "html",
	data : {
	},
	methods:{
	},
	mounted : function(){
		this.fnListUser();
	},
	created: function(){
	    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}
});*/