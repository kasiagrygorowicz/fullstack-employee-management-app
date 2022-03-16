package com.ema.rest.service;

import com.ema.rest.dto.employee.CreateEmployeeRequest;

public interface EmployeeService {

    void addEmployee(CreateEmployeeRequest employee);
    void deleteEmployee(Long id);


}
