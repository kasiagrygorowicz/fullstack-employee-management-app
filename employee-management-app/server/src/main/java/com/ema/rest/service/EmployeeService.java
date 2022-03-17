package com.ema.rest.service;

import com.ema.rest.dto.employee.CreateEmployeeRequest;
import com.ema.rest.dto.employee.EditEmployeeRequest;
import com.ema.rest.dto.employee.GetEmployeeInfoRequest;

import java.util.List;

public interface EmployeeService {

    void addEmployee(CreateEmployeeRequest employee);
    void deleteEmployee(Long id);
    List<GetEmployeeInfoRequest> getAllUserEmployees();
    void editEmployee(EditEmployeeRequest employee,Long id);
    GetEmployeeInfoRequest getEmployee(Long id);


}
