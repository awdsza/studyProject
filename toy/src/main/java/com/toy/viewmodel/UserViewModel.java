package com.toy.viewmodel;

import java.util.List;

import com.toy.base.BaseViewModel;
import com.toy.code.dto.CodeDto;
import com.toy.user.dto.UserDto;

import lombok.Data;
@Data
public class UserViewModel extends BaseViewModel{
	private String paramUserId;
	private String paramUserName;
	private String paramUserPw;
	private UserDto detail;
	private List<UserDto> listUser;
	private List<CodeDto> listUserType;
}
