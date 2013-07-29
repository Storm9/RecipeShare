$.cloudinary.config({ "api_key": "748288728926438", "cloud_name": "hadwuldso" });

jQuery(document).ready(function () {

    //autoComplete("#recipeName", "/Recipe/GetRecipes");
    //autoComplete("#ingredientName", "/Recipe/GetIngredients");

    var recipes = $(".carousel-feature");

    $.each(recipes, function ()
    {
        var images = new Array();

        $.ajax(
        {
            url: "/Recipe/GetImages/" + $(this).data("recipeid"),
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) { images = data; },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });

        $(this).find(".carousel-link").attr("href", "/Recipe/Details/" + $(this).data("recipeid"));
        $(this).find(".carousel-caption p").text($(this).data("recipename"));
        if (images.length > 0)
        {
            $(this).find(".carousel-image").attr({ alt: $(this).data("recipename"), src: $.cloudinary.url(images[0], { width: 500, height: 375, crop: 'pad' }) });
        }
        else
        {
            $(this).find(".carousel-image").attr({ alt: $(this).data("recipename"), src: "Images/blank-recipe.jpg" });
        }    
    });

    //$(".tracker-individual-container").css("margin-left", function () { $(".tracker-individual-container").width() / -2 });

    $("#carousel").featureCarousel({
        //autoPlay: false,
        trackerSummation: false
    });
});

function autoComplete(id, path) {
    $(id).autocomplete({
        source: function (request, response) {
            $.ajax({
                url: path,
                type: "POST",
                dataType: "json",
                data: { term: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item, value: item };
                    }))

                }
            })
        },
        messages: {
            noResults: "",
            results: ""
        }
    });
}