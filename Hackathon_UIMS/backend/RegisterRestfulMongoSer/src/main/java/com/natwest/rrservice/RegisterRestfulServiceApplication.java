package com.natwest.rrservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.natwest.rrservice.filter.JWTFilter;

@SpringBootApplication
public class RegisterRestfulServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegisterRestfulServiceApplication.class, args);
	}
	
	@Bean
	public FilterRegistrationBean jwtFilter() 
	{
		FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
		filterRegistrationBean.setFilter(new JWTFilter());
		filterRegistrationBean.addUrlPatterns("/api/v1/login");
		return filterRegistrationBean;
	}

}
