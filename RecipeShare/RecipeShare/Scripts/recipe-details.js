$.cloudinary.config({ "api_key": "748288728926438", "cloud_name": "hadwuldso" });

jQuery(document).ready(function () {

    var recipeID = $("#recipe").data("recipeid");

    var images = new Array();

    $.ajax(
    {
        url: "/Recipe/GetImages/" + recipeID,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) { images = data; },
    });

    for (var image in images)
    {
        $($.cloudinary.image(images[image], { width: 300, height: 225, crop: 'fill' })
            .appendTo($(".images ul")))
            .wrap($('<li><a>', { href: $.cloudinary.url(images[image], {}) }));
    }

    $('.images').unslider();

    $('#addReviewLink').click(function (event) {
        event.preventDefault();
        $.get("/Review/Create/" + recipeID, function (data) {
            $('#addReviewLink').after(data);
        });
    });
});