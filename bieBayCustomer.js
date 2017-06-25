var fs = require("fs");

//var questions = require('./Questions.js');
//console.log(questions[0].question);

var inquirer = require('inquirer');

//three arguments 1. which side, 2. userInput, 3. AnotherQuestion?

var genQuestion = '';
var genAnswer = '';
var answer = '';

var welcome = function() {

    var welcomeQuestion = {
        type: 'list',
        name: 'welcome',
        message: 'Welcome to BieBay!  Here are a few of the items we sell:',
        choices: ['View Items', 'Buy Items']
    }

    inquirer.prompt(welcomeQuestion).then(function (answers) {
        if (answers.welcome === 'View Items') {
            console.log('View Items');
            viewItems();
        } else {
            console.log('Buy Items');
            buyItems();
        }
    });
}

//ITEMS FUNCTION
var viewItems = function() {

    var item = {
        type: 'list',
        name: 'item',
        message: 'Here is what Item1 contains: ',
        choices: ['Item1', 'Item2', 'Item3', 'Item4']
    }

    inquirer.prompt(item).then(function (answers) {

        if (answers.item === 'Item1') {
            itemGenerator();
        } else if (answers.item === 'Item2') {
            itemGenerator();
        } else if (answers.item === 'Item3') {
            itemGenerator();
        } else if (answers.item === 'Item4') {
            itemGenerator();
        }
    });
}

//BUY ITEMS
var buyItems = function() {

    var item = {
        type: 'list',
        name: 'item',
        message: 'What item would you like to buy?',
        choices: ['Item1', 'Item2', 'Item3', 'Item4']
    }

    inquirer.prompt(item).then(function (answers) {

        if (answers.item === 'Item1') {
            itemGenerator();

        } else if (answers.item === 'Item2') {
            itemGenerator();
        } else if (answers.item === 'Item3') {
            itemGenerator();
        } else if (answers.item === 'Item4') {
            itemGenerator();
        }
    });
}

welcome();