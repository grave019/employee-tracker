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
  user: "root",

  // Your password
  password: "rootroot",
  database: "employees_db",
});

figlet("Employee Tracker", (err, result) => {
    console.log(err || result);
  });

  // Connect functions
connection.connect(function (err) {
    if (err) throw err;
    start();
    getDepartments();
    getRoles();
    getManagers();
    getEmployees();
  });

  // Intiating prompts
start = () => {
    inquirer
      .prompt({
        name: "choices",
        type: "list",
        message: "What would you like to do?",
        choices: ["ADD", "VIEW", "UPDATE", "DELETE", "EXIT"],
      })
      .then(function (answer) {
        if (answer.choices === "ADD") {
          addSomething();
        } else if (answer.choices === "VIEW") {
          viewSomething();
        } else if (answer.choices === "UPDATE") {
          updateSomething();
        } else if (answer.choices === "DELETE") {
          deleteSomething();
        } else if (answer.choices === "EXIT") {
          figlet("Exiting Employee Tracker", (err, result) => {
            console.log(err || result);
          });
  
          connection.end();
        } else {
          connection.end();
        }
      });
  };

  // Roles selection
getRoles = () => {
    connection.query("SELECT id, title FROM role", (err, res) => {
      if (err) throw err;
      roles = res;
    });
  };
  
  // Department selection
  getDepartments = () => {
    connection.query("SELECT id, name FROM department", (err, res) => {
      if (err) throw err;
      departments = res;
    });
  };
  
  // Manager selection
  getManagers = () => {
    connection.query(
      "SELECT id, first_name, last_name, CONCAT_WS(' ', first_name, last_name) AS managers FROM employee",
      (err, res) => {
        if (err) throw err;
        managers = res;
      }
    );
  };