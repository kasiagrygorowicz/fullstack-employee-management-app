package com.ema.rest.dto.employee;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EditEmployeeRequest {

    @NotNull
    private String firstname;

    @NotNull
    private String lastname;

    @NotNull
    private String department;

    @NotNull
    private Long salary;

}
