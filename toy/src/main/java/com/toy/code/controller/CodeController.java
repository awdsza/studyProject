package com.toy.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.code.CodeDto;
import com.toy.mapper.CodeMapper;

@RestController
public class CodeController {
	@Autowired
	private CodeMapper codeMapper;
	 @RequestMapping("/code/parent/list")
	 public ModelAndView board() throws Exception{
        List<CodeDto> listParentCode = codeMapper.listParentCode();
        return new ModelAndView("base/code/list","parent",listParentCode);
    }
}
