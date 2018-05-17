package com.toy.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.code.CodeDto;
import com.toy.code.service.ICodeService;

@RestController
public class CodeController {
	@Autowired
 	private ICodeService codeService;
	 @RequestMapping("/code/parent/list")
	 public ModelAndView board(){
		 List<CodeDto> listParentCode = null;
		try{
			listParentCode = codeService.listParentCode();
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
        return new ModelAndView("base/code/list","parent",listParentCode);
    }
}
