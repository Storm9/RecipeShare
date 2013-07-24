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

    for (var image in images) {
        $($.cloudinary.image(images[image], { width: 300, height: 225, crop: 'fill' })
            .appendTo($(".images ul")))
            .wrap($('<li><a>', { href: $.cloudinary.url(images[image], {}) }));
    }

    $('.images').unslider();

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