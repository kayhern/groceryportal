module.exports = function (sequelize, DataTypes) {
    var Inventories = sequelize.define("Inventories", {
        item_name: DataTypes.STRING,
        department: DataTypes.STRING,
        price: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        aisle_number: DataTypes.INTEGER
    });
    return Inventories;
};