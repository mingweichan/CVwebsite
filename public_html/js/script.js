$(document).ready(function(){
    
//HIGHLIGHT MOVE TEXT LI
    
    $(".work ul li").on("mouseenter", function() {
        $(this).finish().animate({
            marginLeft: "-40px",
        }, 200)
    });
    $(".work ul li").on("mouseleave", function() {
        $(this).finish().animate({
            marginLeft: "0px",
        }, 200)
    });
    
//THUMBNAIL FADE IN
    
    $("#darl").on({ 
        mouseenter: function() {
            $("#bgimg1").stop(true,true).fadeIn(200);
    },
        mouseleave: function() {
            $("#bgimg1").stop(true,true).fadeOut(200);
        }
    });
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
   
    var printF = function(){console.log($("#darl").height())};
    
    $("#darl").on("click", function(){
        if($("#darl").height() == 38){
        
            $(this).finish().animate({
                height: "300px",
            }, 500);
            $("#darl .block").css("overflow", "visible");
            $(this).off('mouseenter');
        }else{
            $(this).finish().animate({
               height: "38px",
            }, 500);  
        }
    printF();
            });
   
        
    
});
    