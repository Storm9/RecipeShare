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

function createIngredients() {
    $('.new-ingredient').each(function () {
        $.post('/Ingredient/Create/',
            extractFromForm($(this).find('input').add($(this).find('select'))));

    });
}

function submitChanges() {

    // submit changes to recipe
    $.post($('.main-content form').attr('action'),
        extractFromForm($('.main-content input:not(#ingredientsList *)').add('#Instructions')),
        replacePage, "html");

    // sumbint changes to ingredients
    $('.ingredient-editor').each(function () {
        $.post('/Ingredient/Edit/' + $(this).data('ingredient'), 
            extractFromForm($(this).find('input').add($(this).find('select'))));
    });

    createIngredients();
}


function addIngredient() {
    $.get('/Ingredient/Create', function (data) {
        $('#ingredientList').append(data);
    });
}

jQuery(document).ready(function () {
    $('.ingredient-editor').each(function () {
        $(this).load('/Ingredient/Edit/' + $(this).data('ingredient'));
    });

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        addIngredient();
    });

    $('#saveChanges').click(function(event) {
        submitChanges();
    });
});