    function onswitch()
    {
        document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
        document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
        
        document.getElementById("on").style.backgroundColor="white";
        document.getElementById("off").style.backgroundColor="blue";
        document.getElementById("butt").textContent = "Switched On";
    }

    function offswitch()
    {
        document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
        document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
        
        document.getElementById("off").style.backgroundColor="white";
        document.getElementById("on").style.backgroundColor="blue";
        document.getElementById("butt").textContent = "Switched Off";
    }


