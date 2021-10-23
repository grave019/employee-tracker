-- Create Database
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- Activate Database
USE employees_db;

-- Create Tables
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  -- PRIMARY KEY (id)
);