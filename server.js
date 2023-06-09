const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

require('dotenv').config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.MYSQL_PASSWORD,
});

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Delete a department',
                'Delete a role',
                'Delete an employee'
            ]
        }
    ])
        .then((answers) => {
            const { choices } = answers;
            if (choices === 'View all departments') {
                showDepartments();
            }
            if (choices === 'View all roles') {
                showRoles();
            }

            if (choices === 'View all employees') {
                showEmployees();
            }

            if (choices === 'Add a department') {
                addDepartment();
            }

            if (choices === 'Add a role') {
                addRole();
            }

            if (choices === 'Add an employee') {
                addEmployee();
            }

            if (choices === 'Update an employee role') {
                updateEmployeeRole();
            }

            if (choices === 'Delete a department') {
                deleteDepartment();
            }

            if (choices === 'Delete a role') {
                deleteRole();
            }

            if (choices === 'Delete an employee') {
                deleteEmployee();
            }
        })
};

showDepartments = () => {
    console.log('Showing all departments')
    const sql = `SELECT department.id, department.name FROM department`;
}

showRoles = () => {
    console.log('Showing all roles')
    const sql = `SELECT role.id, role.title, role.salary, department.`;
}

showEmployees = () => {
    console.log('Showing all employees')
    const sql = `SELECT employee.id, employee.first_name, employee.last_name`
}

addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'What department would you like to add?',
            validate: addDepartment => {
                if (addDepartment) {
                    return true;
                } else {
                    return false;
                }
            }
        }]);
    }

