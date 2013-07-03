function extractFromForm(elements) {
    return $.map(elements, function (input) {
        var retval = {};
        retval[$(input).attr('name')] = $(input).val();
        return retval;
    }).reduce(function (previousValue, currentValue, index, array) {
        return $.extend(previousValue, currentValue);
    });
}

function ingredientFields(editor) {
    return $(editor).find('input').add($(editor).find('select'));
}

function replacePage(data) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(data);
    newDoc.close();
}

function createIngredients() {
    $('.new-ingredient').each(function () {
        $.post('/Ingredient/Create/',
            extractFromForm(ingredientFields(this)));
    });
}

function submitChanges(recipeID) {

    // submit changes to recipe
    $.post('/Recipe/Edit/' + recipeID,
        extractFromForm($('.main-content input:not(#ingredientsList *)').add('#Instructions')),
        replacePage, "html");

    // sumbint changes to ingredients
    $('.ingredient-editor').each(function () {
        $.post('/Ingredient/Edit/' + $(this).data('ingredient'), 
            extractFromForm(ingredientFields(this)));
    });

    createIngredients();
}

function addIngredient(recipeID) {
    $.get('/Ingredient/Create', function (data) {
        var editor = $(data);
        editor.children('#RecipeID').val(recipeID);
        $('#ingredientsList').append(editor);
    });
}

jQuery(document).ready(function () {
    var recipeID = $('.main-content form > fieldset').data("recipeid");

    $('.ingredient-editor').each(function () {
        $(this).load('/Ingredient/Edit/' + $(this).data('ingredient'));
    });

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        addIngredient(recipeID);
    });

    $('#saveChanges').click(function (event) {
        event.preventDefault();
        submitChanges();
    });
});