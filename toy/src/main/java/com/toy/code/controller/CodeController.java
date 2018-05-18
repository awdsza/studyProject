package com.toy.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.code.dto.CodeDto;
import com.toy.code.service.ICodeService;
import com.toy.viewmodel.CodeViewModel;

@RestController
public class CodeController {
	@Autowired
 	private ICodeService codeService;
	 @RequestMapping("/code/parent/list")
	 public ModelAndView board() throws Exception{
		 List<CodeDto> listParentCode = null;
			listParentCode = codeService.listParentCode();
        return new ModelAndView("base/code/list","parent",listParentCode);
    }
	 @RequestMapping(value = "/action/code/parent/list", method = RequestMethod.POST)
	 public CodeViewModel listParentCodeAction(CodeViewModel vm) throws Exception{
		 vm.setListParentCode(codeService.listParentCode());
        return vm;
    }
	 @RequestMapping(value = "/action/code/parent/create", method = RequestMethod.POST)
		public CodeViewModel createParentCodeAction(CodeViewModel vm, Model model) throws Exception {
		 codeService.insertParentCode(vm.getDetail());
		 vm.setListParentCode(codeService.listParentCode());
			return vm;
		}
}
