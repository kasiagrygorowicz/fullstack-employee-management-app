drop table if exists employee;
drop table if exists user;

create table user
(
    id        int auto_increment primary key,
    username varchar(50) not null,
    password  varchar(255) not null
);

create table employee

(
    id         int auto_increment primary key,
    firstname  varchar(40) not null,
    lastname   varchar(40) not null,
    salary     float4      not null,
    department enum ('HR',
        'IT',
        'Accounting',
        'Sales'),
    user_id    int,
    foreign key (user_id) references user (id)

);



