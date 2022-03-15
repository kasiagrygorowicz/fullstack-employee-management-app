package com.ema.rest.service;

import com.ema.domain.dao.EmployeeDAO;
import com.ema.domain.entity.Department;
import com.ema.domain.entity.Employee;
import com.ema.exceptions.EmployeeNotFoundException;
import com.ema.rest.dto.employee.CreateEmployeeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeDAO employeeDAO;

    @Override
    public void addEmployee(CreateEmployeeRequest employee) {
        employeeDAO.save(EmployeeMapper.map(employee));
    }

    @Override
    public void deleteEmployee(Long id) {
       Employee employee = employeeDAO.findById(id).orElseThrow(
               ()-> new EmployeeNotFoundException(id)
       );
       employeeDAO.delete(employee);
    }


    private static class EmployeeMapper{

        private static Employee map(CreateEmployeeRequest e){
            return new Employee(
                    e.getFirstname(),
                    e.getLastname(),
                    Department.valueOf(e.getDepartment()),
                    e.getSalary(),
                    Utils.getCurrentUser()
            );
        }
    }
}
