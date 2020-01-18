$(document).ready(function () {

    let querySearch = (searchParam) => {

        switch (searchParam) {
            case "ID":
                db.Inventories.findAll({
                    where: {
                        id = req.param.id
                    }
                })
                console.log("item IS: " + id)
                break;
            case "name":
                db.Inventories.findAll({
                    where: {
                        name = req.param.item_name
                    }
                })
                console.log("name: " + name)

                break;
            case "item_number":
                db.Inventories.findAll({
                    where: {
                        item_number = req.param.item_name
                    }
                })
                console.log("item number: " + item_name)

                break;
        }

    }





    $("#add-btn").on("click", function () {
        event.preventDefault()
        queryParam = $('input[name="searchParam"]:checked').val();
        queryKeyword = $("#submit-search").val();
        console.log(queryKeyword)
        console.log(queryParam)
        console.log(typeof queryParam)
        querySearch()
    })

})