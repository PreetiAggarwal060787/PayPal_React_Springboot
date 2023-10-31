package com.natwest.rrservice.service;

import java.util.List;

import com.natwest.rrservice.exception.UserNotFoundException;
import com.natwest.rrservice.model.User;

public interface IUserService {
	
	public boolean validateUserService(String email, String password) throws UserNotFoundException;
	public User addUser(User userObj);
	public User updateUser(User userObj, String email);
	public User getUserById(String email);
	public boolean deleteUserById(String email);
	public List<User> getAllUsers();

}
