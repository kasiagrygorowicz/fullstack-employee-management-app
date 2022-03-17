package com.ema.security.filter;

import com.ema.domain.dao.EmployeeDAO;
import com.ema.domain.dao.UserDAO;
import com.ema.domain.entity.Employee;
import com.ema.domain.entity.User;
import com.ema.exceptions.EmployeeNotFoundException;
import com.ema.rest.service.Utils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component("employeeFilter")
@RequiredArgsConstructor
public class EmployeeAuthorizationFilter {

    private final UserDAO userDAO;
    private final EmployeeDAO employeeDAO;

    public boolean canAccessEmployee(Long id){
        User user = Utils.getCurrentUser();
        Employee employee = employeeDAO.findById(id).orElseThrow(
                ()->new EmployeeNotFoundException(id)
        );
        return employee.getUser().getId()== user.getId();

    }
}
