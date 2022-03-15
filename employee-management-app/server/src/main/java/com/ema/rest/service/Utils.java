package com.ema.rest.service;

import com.ema.domain.entity.User;
import org.springframework.security.core.context.SecurityContextHolder;

public class Utils {

    public static User getCurrentUser(){
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
