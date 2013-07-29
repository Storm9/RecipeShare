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


    if (images.length > 0)
    {
        for (var image in images)
        {
            $('<div class="carousel-feature"><a class="carousel-link" href="' 
              + $.cloudinary.url(images[image], {}) + 
              '"><img class="carousel-image" src="'
              + $.cloudinary.url(images[image], { width: 500, height: 375, crop: 'pad' }) +
              '"></a></div>').appendTo($("#carousel"));
        }

        $(".carousel-container").attr("style", "display:block");
        
        $("#carousel").featureCarousel({
            //autoPlay: false,
            trackerIndividual: false,
        });
    }

    $('#addReviewLink').click(function (event) {
        event.preventDefault();
        $.get("/Review/Create/" + recipeID, function (data) {
            $('#addReviewLink').after(data);
        });
    });
});