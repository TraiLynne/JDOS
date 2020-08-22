$(document).ready(function() {

    let currentUrl = window.location.href.split('/');

    console.log('READY');

    console.log(currentUrl[currentUrl.length - 1])

    currentUrl[currentUrl.length - 1] === '#construction-management-services' ?
        $('#constructionAccess').trigger('click')
        : currentUrl[currentUrl.length - 1] === '#admin-services' ?
            $('#engineeringAccess').trigger('click')
            : currentUrl[currentUrl.length - 1] === '#facility-services' ?
                $('#facilAccess').trigger('click')
                : currentUrl[currentUrl.length - 1] === '#program-project-services' ?
                    $('#programAccess').trigger('click')
                    : currentUrl[currentUrl.length - 1] === '#corporate-services' ?
                        $('#corpAccess').trigger('click')
                        : console.log('not services');

});