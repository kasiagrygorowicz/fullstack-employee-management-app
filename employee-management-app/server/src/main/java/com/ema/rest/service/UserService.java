package com.ema.rest.service;

import com.ema.domain.entity.User;
import com.ema.rest.dto.user.CreateUserRequest;

public interface UserService {

    void addUser(CreateUserRequest user);
}
