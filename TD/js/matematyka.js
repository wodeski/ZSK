/*function pi(){
        if(document.getElementById('wyborpi').checked == true){
            var x = Math.PI;
            //console.log(x);
            document.getElementById("blok").innerHTML = x;


    }else if(document.getElementById('wybornic').checked == true){
        alert('wybrales nic');
    }
    else{
        alert('Nic nie wybrałes')
    }
}*/
var elWybor = document.getElementById("wyborpi");
var elWybornic = document.getElementById("wybornic");
var elBlok = document.getElementById("blok");

function pi(){
        if(elWybor.checked){
            var x = Math.PI;
            //console.log(x);
            elBlok.innerHTML = x;


    }else if(elWybornic.checked){
        alert('wybrales nic');
    }
    else{
        alert('Nic nie wybrałes')
    }
}

var pierwiastek = Math.sqrt(25);
console.log(pierwiastek);

var a = 13.2;
var b = 28.5;
var minimalana = Math.min(a,b);
var maksymalna = Math.max(a,b);
console.log("Minimalana " + minimalana);
console.log("Maksymalna " + maksymalna);

var zaokraglenie = Math.round(a);
var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

