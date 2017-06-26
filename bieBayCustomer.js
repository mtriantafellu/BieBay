
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
        message: 'Welcome to BieBay!  Would you like to view our items for sale?',
        choices: ['Yes', 'No']
    }

    inquirer.prompt(welcomeQuestion).then(function (answers) {
        if (answers.welcome === 'Yes') {
            console.log('View Items');
            viewItems();
        } else {
            console.log('Ok - Please come again!');
        }
    });
}

// viewItems FUNCTION
var viewItems = function() {

    var quantity;
    var chosenItem;
    var chosenId;
    var choiceArray;

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
                        choiceArray.push("ITEM ID: " + results[i].id + " | " + results[i].item_id + " | Item Name: " + results[i].product_name + " | Prce: $" + results[i].price + " | " + results[i].stock_quantity);
                    }
                        return choiceArray;
                        //choose();
                },
                message: "Would you like to buy an item?  Please select which item below: "
            },

            ]) //end inquirer.prompt

            .then(function(answers) {

                for (var i = 0; i < results.length; i++) {

                    if (results[i].id == answers.choice[9]) {
                        chosenItem = results[i];
                        chosenId = results[i].id;

                        console.log("You picked: " + results[i].item_id + " I.E.: " + results[i].product_name);
                        console.log("That will be: $" + results[i].price + ".00 USD");
                        console.log("There are currently " + results[i].stock_quantity + " in stock.");
                    }
                }
            }) // end first .then

            //This function asks how many
            .then(function(answers) {

                var quantityInput = {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like?"
                    }

                    inquirer.prompt(quantityInput).then(function(value) {

                        quantity = value.quantity;
                        quantityLeft = [];
                        // console.log('quantity', quantity);
                        // console.log('chosenId', chosenId);
                        // console.log('chosenItem', chosenItem);
                        // console.log('chosenItem.stock_quantity', chosenItem.stock_quantity);


                        if (quantity < chosenItem.stock_quantity) {
                            console.log("Great!  We have that many in stock!");
                            connection.query('UPDATE `products` SET `stock_quantity` = `stock_quantity` - ? WHERE id = ?', [quantity, chosenId], function (err, results) {
                                if (err) {
                                    throw err;
                                }
                                console.log('Thank you for Shopping BieBay!');
                                quantityLeft.push(chosenItem.stock_quantity);
                                console.log('quantityLeft:', quantityLeft);
                                //left();
                            });

                        }
                        else
                            {
                                console.log("Sorry we don't have enough in stock!");
                                viewItems();
                            }

                        }) // end second quantityInput inquirer

                }) // end second .then

        }) // end connection.query

    var left = function() {
        var quantityLeft = {
            name: "quantity",
            type: "input",
            message: "Here\s how many we have left:" + chosenItem.stock_quantity
        }

        inquirer.prompt(quantityLeft).then(function (value) {
            console.log(chosenItem.stock_quantity);
        }) // end inquirer

    } // end left
}; // end viewItems function


