package com.toy.mapper;

import java.util.List;

import com.toy.code.CodeDto;

public interface CodeMapper {
	public void insertParentCode(CodeDto dto) throws Exception;
	public List<CodeDto> listParentCode() throws Exception;
	
}
