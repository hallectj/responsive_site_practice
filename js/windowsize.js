function getWinSize() {
    var element = document.getElementById("windowSizeOutput");
    var newDiv = document.createElement("div");
    newDiv.id = "windowSizeOutput";
    
    document.body.appendChild(newDiv);
    
    if (element) {
        element.parentNode.removeChild(element);
    }
    
    var wd = window.innerWidth;
    var ht = window.innerHeight;
    
    element = null;
    
    var display = document.getElementById("windowSizeOutput");
    var dispCSS = {
       "background-color": "yellow",
       "height": "40px",
       "width": "100px",
       "position": "fixed",
       "left": "10px",
       "top": "10px"
    };

    var getStyles = function(css) {
       var result = "";
       Object.keys(css).forEach(function (prop) {
          result += prop + ":" + css[prop] + ";";
       });
       return result;
    };

    display.style.cssText = getStyles(dispCSS);
    display.innerHTML = "Width: " + wd + "px" + "<br>" + "Height: " + ht + "px";
}

document.addEventListener("DOMContentLoaded", function() {getWinSize();}, false);  //initial load

