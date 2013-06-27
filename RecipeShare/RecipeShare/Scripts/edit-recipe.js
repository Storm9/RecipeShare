jQuery(document).ready(function () {
    $('.ingredient-editor').each(function () {
        $(this).load('/Ingredient/Edit/' + $(this).data('ingredient'));
    });
});