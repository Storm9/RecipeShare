String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
    });
};

jQuery(document).ready(function () {

    var numNewIngredients = 0;

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        var template = $('#newIngredientTemplate').html();
        $('#ingredientsList').append(template.format(numNewIngredients++));
    });
});