DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(7) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

-- Populating the tables
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Human Resources"), ("Legal"), ("Finance"), ("Artist");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", "100000", "7"), ("Software Developer", "70000", "2"), ("Lawyer", "60000", "3"), ("Lawyer", "60000", "4"), ("Actuary", "60000", "5"), ("Artist", "70000", "6"), ("Manager", "40000", "1");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Graves", "Brent", "1", "1"), ("Thor", "Graves", "2", "1"), ("Lily", "Graves", "3", "1"), ("Loki", "Graves", "4", "1"), ("Fenix", "Sampson", "5", "1"), ("Tater", "Head", "6", "1"), ("Patti", "Graves", "6", "1");

