package com.ema.rest.service;

import com.ema.domain.dao.UserDAO;
import com.ema.domain.entity.User;
import com.ema.exceptions.UserAlreadyExistsException;
import com.ema.rest.dto.user.CreateUserRequest;
import com.ema.security.MyUserPrincipal;
import com.ema.security.PasswordEncoder;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService,UserService {


    private final UserDAO userDao;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username).orElseThrow(()->{
            throw new UsernameNotFoundException("Username "+username+" has not been found");
        });

        return new MyUserPrincipal(user);
    }


    @Override
    public void addUser(CreateUserRequest user) {


       Optional<User> u =  userDao.findByUsername(user.getUsername());

       if(u.isPresent())
           throw new UserAlreadyExistsException(user.getUsername());

       User newUser = new User(user.getUsername());
       newUser.setPassword(passwordEncoder.bCryptPasswordEncoder().encode(user.getPassword()));
         userDao.save(newUser);

    }

    private  class UserMapper {}

}
