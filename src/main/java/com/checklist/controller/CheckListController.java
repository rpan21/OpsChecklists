package com.checklist.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.compress.utils.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.checklist.services.CheckListService;


@Controller
public class CheckListController {
    private static final Logger log = LoggerFactory.getLogger(CheckListController.class);
    private final String className="CheckListController.class";
    private String DestLocation="";

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
        /*String browse = check.getdetails("browse");
        String checkoutandpayment = check.getdetails("checkoutandpayment");
        String framework = check.getdetails("framework");
        String mobile = check.getdetails("mobile");
        String mya = check.getdetails("mya");
        String complus = check.getdetails("complus");*/
        String username=request.getParameter("userName");
        String password=request.getParameter("userPassword");
        String sessionvar=(String) request.getSession().getAttribute("user");
		if (null!=sessionvar) {
ModelAndView model= new ModelAndView("welcome");
            
            model.addObject("message", message);
            /*model.addObject("browse", browse);
            model.addObject("checkoutandpayment", checkoutandpayment);
            model.addObject("framework", framework);
            model.addObject("mobile", mobile);
            model.addObject("mya", mya);
            model.addObject("complus", complus);*/
            return  model;
        }
        if(null!=username && null!=password){
        if((username.equals("admin")&& password.equals("admin")) ){
            request.getSession().setAttribute("user", username);
            ModelAndView model= new ModelAndView("welcome");
            
            model.addObject("message", message);
            /*model.addObject("browse", browse);
            model.addObject("checkoutandpayment", checkoutandpayment);
            model.addObject("framework", framework);
            model.addObject("mobile", mobile);
            model.addObject("mya", mya);
            model.addObject("complus", complus);*/
            return  model;
        }
		}
       return new ModelAndView("index");
    }
    
    @RequestMapping(value = "/files/{fileID}", method = RequestMethod.GET)
    public void getFile(
        @PathVariable("fileID") String fileName, 
        HttpServletResponse response) throws IOException {
            String src= DestLocation.concat("\\"+"resource"+"\\"+fileName+".pdf");
            InputStream is = new FileInputStream(src);
            IOUtils.copy(is, response.getOutputStream());
            response.flushBuffer();
    }

}
