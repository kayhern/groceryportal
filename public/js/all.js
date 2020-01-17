//display all inventory in the SQL database using Sequelize GET 
//borrowed code from the book activity in GitLab
$.get("/api/all", function (data) {
    // For each item that the server sends us back
    for (var i = 0; i < data.length; i++) {
        // Create a parent div to hold inventory data
        var itemInventory = $("<div>");
        // Add a class to this div: 'well'
        itemInventory.addClass("SQLtable");
        // Add an id to the well to mark which well it is
        itemInventory.attr("id", "item-inventory-" + i);
        // Append the well to the well section
        $("#SQLtable").append(itemInventory);

        // Now  we add our book data to the section we just placed on the page
        $("#item-inventory-" + i).append("<h2>" + (i + 1) + ". " + data[i].item_name + "</h2>");
        $("#item-inventory-" + i).append("<h3>Price: " + data[i].price + "</h4>");
        $("#item-inventory-" + i).append("<h3>Quantity: " + data[i].quantity + "</h4>");
        $("#item-inventory-" + i).append("<h3>Aisle Number: " + data[i].aisle_number + "</h4>");
    }
});
// Make a get request to our api route that will return every grocery item in inventory