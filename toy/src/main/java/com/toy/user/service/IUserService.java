package com.toy.user.service;

import java.util.List;

import com.toy.user.dto.UserDto;

public interface IUserService {
	public UserDto detail(String paramUserId,String paramUserPw,String paramUserEmail) throws Exception;
	public UserDto detail(String paramUserId) throws Exception;
	public int insert(UserDto paramDto) throws Exception;
	public List<UserDto> list() throws Exception;
	public int totalCount() throws Exception;
	public List<UserDto> list(String paramUserId,int pageNum, int pageSize) throws Exception;
	public int totalCount(String paramUserId) throws Exception;
	public int updateRestYN(UserDto paramDto) throws Exception;
	public int updateUseYN(UserDto paramDto) throws Exception;
	public int updateRestYN(String paramUserId,String paramRestYN) throws Exception;
	public int updateUseYN(String paramUserId,String paramUseYN) throws Exception;
}
