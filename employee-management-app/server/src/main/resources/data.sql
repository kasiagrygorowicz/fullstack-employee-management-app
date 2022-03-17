insert into users(username,password)
values(
       'user_1','$2a$13$/E/9O91uPnLZ2jF0WkGAUuq51em.TPIGz5xQJ5gvVG48Lir1yNu56'
      ),
      (
          'user_2','$2a$13$/E/9O91uPnLZ2jF0WkGAUuq51em.TPIGz5xQJ5gvVG48Lir1yNu56'
      );

insert into employee (firstname, lastname, salary, department,user_id)
values
    ('Ben', 'Johns', 13000, 'IT',1),
    ('Amy', 'Smith', 3000.90, 'HR',1),
    ('Mary-Kate', 'Winston', 10600, 'IT',1),
    ('Phoebe', 'Alvarez', 8999.67, 'Accounting',1),
    ('Saoirse', 'Doe', 30000, 'HR',1),
    ('John', 'Connelly', 5379.25, 'Sales',2),
    ('Eugene', 'Robinson', 9000, 'Accounting',2);
