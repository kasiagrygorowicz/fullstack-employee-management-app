package com.ema.domain.dao;



import com.ema.domain.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface EmployeeDAO extends CrudRepository<Employee,Long> {


}
