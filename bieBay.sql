use biebay;

#CREATE TABLE `products` (
#`id` INT AUTO_INCREMENT,
#`item_id` varchar(128),
#`product_name` varchar(128),
#`department_name` varchar(128),
#`price` int,
#`stock_quantity` int,
#`autographed` boolean,
#PRIMARY KEY(`id`));

DESCRIBE `products`;

INSERT INTO `products` (`item_id`) VALUES ('Hairspray');
INSERT INTO `products` (`item_id`) VALUES ('Pants');
INSERT INTO `products` (`item_id`) VALUES ('Toothpaste');
INSERT INTO `products` (`item_id`) VALUES ('Sunglasses');
INSERT INTO `products` (`item_id`) VALUES ('Sneakers');

UPDATE `products` SET `product_name` = 'BiebSpray' WHERE id = '1';
UPDATE `products` SET `product_name` = 'BaggyPants' WHERE id = '2';
UPDATE `products` SET `product_name` = 'BiebPaste' WHERE id = '3';
UPDATE `products` SET `product_name` = 'TooCool' WHERE id = '4';
UPDATE `products` SET `product_name` = 'Biekers' WHERE id = '5';

UPDATE `products` SET `department_name` = 'grocery' WHERE id = '1';
UPDATE `products` SET `department_name` = 'apparel' WHERE id = '2';
UPDATE `products` SET `department_name` = 'grocery' WHERE id = '3';
UPDATE `products` SET `department_name` = 'accessories' WHERE id = '4';
UPDATE `products` SET `department_name` = 'footwear' WHERE id = '5';

UPDATE `products` SET `price` = '5' WHERE id = '1';
UPDATE `products` SET `price` = '25' WHERE id = '2';
UPDATE `products` SET `price` = '10' WHERE id = '3';
UPDATE `products` SET `price` = '90' WHERE id = '4';
UPDATE `products` SET `price` = '120' WHERE id = '5';

UPDATE `products` SET `stock_quantity` = '125' WHERE id = '1';
UPDATE `products` SET `stock_quantity` = '125' WHERE id = '2';
UPDATE `products` SET `stock_quantity` = '110' WHERE id = '3';
UPDATE `products` SET `stock_quantity` = '190' WHERE id = '4';
UPDATE `products` SET `stock_quantity` = '120' WHERE id = '5';

 #id, item_id, product_name, department_name, stock_quantity, autographed

#UPDATE `products` SET `autographed` = '0' WHERE id = '1';
#UPDATE `products` SET `autographed` = '0' WHERE id = '2';
#UPDATE `products` SET `autographed` = '0' WHERE id = '3';
#UPDATE `products` SET `autographed` = '1' WHERE id = '4';
#UPDATE `products` SET `autographed` = '0' WHERE id = '5';

SELECT * FROM `products`;
 
#DELETE FROM `products`
#	WHERE id = '6';

