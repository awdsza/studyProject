package com.toy.code.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.base.BaseService;
import com.toy.code.dto.CodeDto;
import com.toy.code.mapper.CodeMapper;
@Service("codeService")
public class CodeServiceImpl extends BaseService implements ICodeService {
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

	@Override
	public int deleteParentCode(String paramParentCode) throws Exception {
		HashMap<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("parent_code", paramParentCode);
		return codeMapper.deleteParentCode(paramMap);
	}

	@Override
	public int deleteChildCodeByParentCode(String paramParentCode) throws Exception {
		HashMap<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("parent_code", paramParentCode);
		return codeMapper.deleteChildCode(paramMap);
	}
	@Override
	public int deleteChildCode(String paramChildCode) throws Exception {
		HashMap<String,Object> paramMap = new HashMap<String,Object>();
		paramMap.put("child_code", paramChildCode);
		return codeMapper.deleteChildCode(paramMap);
	}


}
