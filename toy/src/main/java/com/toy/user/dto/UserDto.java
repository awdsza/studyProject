package com.toy.user.dto;

import javax.validation.constraints.NotNull;

import com.toy.base.BaseDto;

import lombok.Data;

@Data
public class UserDto extends BaseDto{
	@NotNull
	private String user_id;
	@NotNull
	private String user_pw;
	
	private String user_name;
	private String user_phone;
	private String user_phone1;
	private String user_phone2;
	private String user_phone3;
	private String user_email;
	private String user_addr;
	private String user_type;
	private String user_rest;
	private String user_yn;
	private String user_nickname;
	private String user_type_title;
}
