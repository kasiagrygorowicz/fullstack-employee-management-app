package com.ema.rest.dto.employee;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class GetEmployeeInfoRequest {

    @NotNull
    private Long id;

    @NotNull
    private String firstname;

    @NotNull
    private String lastname;

    @NotNull
    private String department;

    @NotNull
    private Long salary;
}
