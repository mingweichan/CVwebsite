/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    
    "use strict";
//HIGHLIGHT MOVE TEXT LI
    
    $(".work ul li").on("mouseenter", function () {
        $(this).finish().animate({
            marginLeft: "-40px"
        }, 200)
    });
    $(".work ul li").on("mouseleave", function() {
        $(this).finish().animate({
            marginLeft: "0px"
        }, 200)
    });
    
    //THUMBNAIL FADE IN
    
    var fadeInn = function() {
        
       $("#bgimg1").stop(true,true).fadeIn(200);
    };
    var fadeOutt = function() {
        
        $("#bgimg1").stop(true,true).fadeOut(200);
    
    };

        var fadeDarl = function(){         
    $("#darl").on({ 
        mouseenter: fadeInn,
        mouseleave: fadeOutt
    });
    };
    
    fadeDarl();
    
//    var fadeDarl = function(){         
//    $("#darl").on({ 
//        mouseenter: function(){
//            $("#bgimg1").stop(true,true).fadeIn(200);
//    },
//        mouseleave: function() {
//            $("#bgimg1").stop(true,true).fadeOut(200);
//    }
//    });
//    };
//    
//    fadeDarl();
    
    $("#chil").on({ 
        mouseenter: function() {
            $("#bgimg2").stop(true,true).fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg2").stop(true,true).fadeOut(200);
        }
    });
    $("#lawn").on({ 
        mouseenter: function() {
            $("#bgimg3").stop(true,true).fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg3").stop(true,true).fadeOut(200);
        }
    });
    $("#aque").on({ 
        mouseenter: function() {
            $("#bgimg4").stop(true,true).fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg4").stop(true,true).fadeOut(200);
        }
    });
    $("#velo").on({ 
        mouseenter: function() {
            $("#bgimg5").stop(true,true).fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg5").stop(true,true).fadeOut(200);
        }
    });
    //EXPAND AND CLOSE DIV
   
//    var printF = function(){console.log($("#darl").height())};
//    
//    $("#darl").on("click", function(){
//        if($("#darl").height() <=60){
//        
//            $(this).finish().animate({
//                height: "300px",
//            }, 500);
//            $("#darl .block").css("overflow", "visible");
//            $(this).off('mouseenter');
//        }else{
//            $(this).finish().animate({
//              height: "54px",
//            }, 500);
//            fadeDarl();
//            $("#darl .block").css("overflow", "hidden");
//        }
//    printF();
//            });
//   
//        
    $("#darl").click(function() {
      $(this).toggleClass('expanded');
          if($("#darl").hasClass('expanded')){
         $(this).off('mouseleave',fadeOutt);
    }else{
        $(this).on('mouseleave',fadeOutt);
    }
    });

});
    