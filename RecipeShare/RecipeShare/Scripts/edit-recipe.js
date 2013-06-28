function submitChanges() {

    // submit changes to recipe
    $.ajax({
        type: 'POST',
        url: $('.main-content form').attr('action'),
        data: {
            __RequestVerificationToken: $('.main-content form input:[name="__RequestVerificationToken"]:first').val(),
            Name: $('.main-content form input:[name="Name"]').val(),
            Instructions: $('.main-content form input:[name="Instructions"]').val()
        }
    });

    // sumbint changes to ingredients
    $('.ingredient-editor').each(function () {
        $.ajax({
            type: 'POST',
            url: '/Ingredient/Edit/' + $(this).data('ingredient'),
            data: $.map($(this).find('input'), function (input, i) {
                var retval = {};
                retval[$(input).attr('name')] = $(input).val();
                return retval;
            }).reduce(function (previousValue, currentValue, index, array) {
                return $.extend(previousValue, currentValue);
            })
        });
    });

}

jQuery(document).ready(function () {
    $('.ingredient-editor').each(function () {
        $(this).load('/Ingredient/Edit/' + $(this).data('ingredient'));
    });
});