jQuery(document).ready(function () {
    var recipeID = $("#recipe").data("recipeid");

    $('#addReviewLink').click(function (event) {
        event.preventDefault();
        $.get("/Review/Create/" + recipeID, function (data) {
            $('#addReviewLink').after(data);
        });
    });
});