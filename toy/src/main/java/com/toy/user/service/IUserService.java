package com.toy.user.service;

import java.util.List;

import com.toy.user.dto.UserDto;

public interface IUserService {
	public UserDto detail(String paramUserId,String paramUserPw,String paramUserEmail) throws Exception;
	public List<UserDto> list() throws Exception;
	public int totalCount() throws Exception;
}
