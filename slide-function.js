let $feature = $('#feature');
let $company = $("#company");
let list = [$feature, $company];

if (window.outerWidth <= 500) {
    list.forEach((element) => {
        element.on('click', function () {
            element.children('.dropdown').slideToggle();
        })
    })
    
}