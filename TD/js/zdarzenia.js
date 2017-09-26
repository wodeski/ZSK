//wyswietlic liczby od 1 do 100 dla liczby podzielnej przez 3 wypis fizz dla podzielnych przez 5 buzz a dla liczby podzielnej przez 15 fizzbuzz liczba - "" v


var imie = document.getElementById('imie');
var nazwisko = document.getElementById('nazwisko');
var login = document.getElementById('login');
var mail1 = document.getElementById('mail1');
var mail2 = document.getElementById('mail2');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var data = document.getElementById('data');
var regulamin = document.getElementById('regulamin');
var popraw = document.getElementById('popraw');
var przycisk = document.getElementById('przycisk');
var blok = document.getElementById('blok');
blok.style.color = 'red';

//onload


/*
window.onload = function(){

    alert('test');
}
imie.onblur = function(){
    if(imie.value.length 2 && imie.value.length < 10 ){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błedne dane!';
}
*/
/*function sprawdz(){

    alert('test');
}
imie.onblur = function(){
    if(imie.value.length 2 && imie.value.length < 10 ){
        blok.textContent = '';
    }else{
        blok.textContent = 'Błedne dane!';

    }
}
imie.addEventListener('blur', sprawdz);*/
function sprawdz (){
        //var element = document.getElementById(this.id);
    if(this.value.length > 2 && this.value.length < 10){
    blok.textContent = '';
}else{
    blok.textContent = "Błedne dane";
    this.focus();
    }
}


function mail (){

    if(mail1.value != mail2.value){
        blok.textContent = "Adresy poczty są różne";
        mail1.value = '';
        mail2.value = '';
        mail1.focus();
        mail2.disabled = true;



}
    else{
    mail1.disabled = true;
    mail2.disabled = true;
    blok.textContent = '';
        }

    }





function blokuj (){
    mail2.disabled = false;
    mail2.focus();


}
function blokuj2 (){
    pass2.disabled = false;
    pass2.focus();


}
function haslo (){
    if (pass1.value != pass2.value){
        blok.textContent = "Hasła są różne!";
        pass1.value = '';
        pass2.value = '';
        pass1.focus();
        pass2.disabled = true;



}else{
    pass1.disabled = true;
    pass2.disabled = true;
    blok.textContent = '';
}



        }
regulamin.onclik = function(){
    if(regulamin.checked == true){
    przycisk.disable = false;
}
    else{ przycisk.disabled= true
        }
}


function poprawto() {
    var blokowanie = document.getElementsByTagName('input');
    for (var i = 0; i < blokowanie.length; i++){
        if(blokowanie[i].disabled == true){
            blokowanie[i].disabled = false;
        }
    }
}






przycisk.onclick



imie.addEventListener('blur', sprawdz);
nazwisko.addEventListener('blur', sprawdz);
login.addEventListener('blur', sprawdz);
mail1.addEventListener('blur', blokuj);
mail2.addEventListener('blur', mail);
pass1.addEventListener('blur', blokuj2);
pass2.addEventListener('blur', haslo);
//regulamin.addEventListener('click', regulamin);
regulamin.addEventListener('change', regulamin);
popraw.addEventListener('click', poprawto);
