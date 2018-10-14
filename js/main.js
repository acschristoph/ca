
$(function () {
    var navMain = $("#ca-navbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

var pvue = new Vue({
    el: '#preise_vue',
    data: {
        message: 'Hello Vue!',
        produkte: produkte
    }
})