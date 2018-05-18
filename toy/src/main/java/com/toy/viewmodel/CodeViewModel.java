package com.toy.viewmodel;

import java.util.List;

import com.toy.base.BaseViewModel;
import com.toy.code.dto.CodeDto;

import lombok.Data;

@Data
public class CodeViewModel extends BaseViewModel{
	private String paramParentCode;
	private String paramCodeTitle;
	private String paramChildCode;
	private CodeDto detail;
	private List<CodeDto> listParentCode;
	private List<CodeDto> listChildCode;
}
