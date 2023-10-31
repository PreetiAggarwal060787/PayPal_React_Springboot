package com.natwest.rrservice.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason ="User already exists")
public class UserAlreadyExistsException extends Exception{

}
