package com.toy.user.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.user.dto.UserDto;
import com.toy.user.service.IUserService;

@RestController
public class UserController {
	@Autowired
	private IUserService userService;	
	
	@RequestMapping("/action/user/insert")
	public ModelAndView insertUserAction(UserDto paramDto,ModelAndView mv) throws Exception{
		userService.insert(paramDto);
		mv.setViewName("base/login/login");
		return mv;
	};
}
