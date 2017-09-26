//getElementById


/*var elPierwszy = document.getElementById("pierwszy");

elPierwszy.className = "zielony";

//metoda getElementsByTagName

var elNaglowek = document.getElementsByTagName('h1');
if(elNaglowek.length>0){
    console.log(elNaglowek);
    console.log(elNaglowek.length);
    
    elNaglowek[0].className ="czerwony"
}

//metoda getElementsByClassName

var elCzerwony = document.getElementsByClassName("czerwony");

if(elCzerwony.length > 0){
    
    console.log(elCzerwony);
    
}

var ostatni = elCzerwony[elCzerwony.length - 1];
ostatni.className = 'zielony';

//querySelector zwraca pierwsze dopasowanie

var elTv = document.querySelector("li.grey");
elTv.className="czerwony";

//querySelectorAll

var elTvAll = document.querySelectorAll("li.grey");
console.log(elTvAll);
//console.log(elTvAll.lenght);

var elBtn = document.getElementById("btn");
var elLista = document.getElementsByClassName("zielony");

console.log(elLista);
elBtn.onClick = function()
{
for (var i=0; i < [elLista.lenght - 1]; i++) {
    elLista.className ="blue";
}  */
    
/*}

var przycisk = document.getElementById('btn');

elPrzycisk.onclick = function(){
    elKs = document.getElementsByName('sport');
}

var elPrzycisk = document.getElementById('przycisk');
elPrzycisk.onclick() = function(){
     elKs = document.getElementsByName('sport');
    
function zmien(element, index){

        elKs[index].className = 'zielony';
}
    elKs.forEach(zmien);

};*/
//previousElementSibling, nextElementSibling
/*

var poczatekElem = document.getElementById('s2');
var poprzedniElem = poczatekElem.previousElementSibling;
var nastepnyElem = poczatekElem.nextElementSibling;
console.log(poprzedniElem);


poczatekElem.className = 'zielony';
poprzedniElem.className = 'zielony';
nastepnyElem.className = 'zielony';
//firstchild last child
var lista = document.getElementsByTagName('ul')[2];
var lech = document.getElementById('s1');


console.log(lista);

var pierwszy = lista.firstElementChildChild;
pierwszy.setAttribute('class', 'grey'); 
var ostatni = lista.lastElementChild;
ostatni.setAttribute('class', 'grey');

*/


//zmien input type tekst zmien pierwszy input na button i przypisz wartosc wyslij 



/*var text = document.getElementsByTagName('input')[0];
console.log(text);
text.value = 'Wyślij';
//text.setAttribute('type', 'button');
var link = document.getElementById('link');
link.setAttribute('href', 'http://zsk.poznan.pl/');*/

