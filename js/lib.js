var marginLeft = 5;
var marginRight = 5;
var marginTop = 5;

document.addEventListener('keydown', function(e) {
    var box = document.querySelector(".box");
    e = e || window.event;
    var code = e.which || e.keyCode;
    //console.log(code);
    
    //seta pra direita
    if(code == 39){
    	  box.style.marginLeft = marginLeft + "px";
        marginLeft = marginLeft + 5;
    };
    
    //seta pra esquerda
   	if(code == 37){
    	  marginLeft = marginLeft - 5;
        box.style.marginLeft = marginLeft + "px";        
    };
    
    //seta pra baixo
    if(code == 40){
    		box.style.marginTop = marginTop + "px"; 
        marginTop = marginTop + 5;
    };
    
    //seta pra cima
    if(code == 38){
    	  marginTop = marginTop - 5;
        box.style.marginTop = marginTop + "px";        
    };
    
})