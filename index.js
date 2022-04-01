const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const {generateManagerCard, generateEngineerCard, generateInternCard, baseHtml} = require("./src/htmlGen")

const teamMemberHtmlArr = [];

function init() {
    function managerCreate() {
        inquirer.prompt([
            {
                 type: 'input',
                 name: 'name',
                 message: 'What is the Manager name?',
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the Manager id?',
                },
                {
                 type: 'input',
                 name: 'email',
                 message: 'What is the Manager email?',
                },
                {
                 type: 'input',
                 name: 'officeNumber',
                 message: 'What is the office number?',
            }
        ])