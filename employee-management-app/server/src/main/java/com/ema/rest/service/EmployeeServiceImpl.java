package com.ema.rest.service;

import com.ema.domain.dao.EmployeeDAO;
import com.ema.domain.entity.Department;
import com.ema.domain.entity.Employee;
import com.ema.domain.entity.User;
import com.ema.exceptions.EmployeeNotFoundException;
import com.ema.rest.dto.employee.CreateEmployeeRequest;
import com.ema.rest.dto.employee.EditEmployeeRequest;
import com.ema.rest.dto.employee.GetEmployeeInfoRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
       Employee employee = employeeDAO.getById(id);
       employeeDAO.delete(employee);
    }

    @Override
    public List<GetEmployeeInfoRequest> getAllUserEmployees() {
        User user = Utils.getCurrentUser();
        return user.getEmployees().stream().map(EmployeeMapper::map).collect(Collectors.toList());
    }

    @Override
    public void editEmployee(EditEmployeeRequest employee, Long id) {
        Employee e = employeeDAO.getById(id);

        e.setFirstname(employee.getFirstname());
        e.setLastname(employee.getLastname());
        e.setDepartment(Department.valueOf(employee.getDepartment()));
        e.setSalary(employee.getSalary());

        employeeDAO.flush();
    }

    @Override
    public GetEmployeeInfoRequest getEmployee(Long id) {
        Employee employee = employeeDAO.getById(id);
        return EmployeeMapper.map(employee);
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

        private static GetEmployeeInfoRequest map(Employee e){
            return new GetEmployeeInfoRequest(
                    e.getId(),
                    e.getFirstname(),
                    e.getLastname(),
                    e.getDepartment().toString(),
                    e.getSalary()
            );
        }
    }
}
