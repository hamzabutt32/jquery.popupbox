#PopUpBox jQuery Plugin#

***PopUpBox*** is a simple jQuery plugin that is used to show pop-up boxes with simple animations(rotate,scale)

##Version##
0.3.1

##Usage##
add this code just before the closing tag of body  

    <script src="jquery.popupbox/jquery.popupbox.js"></script>
        <script>
            $('body').popupbox({
                 heading: "Test PopUpBox Test",
                 text: "This is amzaing plugin",
                 bgColor:"lightgray",
				 color:"white",
                 startanimation: "rotate",
                 endanimation: "scale",
                 direction: "frombottom"
            });
        </script>

##Vendors##
jQuery - [http://jquery.com](http://jquery.com)

##License##

MIT License