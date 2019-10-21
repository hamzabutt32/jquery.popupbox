/*
*  name:    PopUpBox
*  author:  Ameer Hamza
*  version: 0.3.1
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
        endanimation:   "scale",
        boxShadow: "0px 0px 10px black",
        fullScreen: false,
    },options);
    
    if(popUpBoxOptions.direction === "fromright")
    {
        right = "-50%";
        rightafter = (popUpBoxOptions.fullScreen?0:((window.innerWidth/2)-200))+"px";
        top = topafter  = (popUpBoxOptions.fullScreen?0:((window.innerHeight/2)-200))+"px";
        
        left = leftafter = "initial";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "fromleft") {
        right = rightafter = "initial";
        top = topafter = (popUpBoxOptions.fullScreen?0:((window.innerHeight/2)-200))+"px";
        left = "-50%";
        leftafter = (popUpBoxOptions.fullScreen?0:((window.innerWidth/2)-200))+"px";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "fromtop") {
        right = rightafter = "initial";
        top = "-40%";
        topafter = (popUpBoxOptions.fullScreen?0:((window.innerHeight/2)-200))+"px";
        left = leftafter = (popUpBoxOptions.fullScreen?0:((window.innerWidth/2)-200))+"px";
        bottom = bottomafter = "initial";
    } if (popUpBoxOptions.direction === "frombottom") {
        right = rightafter = "initial";
        top = topafter = "initial";
        left = leftafter = (popUpBoxOptions.fullScreen?0:((window.innerWidth/2)-200))+"px";
        bottom = "-50%";
        bottomafter = (popUpBoxOptions.fullScreen?0:((window.innerHeight/2)-200))+"px";
    } 

    var popupModalBoxWidth = popUpBoxOptions.fullScreen ? "100%": "400px";
    var popupModalBoxHeight = popUpBoxOptions.fullScreen ? "100%":"400px";
    var popupdiv = '<div id="overlayPopUpBox"><div id="popUpBox" style="z-index:1000; flex-direction:column;justify-content:center;align-items:center;width:'+popupModalBoxWidth+';height:'+popupModalBoxHeight+';background-color:'
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
    +'</p><input type="button" id="closepopup" value="Close" style="border:none;"/></div></div>';
    $('body').append(popupdiv);
    
    $('#overlayPopUpBox').css({
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
        height: "100vh",
        top:0,
        left:0,
        bottom:0,
        right:0

    });
    $('#closepopup').css({
        textAlign:"center",
        background: "black",
        color: "white",
        padding: "12px",
        width: "73px",
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
    $("#popUpBox").css({
        'transform': animationVal,
        'left'      :   leftafter,
        'right'     :   rightafter,
        'top'       :   topafter,
        'bottom'    :   bottomafter,
        'box-shadow':   popUpBoxOptions.boxShadow, 
        'opacity': '1',
        'display':'flex'
    });
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
            $('#overlayPopUpBox').remove();
        }, popUpBoxOptions.duration*1000);
        
    });

} 
}(jQuery));
