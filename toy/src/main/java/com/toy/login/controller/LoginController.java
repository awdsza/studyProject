package com.toy.login.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.base.BaseKeyword;
import com.toy.code.service.ICodeService;
import com.toy.user.dto.UserDto;
import com.toy.user.service.IUserService;
import com.toy.viewmodel.UserViewModel;

@RestController
public class LoginController {
	@Autowired
	private ICodeService codeService;
	@Autowired
	private IUserService userService;
	
	@RequestMapping("/")
	public ModelAndView loginView(ModelAndView mv){
		mv.setViewName("base/login/login");
		return mv;
	}
	@RequestMapping(value = "/action/login", method = RequestMethod.POST)
	public ModelAndView loginAction(ModelAndView mv,HttpSession session, UserViewModel vm) throws Exception{
	//public UserViewModel loginAction(ModelAndView mv,HttpSession session,@RequestBody UserViewModel vm) throws Exception{
		UserDto user = null;
		user = userService.detail(vm.getParamUserId(),vm.getParamUserPw(),null);
		session.setAttribute("user", user);
		mv.setViewName("base/main");
		//return vm;
		return mv;
	}
	@RequestMapping("/login/account")
	public ModelAndView accountView(ModelAndView mv) throws Exception{
		mv.setViewName("base/login/account");
		mv.addObject("usr_type",codeService.listChildCode(BaseKeyword.USR_TYPE));
		return mv;
	}
}
