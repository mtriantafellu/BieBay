# BieBay - Triantafellu
Week 7 Homework Monday Assignment

# Requirements
The npm modules required for this project are as follows (all of which have been included in the node modules folder)::
- npm 'require'
- npm 'inquirer'
- npm 'mysql'

# Purpose:
This app was designed to provide a shopping system that could be used through the command line.  It pulls from a mysql Database titled bieBay which has all the values stored in it.  The ideal usage is as follows:

# Usage:
- Open the following: bieBayCustomer.js
    - First command prompt: Select Yes if you would like to purchase something, No if you would like to exit
        - Select: Yes
            - The next command prompt will show what items are for sale, their id_name, nickname, price, and quantity
                - Select which item you would like to purchase by using the arrow key to scroll up or down
                
            - After selecting an item it will show:
                - Which item you picked
                - How much it costs
                - And how many are left in stock
            - It will then prompt the user as to how many items they would like
            - Enter in the desired number and it will thank the user for shopping bieBay and show how many items are left
            
# Future Development:
- Future development ideas include:
    - Adding in a Manager View
    - Adding in a Supervisor View

# Author:
- Matt Triantafellu
- UCF Coding BootCamp Summer 2017