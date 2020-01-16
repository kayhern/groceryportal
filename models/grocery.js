module.exports = function (sequelize, DataTypes) {
    var Grocery = sequelize.define("inventory", {
        item_name: DataTypes.STRING,
        department: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        aisle_number: DataTypes.INTEGER
    });
    return Grocery;
};