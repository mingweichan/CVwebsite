$(document).ready(function(){
    $(".work ul li a").on("mouseenter", function() {
        $(this).animate({
            left: "-=40px",
        }, 200)
    });
    $(".work ul li a").on("mouseleave", function() {
        $(this).animate({
            left: "+=40px",
        }, 200)
    });
    $("#darl").on({ 
        mouseenter: function() {
            $("#bgimg1").fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg1").fadeOut(200);
        }
    });
    $("#chil").on({ 
        mouseenter: function() {
            $("#bgimg2").fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg2").fadeOut(200);
        }
    });
})