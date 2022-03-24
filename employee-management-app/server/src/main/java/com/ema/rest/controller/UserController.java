package com.ema.rest.controller;

import com.ema.rest.dto.user.CreateUserRequest;
import com.ema.rest.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping(path="api")
public class UserController {

    private final UserService userService;


    @PostMapping("/register")
    public ResponseEntity createUser(@RequestBody CreateUserRequest user){
        userService.addUser(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
