drop table if exists employee;

create table employee

(
    id         int auto_increment primary key,
    firstname  varchar(40) not null,
    lastname   varchar(40) not null,
    salary     float4      not null,
    department enum  ('HR',
    'IT',
    'Accounting',
    'Sales')

);



