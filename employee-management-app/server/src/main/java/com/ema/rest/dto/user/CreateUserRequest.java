package com.ema.rest.dto.user;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class CreateUserRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;


}
