String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
    });
};

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

    if (images.length > 0)
    {
        for (var image in images)
        {
            var image_id = images[image].substr(0, images[image].lastIndexOf('.')) || images[image];

            $('<div class="carousel-feature" id="' + image_id +
              '"><a class="carousel-link" href="' + $.cloudinary.url(images[image], {}) +
              '"><img class="carousel-image" src="' + $.cloudinary.url(images[image], { width: 500, height: 375, crop: 'pad' }) +
              '"></a><div class="carousel-caption"><a data-image="' + image_id +
              '"><img src="/Images/delete.png"></a></div></div>').appendTo($("#carousel"));
        }

        $(".carousel-container").attr("style", "display:block");

        $("#carousel").featureCarousel({
            //autoPlay: false,
            trackerIndividual: false,
        });
    }

    $(".carousel-caption a").click(function ()
    {
        deleteImage($(this).data("image"));
    });

    var numNewIngredients = 0;

    var form = $('.main-content form');

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        var template = $('#newIngredientTemplate').html();
        $('#ingredientsList').append(template.format(numNewIngredients++));
    });

    $('#saveChanges').click(function (event) {
        event.preventDefault();
        form.attr('action', '/Recipe/Edit/')
        form.submit();
    });

    $('#createChild').click(function (event) {
        event.preventDefault();
        form.attr('action', '/Recipe/Create/')
        form.submit();
    });
});

function deleteImage(image)
{
    var params = null;
    var image_id = image.substr(0, image.lastIndexOf('.')) || image;

    $.ajax(
    {
        url: "/Recipe/GetDeleteSignature/" + image_id,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data)
        {
            params = data;
        }
    });

    $.ajax(
    {
        url: "https://api.cloudinary.com/v1_1/hadwuldso/image/destroy",
        type: 'post',
        data: params,
        async: false,
        success: function (data)
        {
            $("#" + image).remove();
        }
    });
}