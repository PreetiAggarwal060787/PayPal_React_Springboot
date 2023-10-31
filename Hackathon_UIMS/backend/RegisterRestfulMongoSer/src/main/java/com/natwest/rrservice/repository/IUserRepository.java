package com.natwest.rrservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.natwest.rrservice.model.User;

public interface IUserRepository extends MongoRepository<User, String> {

	@Query("{'email': {$in : [?0]},'password': {$in : [?1]}}")
	public User validateUser(String username, String password);
}
