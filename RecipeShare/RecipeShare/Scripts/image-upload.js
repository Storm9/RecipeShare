$.cloudinary.config({ "api_key": "748288728926438", "cloud_name": "hadwuldso" });

jQuery(document).ready(function () {

    var recipeID = $("#image").data("recipeid");
    var params = null;

    $.ajax(
    {
        url: "/Recipe/GetUploadSignature/" + recipeID,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data)
        {
            params = data;
        }
    });

    $('.cloudinary-fileupload').fileupload({
        formData: params,
        dropZone: $(".drop_zone"),
        dataType: 'json',
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        maxFileSize: 5000000, // 5 MB
        progressall: function (e, data) {
            $("#label").text("Uploading " + Math.round((data.loaded * 100.0) / data.total) + "%");
        },
        start: function (e) {
            $("#label").text("Uploading...");
        },
        done: function (e, data) {
            $("#label").text("Upload complete!");
            $.cloudinary.image(data.result.public_id, { format: data.result.format, width: 200, height: 150, crop: 'fill' }).appendTo(".preview");
        },
        fail: function (e, data) {
            $("#label").text("Upload failed!");
        }
    });
});