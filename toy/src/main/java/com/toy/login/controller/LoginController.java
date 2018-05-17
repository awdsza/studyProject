package com.toy.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {
	@RequestMapping("/")
	public String loginView(ModelAndView mv){
		//mv.setViewName();
		return "base/login/login";
	}
	@RequestMapping("/login/account")
	public String accountView(ModelAndView mv){
		//mv.setViewName();
		return "base/login/account";
	}
}
