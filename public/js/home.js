// basic click events for going to the various pages in the application
//https://stackoverflow.com/questions/52229901/navigate-to-route-on-button-click/52230237

$(document).ready(function () {
    //on click event for the "All Inventory" Button
    $("#buttonDashAll").click(function () {
        //go to all inventory page
        location.assign("all.html");
    });

    $("#buttonDashInventory").click(function () {
        //go to inventory specialist
        location.assign("specialist.html");
    });

    $("#buttonDashSearch").click(function () {
        //go to search page
        location.assign("search.html");
    });

    $("#buttonDashDept").click(function () {
        //go to department change
        location.assign("deptSearch.html");
    });

});