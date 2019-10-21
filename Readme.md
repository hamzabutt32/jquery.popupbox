# PopUpBox jQuery Plugin

**_PopUpBox_** is a simple jQuery plugin that is used to show pop-up boxes with simple animations(rotate,scale)

## Version

0.4

## Usage

Download the plugin and then link it to the html file as below:
You can also open demo file to see the working.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>POPUPMODALBOX</title>
    </head>
    <body>
        <div>
            Hello Here is the demo
        </div>
        <button id="btn">
            click me
        </button>
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"
        ></script>
        <script src="../jquery.popupmodalbox.js"></script>
        <script>
            $("#btn").on("click", e => {
                $("body").popupbox({
                    heading: "Test PopUpBox Test",
                    text: "This is amzaing plugin",
                    bgColor: "lightgray",
                    color: "white",
                    startanimation: "rotate",
                    endanimation: "scale",
                    direction: "frombottom",
                    fullScreen: true
                });
            });
        </script>
    </body>
</html>
```

## Parameter(s)

   ***type*** : options (Object) 
   
   ***Keys***
   name             :   type    :   usage

   **heading**          :   String  :   Text that will display as the heading of the modalbox default is "PopUpBox"  

   **text**             :   String  :   Text that will display under the heading of the modalbox default is "This Plugin Is Used To Show Pop-Up Boxes With Animation"    

   **bgColor**          :   String  :   Hex Code or color name as in css e.g. "red" or "#000" for the background of modalbox. defaul is "darkgrey" 

   **color**            :   String  :   save as "bgColor" for the font color default is "white"  

   **startanimation**   :   String  :   "rotate" or "scale" for the modalbox default is "rotate" 

   **endanimation**     :   String  :   save as "startanimation" default is "scale"  

   **direction**        :   String  :   "frombottom", "fromtop", "fromright", "fromleft" default is "frombottom"  

   **boxShadow**        :   String  :   same as in css e.g. "0px 0px 10px black"  

   **duration**         :   Number  :   duration of the animation in seconds default is 0.5.  

   **fullScreen**       :   Boolean :   cover the whole screen or not. default is false     

## Vendors

jQuery - [http://jquery.com](http://jquery.com)

## License

MIT License
