package com.toy.code.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.code.service.ICodeService;
import com.toy.viewmodel.CodeViewModel;

@RestController
public class CodeController {
	@Autowired
	private ICodeService codeService;

	@RequestMapping("/code/parent/list")
	public ModelAndView board() throws Exception {
		return new ModelAndView("base/code/list");
	}

	@RequestMapping(value = "/action/code/parent/list", method = RequestMethod.POST)
	public CodeViewModel listParentCodeAction(@RequestBody CodeViewModel vm) throws Exception {
		vm.setListParentCode(codeService.listParentCode());
		return vm;
	}

	@RequestMapping(value = "/action/code/child/list", method = RequestMethod.POST)
	public CodeViewModel listChildCodeAction(@RequestBody CodeViewModel vm) throws Exception {
		vm.setListChildCode(codeService.listChildCode(vm.getParamParentCode()));
		return vm;
	}

	@RequestMapping(value = "/action/code/parent/create", method = RequestMethod.POST)
	public CodeViewModel createParentCodeAction(@RequestBody CodeViewModel vm, Model model) throws Exception {
		codeService.insertParentCode(vm.getDetail());
		return vm;
	}

	@RequestMapping(value = "/action/code/child/create", method = RequestMethod.POST)
	public CodeViewModel createChildCodeAction(@RequestBody CodeViewModel vm, Model model) throws Exception {
		codeService.insertChildCode(vm.getDetail());
		return vm;
	}

	@RequestMapping(value = "/action/code/parent/delete", method = RequestMethod.POST)
	public CodeViewModel deleteParentCodeAction(@RequestBody CodeViewModel vm, Model model) throws Exception {
		codeService.deleteParentCode(vm.getParamParentCode());
		codeService.deleteChildCodeByParentCode(vm.getParamParentCode());
		return vm;
	}

	@RequestMapping(value = "/action/code/child/delete", method = RequestMethod.POST)
	public CodeViewModel deleteChildCodeAction(@RequestBody CodeViewModel vm, Model model) throws Exception {
		codeService.deleteChildCode(vm.getParamChildCode());
		return vm;
	}
}
