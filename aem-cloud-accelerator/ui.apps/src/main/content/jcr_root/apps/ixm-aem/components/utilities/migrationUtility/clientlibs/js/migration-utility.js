(function($, $document) {
    "use strict";

    $(document).on("click", ".migration-button", function(e) {
        $.ajax({
            url: '/bin/migration',
            type: 'POST',
            success: function(data, error, request) {
                $("#successDiv").text('Success! ' + data);
                $("#successDiv").show();
                $("#errorDiv").hide();
            },
            error: function(request, error, data) {
               $("#errorDiv").text('Error! ' + request.responseText);
               $("#errorDiv").show();
               $("#successDiv").hide();
            }
        });
    });

})($, $(document));