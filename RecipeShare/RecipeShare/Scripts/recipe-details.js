jQuery(document).ready(function () {
    var recipeID = 0;

    $('#addReviewLink').click(function (event) {
        event.preventDefault();
        $.get("/Review/Create/" + recipeID, $(this).after);
    });
});