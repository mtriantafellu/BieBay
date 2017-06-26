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

# UPDATE `products` SET `item_id` = '<insertHere>' WHERE id = '1';

SELECT * FROM `products`;
 
DELETE FROM `products`
	WHERE id = '6';

