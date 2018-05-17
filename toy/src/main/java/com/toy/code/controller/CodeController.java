package com.toy.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.toy.code.dto.CodeDto;
import com.toy.code.service.ICodeService;

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
	 @RequestMapping(value = "/action/code/parent/insert", method = RequestMethod.POST)
		public String insertParentCodeAction(CodeDto dto, Model model) throws Exception {
			model.addAttribute("result",codeService.insertParentCode(dto));
			model.addAttribute("parent",codeService.listParentCode());
			return "base/code/list";
		}
}
