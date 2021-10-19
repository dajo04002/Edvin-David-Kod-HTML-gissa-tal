var slumpran = Math.floor(Math.random() * 100) + 1;
var val = document.getElementById("gissning");
var elementtxt = document.getElementById("txt1");
var count = 0;

function slump(){
    count ++;

        if(val.value < slumpran){
            elementtxt.innerHTML="Too low";
            
        }
        else if(val.value > slumpran){
            elementtxt.innerHTML="Too high";
        }
        else{
            elementtxt.innerHTML="YES!";
        }
        document.getElementById("txtcount").innerHTML="Count: " + count;
}