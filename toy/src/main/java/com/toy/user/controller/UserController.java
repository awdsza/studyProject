package com.toy.user.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.user.service.IUserService;
import com.toy.viewmodel.UserViewModel;

@RestController
public class UserController {
	@Autowired
	private IUserService userService;	
	
	@RequestMapping("/action/user/insert")
	public ModelAndView insertUserAction(UserViewModel vm,ModelAndView mv) throws Exception{
		userService.insert(vm.getDetail());
		mv.setViewName("base/login/login");
		return mv;
	};
	 @RequestMapping("/user/list")
	 public ModelAndView viewListUser() throws Exception{
        return new ModelAndView("base/user/list");
    }
	@RequestMapping("/action/user/list")
	public UserViewModel listUserAction(@RequestBody UserViewModel vm, ModelAndView mv) throws Exception{
		vm.setTotalCount(userService.totalCount(vm.getParamUserId()));
		vm.setListUser(userService.list(vm.getParamUserId(),vm.getPageNum(),vm.getPageSize()));
		return vm;
	};
	@RequestMapping("/action/user/rest/update")
	public UserViewModel updateRestUserAction(@RequestBody UserViewModel vm, ModelAndView mv) throws Exception{
		userService.updateRestYN(vm.getDetail());
		return vm;
	};
	@RequestMapping("/action/user/use/update")
	public UserViewModel updateUseUserAction(@RequestBody UserViewModel vm, ModelAndView mv) throws Exception{
		userService.updateUseYN(vm.getDetail());
		return vm;
	};
}
