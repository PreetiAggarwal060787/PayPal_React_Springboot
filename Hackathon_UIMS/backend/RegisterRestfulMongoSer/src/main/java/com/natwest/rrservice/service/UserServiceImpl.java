package com.natwest.rrservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.rrservice.exception.UserNotFoundException;
import com.natwest.rrservice.model.User;
import com.natwest.rrservice.repository.IUserRepository;

@Service
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private IUserRepository userrepo;
	

	@Override
	public User addUser(User userObj) {
		Optional<User> useroptional= this.userrepo.findById(userObj.getEmail());
		User adduser=null;
		
		if(useroptional.isPresent())
			
		{
			System.out.println("Data Already exists with same email ID");
		}
		
		else
		{
			adduser=this.userrepo.save(userObj);
		}
		
		return adduser;
	}

	

	@Override
	public List<User> getAllUsers() {
		return this.userrepo.findAll();
	}



	@Override
	public User updateUser(User userObj, String email) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public User getUserById(String email) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public boolean deleteUserById(String email) {
		// TODO Auto-generated method stub
		return false;
	}



	@Override
	public boolean validateUserService(String email, String password) throws UserNotFoundException {
		User user = userrepo.validateUser(email, password);
		System.out.println("user" + user);
		if(user != null)
			return true;
		else
			return false;
	}

}
