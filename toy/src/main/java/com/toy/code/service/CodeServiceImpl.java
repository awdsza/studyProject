package com.toy.code.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.code.dto.CodeDto;
import com.toy.code.mapper.CodeMapper;
@Service("codeService")
public class CodeServiceImpl implements ICodeService {
	@Autowired
 	private CodeMapper codeMapper;
	
	@Override
	public int insertParentCode(CodeDto dto) throws Exception {
		return codeMapper.insertParentCode(dto);

	}

	@Override
	public List<CodeDto> listParentCode() throws Exception {
		// TODO Auto-generated method stub
		return codeMapper.listParentCode();
	}

	@Override
	public int insertChildCode(CodeDto paramDto) throws Exception {
		// TODO Auto-generated method stub
		return codeMapper.insertChildCode(paramDto);
	}

}
