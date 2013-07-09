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

function getIngredients(editors) {
    return $.map(editors, function (input) {
        return extractFromForm(ingredientFields(input));
    });
}

function createJsonData() {
    var recipeData = extractFromForm($('.main-content input:not(#ingredientsList *)').add('#Instructions'));
    recipeData["OldIngredients"] = getIngredients($('.ingredient-editor'));
    recipeData["NewIngredients"] = getIngredients($('.new-ingredient'));
    return recipeData;
}

jQuery(document).ready(function () {

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        $('#ingredientsList').append($('#newIngredientTemplate').html());
    });

    $('#saveChanges').click(function (event) {
        event.preventDefault();
        $.post('/Recipe/Edit/', createJsonData(), replacePage);
    });
});