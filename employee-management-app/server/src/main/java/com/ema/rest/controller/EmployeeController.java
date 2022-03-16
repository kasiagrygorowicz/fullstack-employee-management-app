package com.ema.rest.controller;

import com.ema.rest.dto.employee.CreateEmployeeRequest;
import com.ema.rest.dto.employee.GetEmployeeInfoRequest;
import com.ema.rest.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/all")
    public List<GetEmployeeInfoRequest> getEmployees(){
        return employeeService.getAllUserEmployees();
    }



}
