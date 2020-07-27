/*global $, document, check, window*/
$(document).ready(function () {
    'use strict';
    $('.carousel').carousel({
        interval: 4000
    });
});
$(window).scroll(function () {
    'use strict';
    var height = $(window).scrollTop();
    if (height >= 545) {
        $(".navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus").css("background-color", "#ed143d");
        $('.navbar-inverse').css("background-color", "#222");
    } else {
        $(".navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus").removeAttr("style");
        $('.navbar-inverse').removeAttr("style");
    }
    if (height >= 1662) {
        $(".up").css("display", "flex");
    } else {
        $(".up").hide();
    }
});

function check() { // eslint-disable-line no-unused-vars
    'use strict';
    if ($('.navbar-toggle').hasClass("collapsed") === true) {
        $(".collapse-padding").css("transition", "padding 0.5s ease");
        $(".collapse-padding").mouseover(function () {
            $(this).css("padding-left", "30px");
        });
        $(".collapse-padding").mouseout(function () {
            $(this).css("padding-left", "15px");
        });
    } else {
        $(".collapse-padding").removeAttr("style");
        $(".collapse-padding").mouseover(function () {
            $(this).css("padding-left", "15px");
        });
        $(".collapse-padding").mouseout(function () {
            $(this).css("padding-left", "15px");
        });
    }
}

function goup() { // eslint-disable-line no-unused-vars
    'use strict';
    $("html,body").animate({
        scrollTop: 0
    }, 600);
}
$(window).on("load", function () {
    'use strict';
 /*   setInterval(function () {
        $(".loading").fadeOut("slow",
                    function () {
                $(this).remove();
                $(window).scrollTop(0);
            }, 400);
    });*/

        setInterval(function(){
               $("body").css("overflow-y","scroll");
               $(".loading").fadeOut("slow",function () {
                $(this).remove();
                $(window).scrollTop(0);
               });},1700);
});
