/*elPierwsza = document.getElementById('pierwsza');
elDruga = document.getElementById('druga');
elDodawanie = document.getElementById('dodawanie');
elOdejmowanie = document.getElementById('odejmowanie');
elMnozenie = document.getElementById('mnozenie');
elDzielenie = document.getElementById('dzielenie');
elBlok= document.getElementById('blok');



function (){
    if(elPierwsza.value !="" || elDruga.value !="" ){
        return true;
    else{
        return false;
    }

}


elDodawanie.onclick = function(){

if(check(elPierwsza, elDruga) == true){
    elBlok.innerHTML = Number(elPierwsza.value) - Number(elDruga.value);
    elBlok.innerHTML = "Prosze podac obie liczby";


}
    elOdejmowanie.onclick = function(){

if(check(elPierwsza, elDruga) == true){
     elBlok.innerHTML = "Prosze podac obie liczby";
}
    elBlok.innerHTML = Number(elPierwsza.value) + Number(elDruga.value);



}
    elMnozenie.onclick = function(){

if(check(elPierwsza, elDruga) == true){
         elBlok.innerHTML = "Prosze podac obie liczby";
}
    elBlok.innerHTML = Number(elPierwsza.value) * Number(elDruga.value);
    elBlok.innerHTML = "Prosze podac obie liczby"


    elDzielenie.onclick = function(){
    }
if(check(elPierwsza, elDruga) == true){
         elBlok.innerHTML = "Prosze podac obie liczby";
}
    elBlok.innerHTML = Number(elPierwsza.value) / Number(elDruga.value);
    elBlok.innerHTML = "Prosze podac obie liczby";


}*/

/*

    var elpodstawa = document.getElementById('podstawa');
    var elwykladnik = document.getElementById('wykladnik');
    var elpotegowanie = document.getElementById('potegowanie');
    var elwynikPotegi = document.getElementById('wynikpotegi');


    elpotegowanie.onclick = function(){
        if(elpodstawa.value == '' || elwykladnik.value == '' );
        elwynikPotegi.innerHTML = "wpisz podstawe i wykładnik";

    }else if (elwykladnik.value < 0){

        elwynikPotegi.innerHTML = "Wykładnik musi byc dodatni";}
        else
        a = parseInt(elpodstawa.value);
        b = parseInt(elwykladnik.value);
        var potegowanie = Math.pow(a, b);
        elwynikPotegi.innerHTML = potegowanie;

    }
*/


    //uzytkownik w formularzu podaje nazwe swoich ulubionych zespołów to wysiwtli mu sie strona zespołu metalica i acdc



    var b = document.getElementById('b');

b.onclick = function(){
    window.location.assign('https://pl-pl.facebook.com/');



}









