<template>
    <div class="btn-group"  style="width:1000px;border: 1px solid #e5e5e5;">
    
         <a class="btn btn-default" v-on:click="fnOnClickPager(pass.startPageNum)">&lt;</a>
    
       <a class="btn btn-default" v-for="item in pass.pagerNums" v-bind:key="item" v-bind:class="{'btn-info': item == pass.pageNum}" v-on:click="fnOnClickPager(item)">
            {{item}}
        </a>
    
        <a class="btn btn-default" v-on:click="fnOnClickPager(pass.endPageNum)">&gt;</a>
    
    </div>
</template>
<script>
export default {
  props: ["pass"],
  methods: {
    fnOnClickPager(num) {
      this.pass.callback(num);
    },

    setPager(_pager) {
      _pager.pagerNums = [];

      var pageCnt = Math.ceil(_pager.totalCount / _pager.blockSize);

      _pager.endPageNum = pageCnt;

      _pager.startBlockNum =
        _pager.pageNum <= _pager.blockSize
          ? 1
          : _pager.blockSize *
              Math.trunc((_pager.pageNum - 1) / _pager.blockSize) +
            1;

      _pager.endBlockNum =
        _pager.pageNum >= _pager.startBlockNum
          ? _pager.endPageNum
          : _pager.startBlockNum + _pager.blockSize - 1;

      for (var i = _pager.startBlockNum; i <= _pager.endBlockNum; i++) {
        _pager.pagerNums.push(i);
      }
      console.log(_pager);
      return _pager;
    }
  }
};
</script>

