package com.natwest.rrservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.rrservice.model.User;
import com.natwest.rrservice.service.IUserService;

@RestController
@RequestMapping("api/v1")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private IUserService userservice;
	private ResponseEntity<?> respentity;
	
	@PostMapping("/adduser")
	public ResponseEntity<?> SaveUserDataRequest(@RequestBody User userObj)
	{
		User dataadded=this.userservice.addUser(userObj);
		respentity=new ResponseEntity(dataadded,HttpStatus.CREATED);
		
		return respentity;
	}
	
	@GetMapping("/getallusers")
	public ResponseEntity<?> getAllUserDetails()
	{
		List<User> usersData=this.userservice.getAllUsers();
		respentity= new ResponseEntity(usersData,HttpStatus.OK);
		return respentity;
		
	}
}
