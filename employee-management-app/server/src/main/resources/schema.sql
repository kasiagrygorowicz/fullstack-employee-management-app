drop table if exists employee;
drop type if exists department;
drop table if exists users;

create table users
(
    id       serial,
    username varchar(50) not null,
    password  varchar(255) not null,
    PRIMARY KEY(id)
);

create type department as enum (
    'HR',
    'IT',
    'Accounting',
    'Sales'
    );

create table employee

(
    id         serial ,
    firstname  varchar(40) not null,
    lastname   varchar(40) not null,
    salary     float4      not null,
    department department,
    user_id    int,
    PRIMARY KEY(id),
    constraint fk_user foreign key (user_id) references users (id)

);

CREATE CAST (CHARACTER VARYING as department) WITH INOUT AS IMPLICIT;



