package com.toy.user.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.toy.base.BaseKeyword;
import com.toy.base.BaseService;
import com.toy.code.dto.CodeDto;
import com.toy.code.service.ICodeService;
import com.toy.user.dto.UserDto;
import com.toy.user.mapper.UserMapper;

@Service("userService")
public class UserServiceImpl extends BaseService implements IUserService{
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private ICodeService codeService;
	@Override
	public UserDto detail(String paramUserId, String paramUserPw,String paramUserEmail) throws Exception{
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("user_id", paramUserId);
		paramMap.put("user_pw",paramUserPw);
		paramMap.put("user_email",paramUserEmail);
		paramMap.put("use_yn", BaseKeyword.Y);
		UserDto detail = null;
		detail = userMapper.detail(paramMap);
		if(detail == null){
			int user_cnt = totalCount();
			if(user_cnt == 0){
				CodeDto c = new CodeDto();
				c.setCreate_user_id(paramUserId);
				c.setUpdate_user_id(paramUserId);
				c.setParent_code(BaseKeyword.USR_TYPE);
				c.setCode_title(BaseKeyword.USR_TYPE_KOR);
				codeService.insertParentCode(c);
				
				c.setChild_code(BaseKeyword.USR_TP00);
				c.setCode_title(BaseKeyword.USR_TP00_KOR);
				codeService.insertChildCode(c);
				
				c.setChild_code(BaseKeyword.USR_TP01);
				c.setCode_title(BaseKeyword.USR_TP01_KOR);
				codeService.insertChildCode(c);
				
				UserDto d = new UserDto();
				
				d.setCreate_user_id(paramUserId);
				d.setUpdate_user_id(paramUserId);
				d.setUser_id(paramUserId);
				d.setUser_pw(paramUserPw);
				d.setUser_name(BaseKeyword.USR_TP00_KOR);
				d.setUser_nickname(BaseKeyword.USR_TP00_KOR);
				d.setUser_type(BaseKeyword.USR_TP00);
				d.setUser_rest(BaseKeyword.Y);
				d.setUser_yn(BaseKeyword.Y);
				d.setUser_email(paramUserEmail);
			}
		}
		return detail;
	}
	@Override
	public UserDto detail(String paramUserId) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("user_id", paramUserId);
		UserDto detail = null;
		detail = userMapper.detail(paramMap);
		return detail;
	}
	@Override
	public List<UserDto> list() throws Exception {
		return userMapper.list();
	}

	@Override
	public int totalCount()  throws Exception{
		return userMapper.totalCount();
	}

	@Override
	public int insert(UserDto paramDto) throws Exception {
		paramDto.setUser_rest(BaseKeyword.N);
		paramDto.setUser_yn(BaseKeyword.Y);
		paramDto.setCreate_user_id(paramDto.getUser_id());
		paramDto.setUpdate_user_id(paramDto.getUser_id());
		paramDto.setUser_phone(paramDto.getUser_phone1()+"-"+paramDto.getUser_phone2()+"-"+paramDto.getUser_phone3());
		return userMapper.insert(paramDto);
	}
	@Override
	public List<UserDto> list(String paramUserId,int pageNum, int pageSize) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		pager(paramMap,pageNum,pageSize);
		return userMapper.list(paramMap);
	}
	@Override
	public int totalCount(String paramUserId) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		return userMapper.totalCount(paramMap);
	}
	@Override
	public int updateRestYN(UserDto paramDto) throws Exception {
		return userMapper.update(paramDto);
	}
	@Override
	public int updateUseYN(UserDto paramDto) throws Exception {
		return userMapper.update(paramDto);
	}
	@Override
	public int updateRestYN(String paramUserId, String paramRestYN) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		paramMap.put("user_rest", paramRestYN);
		return 0;
	}
	@Override
	public int updateUseYN(String paramUserId, String paramUseYN) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		paramMap.put("user_yn", paramUseYN);
		return 0;
	}
	@Override
	public List<UserDto> list(String paramUserId, String paramUserName, int pageNum, int pageSize) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		paramMap.put("user_name", paramUserName);
		pager(paramMap,pageNum,pageSize);
		return userMapper.list(paramMap);
	}
	@Override
	public int totalCount(String paramUserId, String paraUserName) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("user_id", paramUserId);
		paramMap.put("user_name", paraUserName);
		return userMapper.totalCount(paramMap);
	}

	

}
