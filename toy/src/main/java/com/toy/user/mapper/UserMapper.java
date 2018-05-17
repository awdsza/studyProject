package com.toy.user.mapper;

import java.util.HashMap;
import java.util.List;

import com.toy.user.dto.UserDto;

public interface UserMapper {
	public UserDto detail(HashMap<String,Object> paramMap); 
	public List<UserDto> list();
	public int totalCount();
}
