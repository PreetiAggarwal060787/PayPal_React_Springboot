package com.natwest.rrservice.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.rrservice.exception.UserNotFoundException;
import com.natwest.rrservice.model.User;
import com.natwest.rrservice.service.UserServiceImpl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;

@RestController
@RequestMapping("auth/v1")
@CrossOrigin("*")
public class UserAuthenticationController {

	private Map<String,String> map = new HashMap<>();
	
	private UserServiceImpl userService;
	
	@Autowired
	public UserAuthenticationController(UserServiceImpl userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody User user){
		try {
			String jwtToken = generateToken(user.getEmail(), user.getPassword());
		
			map.put("message", "User Successfully LoggedIn");
			
			map.put("token", jwtToken);
		
		} catch (Exception e) {
			map.put("message", e.getMessage());
			map.put("token", null);
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map,HttpStatus.OK);
	}
	
	private String generateToken(String email, String password) throws ServletException, UserNotFoundException {
		String jwtToken = "";
		if(email == null || password == null) {
			throw new ServletException("Please send valid username and password");
		}
		//validate user aginst db
		boolean flag= 	userService.validateUserService(email, password);
		if(!flag)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(email)
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}	
}
