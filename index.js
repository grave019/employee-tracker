// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const { printTable } = require("console-table-printer");
const figlet = require("figlet");

// Secure connection
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3001,
    }
  );

  // Variables
let roles;
let departments;
let managers;
let employees;

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3001
  port: 3001,

  // Your username
  user: process.env.DB_USER,

  // Your password
  password: process.env.DB_PASSWORD,
  database: "employees_db",
});