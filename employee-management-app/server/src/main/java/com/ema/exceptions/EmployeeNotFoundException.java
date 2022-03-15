package com.ema.exceptions;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(Long id) {
        super("Employee with id "+id+" does not exists !!!");
    }
}
