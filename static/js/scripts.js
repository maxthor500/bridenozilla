/* from https://stackoverflow.com/questions/17908542/how-to-hide-div-when-scrolling-down-and-then-show-it-as-you-scroll-up*/
let mywindow = $(window);
let mypos = mywindow.scrollTop();
mywindow.scroll(function() {
    if(mywindow.scrollTop() > mypos) {
        $('#main-nav').addClass('hide-on-scroll');
    }
    else {
        $('#main-nav').removeClass('hide-on-scroll');
    }
    mypos = mywindow.scrollTop();
});
