const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

require('dotenv').config()

const promptUser = () => {
    inquirer.prompt ([
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
                      'Update an employee role',]
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
    })
};

showDepartments = () => {
    console.log('Showing all departments')
}

