package com.toy.code.mapper;

import java.util.List;

import com.toy.code.dto.CodeDto;

public interface CodeMapper {
	public int insertParentCode(CodeDto dto) throws Exception;
	public int insertChildCode(CodeDto paramDto) throws Exception;
	public List<CodeDto> listParentCode() throws Exception;
	
}
