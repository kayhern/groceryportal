USE grocery_db;

CREATE TABLE produce_inventory
(
    id INT NOT NULL
    AUTO_INCREMENT,
 item_name VARCHAR
    (100) NULL,
 price DECIMAL
    (10,2) not NULL,
 quantity INTeger NULL,
 aisle_number INTeger NOT NULL,
 PRIMARY KEY
    (id)
);