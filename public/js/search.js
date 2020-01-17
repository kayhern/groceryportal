$(document).ready(function () {

    // let querySearch = (searchParam) => {

    //     switch (searchParam) {
    //         case "ID":
    //             db.Inventories.findAll({
    //                 where: {
    //                     ID =
    //                 }
    //             })
    //             break;
    //         case "name":

    //             break;
    //         case "item_number":

    //             break;
    //     }

    // }





    $("#add-btn").on("click", function () {
        event.preventDefault()
        queryParam = $('input[name="searchParam"]:checked').val();
        queryKeyword = $("#submit-search").val();
        console.log(queryKeyword)
        console.log(queryParam)
        console.log(typeof queryParam)
        // querySearch()
    })

})
