package com.toy.code.service;

import java.util.HashMap;
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
		return codeMapper.listParentCode();
	}

	@Override
	public int insertChildCode(CodeDto paramDto) throws Exception {
		return codeMapper.insertChildCode(paramDto);
	}

	@Override
	public List<CodeDto> listChildCode(String paramCode) throws Exception {
		HashMap<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("parent_code", paramCode);
		return codeMapper.listChildCode(paramMap);
	}

}
