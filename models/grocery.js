module.exports = (sequelize, type) => {
    return Grocery = sequelize.define("produce_inventory", {
        item_name: type.STRING,
        price: type.INTEGER,
        quantity: type.INTEGER,
        aisle_number: type.INTEGER
    });
}