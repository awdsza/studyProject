package com.toy.code.service;

import java.util.List;

import com.toy.code.CodeDto;

public interface ICodeService {
	public void insertParentCode(CodeDto dto) throws Exception;
	public List<CodeDto> listParentCode() throws Exception;
}
