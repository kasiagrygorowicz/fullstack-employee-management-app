package com.ema.rest.controller;

import com.ema.rest.dto.employee.CreateEmployeeRequest;
import com.ema.rest.dto.employee.EditEmployeeRequest;
import com.ema.rest.dto.employee.GetEmployeeInfoRequest;
import com.ema.rest.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping
    public ResponseEntity createEmployee(@RequestBody CreateEmployeeRequest e){
        employeeService.addEmployee(e);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("@employeeFilter.canAccessEmployee(#id)")
    public ResponseEntity deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/all")
    public List<GetEmployeeInfoRequest> getEmployees(){
        return employeeService.getAllUserEmployees();
    }

    @PutMapping("/edit/{id}")
    @PreAuthorize("@employeeFilter.canAccessEmployee(#id)")
    public ResponseEntity editEmployee(@PathVariable Long id, @RequestBody EditEmployeeRequest employeeRequest){
        employeeService.editEmployee(employeeRequest,id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    @PreAuthorize("@employeeFilter.canAccessEmployee(#id)")
    public GetEmployeeInfoRequest getEmployee(@PathVariable Long id){
        return employeeService.getEmployee(id);
    }




}
