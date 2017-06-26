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
    public String getHomePage(HttpServletRequest request) {
        String methodName="getHomePage";
        String username=(String) request.getSession().getAttribute("user");
        if(null==username || username.isEmpty()){
        log.info("Login Page Url of Checklist is hit : " + className + ":" + methodName );
       return "index";
        }
        else{
            return "redirect:/checklist.html";
        }
    }
    
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        String methodName="logout";
        //String username=(String) request.getSession().getAttribute("user");
        request.getSession().invalidate();
        return "redirect:/";
    }
    
    @RequestMapping("/checklist")
    public ModelAndView getDetails(HttpServletRequest request) {
        String methodName="getDetails";
        log.info("Home Page Url of Checklist is hit : " + className + ":" + methodName );
        CheckListService check= new CheckListService();
        String message = check.getdetails();
        String username=request.getParameter("userName");
        String password=request.getParameter("userPassword");
        String sessionvar=(String) request.getSession().getAttribute("user");
        if(null!=username && null!=password){
        if((username.equals("admin")&& password.equals("admin")) ){
            request.getSession().setAttribute("user", username);
            return new ModelAndView("welcome", "message", message);
        }
        }
        else if (null!=sessionvar) {
            return new ModelAndView("welcome", "message", message); 
        }
       return new ModelAndView("index");
    }

}
