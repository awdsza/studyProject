package com.toy.code.dto;

import com.toy.base.BaseDto;

import lombok.*;

@Data
public class CodeDto extends BaseDto{
	private String parent_code;
	private String child_code;
	private String code_title;
}
