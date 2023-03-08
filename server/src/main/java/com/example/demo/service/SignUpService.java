package com.example.demo.service;



import java.util.List;

import com.example.demo.back.SignUpback;
import com.example.demo.model.SignUp;


public interface SignUpService {
	String addDetails(SignUpback signupback);

	List<SignUp> getSignUp();
	
	String updateSignUp(SignUp signup);

	String deleteSignUpById(int id);
}