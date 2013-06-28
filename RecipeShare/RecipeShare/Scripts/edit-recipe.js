function extractFromForm(elements) {
    return $.map(elements, function (input) {
        var retval = {};
        retval[$(input).attr('name')] = $(input).val();
        return retval;
    }).reduce(function (previousValue, currentValue, index, array) {
        return $.extend(previousValue, currentValue);
    });
}

function submitChanges() {

    // submit changes to recipe
    $.ajax({
        type: 'POST',
        url: $('.main-content form').attr('action'),
        data: extractFromForm($('.main-content input:not(.ingredients-list *):not([type="button"])').add('#Instructions'))
    });

    // sumbint changes to ingredients
    $('.ingredient-editor').each(function () {
        $.ajax({
            type: 'POST',
            url: '/Ingredient/Edit/' + $(this).data('ingredient'),
            data: extractFromForm($(this).find('input').add($(this).find('select'))),
        });
    });

}

jQuery(document).ready(function () {
    $('.ingredient-editor').each(function () {
        $(this).load('/Ingredient/Edit/' + $(this).data('ingredient'));
    });
});