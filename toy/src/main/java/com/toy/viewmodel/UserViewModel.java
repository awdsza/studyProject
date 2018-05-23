package com.toy.viewmodel;

import com.toy.base.BaseViewModel;
import com.toy.user.dto.UserDto;

import lombok.Data;
@Data
public class UserViewModel extends BaseViewModel{
	private String paramUserId;
	private String paramUserPw;
	private UserDto detail;
	
	
}