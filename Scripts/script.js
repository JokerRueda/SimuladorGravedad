    function color(c, g, grav){
        var gg=0;
        document.getElementById('planet').style.backgroundColor=c;
        $("#gravedad").text(grav);
        var caida = setInterval(function(){
            gg+=g;
            document.getElementById('ball').style.marginTop= gg + "px";
            if (gg >= 350) {
                clearInterval(caida);
            }
        }, 1);
        
        
    }

  
    
