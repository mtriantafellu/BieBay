
var mysql = require("mysql");

var inquirer = require('inquirer');

var fs = require("fs");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bieBay"
});

connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    welcome();
});

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

// viewItems FUNCTION
var viewItems = function() {

    connection.query('SELECT * FROM `products`', function(err, results) {
        if (err) throw err;

        inquirer.prompt ([
            {
                name: "choice",
                type: "list",
                message: "Which item would you like?",
                choices: function () {

                    choiceArray = [];

                    for (var i = 0; i < results.length; i++) {
                        choiceArray.push("ITEM ID: " + results[i].id + " | " + results[i].item_id + " | Item Name: " + results[i].product_name + " | Prce: $" + results[i].price);
                    }
                        return choiceArray;
                        //choose();
                },
                message: "Would you like to buy an item?  Please select which item below: "
            },

            ]) //end inquirer.prompt

            .then(function(answers) {

                var chosenItem;

                for (var i = 0; i < results.length; i++) {

                    if (results[i].id == answers.choice[9]) {
                        chosenItem = results[i];
                        console.log("You picked: " + results[i].item_id + " I.E.: " + results[i].product_name);
                        console.log("That will be: $" +  results[i].price + ".00 USD");
                    }
                }
            }) // end .then

    }) // end connection.query
}; // end viewItems function

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
