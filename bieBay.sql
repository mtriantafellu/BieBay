#use biebay

# CREATE TABLE `products` (
# `id` INT AUTO_INCREMENT,
# `item_id` varchar(128),
# `product_name` varchar(128),
# `department_name` varchar(128),
# `price` int,
# `stock_quantity` int,
# `autographed` boolean,
# PRIMARY KEY(`id`));

DESCRIBE `products`;

# INSERT INTO `products`
# (`item_id`) VALUES ('Toothpaste');

UPDATE `products` SET `stock_quantity` = '134' WHERE id = '1';
UPDATE `products` SET `stock_quantity` = '182' WHERE id = '2';
UPDATE `products` SET `stock_quantity` = '42' WHERE id = '3';
UPDATE `products` SET `stock_quantity` = '98' WHERE id = '4';
UPDATE `products` SET `stock_quantity` = '253' WHERE id = '5';

SELECT * FROM `products`;
 
#DELETE FROM `products`
#	WHERE id = '6';

