package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.SignUp;
import com.example.demo.back.SignUpback;
import com.example.demo.repository.SignUpRepo;
@Service
public  class SignUpData implements SignUpService{
	@Autowired
	private SignUpRepo signupRepo;

	@Override
	public String addDetails(SignUpback signupback) {
		
		SignUp signup =new SignUp(
				 signupback.getId(),
                 signupback.getFirstName(),
                 signupback.getLastName(),
                 signupback.getEmail(),
                 signupback.getBloodGroup(),
                 signupback.getTests(),
                 signupback.getAddress()
                 
				);
				
				signupRepo.save(signup);
				return signup.getFirstName();
				
				
	}
	public List<SignUp> getSignUp()
	{
		return signupRepo.findAll();
	}
	@Override
	public String updateSignUp(SignUp signup) {
		signupRepo.save(signup);
		return "updated";
	}
	@Override
	public String deleteSignUpById(int id) {
		signupRepo.deleteById(id);
		return"deleted";
	}
}