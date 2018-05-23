package com.toy.base;

import java.util.HashMap;

public class BaseService {
	public HashMap<String,Object> pager(HashMap<String,Object> paramMap, int pageNum,int pageSize){
		int startPage = ((pageNum-1) * pageSize) + 1;
		int endPage = pageNum* pageSize;
		paramMap.put("startPage", startPage);
		paramMap.put("endPage", endPage);
		return paramMap;
	}
}
