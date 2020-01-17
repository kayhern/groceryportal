$(document).ready(function () {


  // When user clicks add-btn
  $("#add-btn").on("click", function (event) {
    event.preventDefault();

    // Make a newGrocery object
    var newGrocery = {
      item_name: $("#item_name").val().trim(),
      price: $("#price").val().trim(),
      quantity: $("#quantity").val().trim(),
      aisle_number: $("#aisle_number").val().trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newGrocery)
      // On success, run the following code
      .done(function (data) {
        // Log the data we found
        console.log(data);
      });

    // Empty each input box by replacing the value with an empty string
    $("#item_name").val("");
    $("#price").val("");
    $("#quantity").val("");
    $("#aisle_number").val("");

  });

});