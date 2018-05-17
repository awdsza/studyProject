package com.toy.code.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.code.CodeDto;
import com.toy.mapper.CodeMapper;
@Service("codeService")
public class CodeServiceImpl implements ICodeService {
	@Autowired
 	private CodeMapper codeMapper;
	
	@Override
	public void insertParentCode(CodeDto dto) throws Exception {
		codeMapper.insertParentCode(dto);

	}

	@Override
	public List<CodeDto> listParentCode() throws Exception {
		// TODO Auto-generated method stub
		return codeMapper.listParentCode();
	}

}
