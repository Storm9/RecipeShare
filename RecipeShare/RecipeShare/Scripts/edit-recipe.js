function extractFromForm(elements) {
    return $.map(elements, function (input) {
        var retval = {};
        retval[$(input).attr('name')] = $(input).val();
        return retval;
    }).reduce(function (previousValue, currentValue, index, array) {
        return $.extend(previousValue, currentValue);
    });
}

function replacePage(data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();
}

function submitChanges() {

    // submit changes to recipe
    $.post($('.main-content form').attr('action'),
        extractFromForm($('.main-content input:not(.ingredients-list *):not([type="button"])').add('#Instructions')),
        replacePage, "html");

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