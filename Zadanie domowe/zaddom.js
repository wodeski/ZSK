
var elNaglowek = document.getElementById('naglowek');
var elHaslo = document.getElementById('haslo');

var elLogin = document.getElementById('login');

var elHex = document.getElementById('hex');



var form = [];
function zapisz(){
  
    form[0] = elHaslo.value;
   console.log(naglowek);
    form[1] = elLogin.value;
   console.log(naglowek);
    
    
    console.log(form);
elNaglowek.innerHTML = form;
};
function zmien(){
    var kolor = '#' + elHex.value;
    
    elNaglowek.style.color = kolor;
};
