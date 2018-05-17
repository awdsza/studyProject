package com.toy.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.base.BaseKeyword;
import com.toy.code.service.ICodeService;

@RestController
public class LoginController {
	@Autowired
	private ICodeService codeService;
	@RequestMapping("/")
	public ModelAndView loginView(ModelAndView mv){
		mv.setViewName("base/login/login");
		return mv;
	}
	@RequestMapping("/login/account")
	public ModelAndView accountView(ModelAndView mv) throws Exception{
		mv.setViewName("base/login/account");
		mv.addObject("usr_type",codeService.listChildCode(BaseKeyword.USR_TYPE));
		return mv;
	}
}
