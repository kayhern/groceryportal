module.exports = (sequelize, type) => {
    return Grocery = sequelize.define("inventory", {
        item_name: type.STRING,
        department: type.STRING,
        price: type.INTEGER,
        quantity: type.INTEGER,
        aisle_number: type.INTEGER
    });
}