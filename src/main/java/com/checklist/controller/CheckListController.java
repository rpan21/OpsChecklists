package com.checklist.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.checklist.services.CheckListService;


@Controller
public class CheckListController {
    private static final Logger log = LoggerFactory.getLogger(CheckListController.class);
    private final String className="CheckListController.class";

    @RequestMapping("/")
    public String getHomePage() {
        String methodName="getHomePage";
        log.info("Login Page Url of Checklist is hit : " + className + ":" + methodName );
		if(session.getAttribute("user").equals("admin"))
		return hello.html;
       return "index";
    }
    
    
    @RequestMapping("/hello")
    public ModelAndView getDetails(HttpServletRequest request, HttpSession session) {
        String methodName="getDetails";
        log.info("Home Page Url of Checklist is hit : " + className + ":" + methodName );
        CheckListService check= new CheckListService();
        String message = check.getdetails();
        String username=request.getParameter("userName");
        String password=request.getParameter("userPassword");
        if(username.equals("admin")&& password.equals("admin")){
			session.setAttribute("user","admin");
            return new ModelAndView("welcome", "message", message);
        }
       return new ModelAndView("index");
    }

}
