jQuery(function($) {
    function getIngredientEditor(ingredientId) {
        $.ajax('Ingredient/Edit/' + ingredientId,
            function(data) {
                $('.ingredients-list').append(data);
            },
            'html');
    }
});

jQuery(document).ready(function () {
    
});