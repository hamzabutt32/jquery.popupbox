/*
*  name:    PopUpBox
*  author:  Ameer Hamza
*  version: 0.1.0
*  license: MIT
*/

(function($){
$.fn.popupbox = function(options){
    var animationVal;
    var animationClose;
    var top = right = left = bottom= 0;
    var rightafter = leftafter = bottomafter = topafter =  0;
    
    var popUpBoxOptions=$.extend({
        heading:        "PopUpBox",
        text:           "This Plugin Is Used To Show Pop-Up Boxes With Animation",
        bgColor:        "darkgrey",
        color:          "White",
        direction:      "frombottom",
        startanimation: "rotate",
        duration:       0.5,
        endanimation:   "scale"
    },options);
   
    if(popUpBoxOptions.direction === "fromright")
    {
        right = "-50%";
        rightafter = "34%";
        top = topafter  = "15%";
        
        left = leftafter = "initial";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "fromleft") {
        right = rightafter = "initial";
        top = topafter = "15%";
        left = "-50%";
        leftafter = "34%";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "fromtop") {
        right = rightafter = "initial";
        top = "-40%";
        topafter = "15%";
        left = leftafter = "35%";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "frombottom") {
        right = rightafter = "initial";
        top = topafter = "initial";
        left = leftafter = "35%";
        bottom = "-20%";
        bottomafter = "32%";
    } 
    var popupdiv = '<div id="popUpBox" style="z-index:1000;width:400px;height:400px;background-color:'
    +popUpBoxOptions.bgColor+
    ';color:'
    +popUpBoxOptions.color+';position:fixed;top:'+
    top
    +';left:'+left+';right:'+
    right
    +';bottom:'+
    bottom
    +';display:none;opacity:0;transition:all '+
    popUpBoxOptions.duration
    +'s;"><h1 style="text-align:center">'+
    popUpBoxOptions.heading
    +'</h1><p style="text-align:center;margin-top:50px;overflow:hidden">'+
    popUpBoxOptions.text
    +'</p><input type="button" id="closepopup" value="Close" style="border:none;"/></div>';
    $('body').append(popupdiv);
    $('#closepopup').css({
        position:"absolute",
        textAlign:"center",
        background: "black",
        color: "white",
        padding: "12px",
        width: "73px",
        bottom: "60px",
        left: "167px",
        fontWeight:"bold",
        cursor:"pointer"

    });
    if (popUpBoxOptions.endanimation === "rotate")
        animationClose = "rotate(-90deg)";
    if(popUpBoxOptions.startanimation === "rotate"){
        animationVal="rotate(360deg)";   
    }if(popUpBoxOptions.startanimation === "scale")
        animationVal = "scale(1.2)"; 
    if (popUpBoxOptions.endanimation === "scale")
        animationClose = "scale(0.2)";


    $("#popUpBox").show();
    $("#popUpBox").css({ 'transform': animationVal,
        'left': leftafter,
        'right': rightafter,
        'top': topafter,
        'bottom': bottomafter,
        'opacity': '1'});
    document.getElementById('closepopup').addEventListener("mouseenter",function () {
        $('#closepopup').css({
            
            'background-color': 'darkgrey'
        });
    });
    document.getElementById('closepopup').addEventListener("mouseleave", function () {
        $('#closepopup').css({

            'background-color': 'black'
        });
    });
    document.getElementById('closepopup').addEventListener("click",function() {
        $('#popUpBox').css({
            'transform': animationClose,
            'left': left,
            'right': right,
            'top': top,
            'bottom': bottom,
            'opacity': '0'
        });
        setTimeout(function () {
            $('#popUpBox').remove();
        }, popUpBoxOptions.duration*1000);
        
    });

} 
}(jQuery));
