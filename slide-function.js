let $feature = $('#feature');
let $company = $("#company");
let list = [$feature, $company];

list.forEach((element) => {
    element.on('click', function () {
        if (size <= 646) {
            element.children('.dropdown').slideToggle();
        }
    })
})


