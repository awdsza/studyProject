package com.toy.code.service;

import java.util.List;

import com.toy.code.dto.CodeDto;

public interface ICodeService {
	public int insertParentCode(CodeDto dto) throws Exception;
	public int insertChildCode(CodeDto paramDto) throws Exception;
	public List<CodeDto> listParentCode() throws Exception;
	public List<CodeDto> listChildCode(String paramCode) throws Exception;
}
