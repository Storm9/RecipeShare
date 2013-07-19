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

    var form = $('.main-content form');

    $('#addIngredient').click(function (event) {
        event.preventDefault();
        var template = $('#newIngredientTemplate').html();
        $('#ingredientsList').append(template.format(numNewIngredients++));
    });

    $('#saveChanges').click(function (event) {
        event.preventDefault();
        form.attr('action', '/Recipe/Edit/')
        form.submit();
    });

    $('#createChild').click(function (event) {
        event.preventDefault();
        form.attr('action', '/Recipe/Create/')
        form.submit();
    });
});