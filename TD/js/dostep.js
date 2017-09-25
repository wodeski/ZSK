
var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = "zielony";

// document.getElementsByTagName()
var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length > 0){
    console.log(elNaglowek);
    console.log(elNaglowek.length);
    elNaglowek[0].className = 'czerwony';
}
var elCzerwony = document.getElementsByClassName('czerwony');
if(elCzerwony.length > 0){
    console.log(elCzerwony);
    console.log(elCzerwony);

}
/*
var ostatni = elCzerwony.item(1);
ostatni.className = 'zielony';
*/

/*
var ostatni = elCzerwony.item(elCzerwony.length - 1);
ostatni.className = 'zielony';


var ostatni = elCzerwony[elCzerwony.length - 1];
ostatni.className = 'zielony';
*/
var elTv = document.querySelector('li.gray');
elTv.className = 'czerwony';


;


function przycisk(){

        var elTvAll = document.querySelectorAll('li.gray');
console.log(elTvAll);
console.log(elTvAll.length);


     for(var i=0; i<elTvall.length; i++){

           elTvall[i] = 'zielony';

       }



    var z,j;
var elPrzycisk = document.getElementById('przycisk');
elPrzycisk.onclick() = function(){
    elTv = document.getElementsByTagName('tv')

}

}




































