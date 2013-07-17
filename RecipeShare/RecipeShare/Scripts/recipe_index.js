$.cloudinary.config({ "api_key": "748288728926438", "cloud_name": "hadwuldso" });

jQuery(document).ready(function () {
    var rows = $(".item");

    $.each(rows, function () {
        var images = new Array();

        $.ajax(
        {
            url: "/Recipe/GetImages/" + $(this).data("recipeid"),
            type: 'get',
            dataType: 'json',
            async: false,
            success: function (data) { images = data; },
        });

        $($.cloudinary.image(images[0], { width: 150, height: 100, crop: 'fill' }).prependTo($(this)));
    });
});