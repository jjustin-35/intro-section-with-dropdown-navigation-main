let $feature = $('#feature');
let $company = $("#company");
let list = [$feature, $company];

// let sizeMobile = window.outerWidth;
// $(window).on('resize', () => {
//     sizeMobile = window.outerWidth;
// })



list.forEach((element) => {
    element.on('click', function () {
        if (size <= 646) {
            element.children('.dropdown').slideToggle();
        }
    })
})


