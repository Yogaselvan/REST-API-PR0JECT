package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.back.SignUpback;
import com.example.demo.model.SignUp;
import com.example.demo.service.SignUpService;
@CrossOrigin
@RestController
@RequestMapping("/hi")
public class SignUpController {
	@Autowired
	SignUpService signupservice;
	
	@PostMapping("/save")
	public String saveSignUp(@RequestBody SignUpback signupback)
	{
		String id=signupservice.addDetails(signupback);
		return id;
	}
	@GetMapping("/get")
	public List <SignUp> get()
	{
		return signupservice.getSignUp();
	}
	@PutMapping("/put")
	public String update(@RequestBody SignUp signup)
	{
		return signupservice.updateSignUp(signup);
	}
	@DeleteMapping("/del")
	public String delete(@RequestParam int id)
	{
		return signupservice.deleteSignUpById(id);
	}
	
}