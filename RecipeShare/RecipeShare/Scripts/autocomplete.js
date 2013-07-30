function autoComplete(id, path) {
    $(id).autocomplete({
        source: function (request, response) {
            $.ajax({
                url: path,
                type: "POST",
                dataType: "json",
                data: { term: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return { label: item, value: item };
                    }))

                }
            })
        },
        messages: {
            noResults: "",
            results: ""
        }
    });
}