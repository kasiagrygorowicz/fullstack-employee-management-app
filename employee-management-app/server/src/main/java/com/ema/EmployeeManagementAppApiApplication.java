package com.ema;

import com.ema.domain.dao.EmployeeDAO;
import com.ema.domain.entity.Department;
import com.ema.domain.entity.Employee;
import com.ema.domain.entity.User;
import com.ema.rest.dto.user.CreateUserRequest;
import com.ema.rest.service.EmployeeService;
import com.ema.rest.service.EmployeeServiceImpl;
import com.ema.rest.service.UserService;
import com.ema.rest.service.UserServiceImpl;
import com.ema.security.PasswordEncoder;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableJpaRepositories
@SpringBootApplication
public class EmployeeManagementAppApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementAppApiApplication.class, args);
    }



    @Bean
    CommandLineRunner run(UserServiceImpl userService, PasswordEncoder passwordEncoder, EmployeeDAO employeeDAO) {
        return args -> {

            User user = userService.addUser(new CreateUserRequest("user_1","password"));

            Employee e1 = new Employee("Alice","Johnson", Department.HR, 12000L,user);
            Employee e2 = new Employee("John","Doe", Department.IT, 8000L,user);
            Employee e3 = new Employee("Phoebe","Williams", Department.Accounting, 6700L,user);

            employeeDAO.save(e1);
            employeeDAO.save(e2);
            employeeDAO.save(e3);
        };
    }

}
