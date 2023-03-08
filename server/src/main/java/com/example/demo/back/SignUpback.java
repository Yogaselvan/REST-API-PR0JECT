package com.example.demo.back;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class SignUpback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String BloodGroup;
	private String Tests;
	private String address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getBloodGroup() {
		return BloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.BloodGroup = bloodGroup;
	}
	public String getTests() {
		return Tests;
	}
	public void setTests(String tests) {
		this.Tests = tests;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public SignUpback(int id, String firstName, String lastName, String email, String bloodGroup, String tests, String address) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.BloodGroup = bloodGroup;
		this.Tests = tests;
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "SignUpback [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", BloodGroup=" + BloodGroup + ", Tests=" + Tests +", address="
				+ address + "]";
	}
	public SignUpback() {
		super();
	}
	
}