/*document.write("skrypt działa poprawnie <br />");
document.write("skrypt działa poprawnie <br />");
document.write("skrypt działa poprawnie <br />");
console.log("Tekst");*/

var imie = ("ada");
document.write("witaj, " + imie + "!"); 
//document.write(imie);
//console.log(imie);
//document.write('test')
// operator zmiennej
// var - słowo kluczowe
// imie - nazwa zmiennej
// konkatenacja +
var suma = 10 - '20' + 30;
//console.log(suma);

//alert('test');
var a = 9, b = 'maks', c = true;
var d;
var suma = a + b;
var roznica = a - b;
var mnozenie = a * b;
var dzielenie = a / b ;
var modulo = a % b;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
var dzialanie = (7 % 2) / 3;
console.log(dzialanie);
var dziesietna = 10;
console.log(dziesietna);
var oktalna = 010; //8
console.log(oktalna);
var hex = 0x20;
console.log(hex);
console.trace()
//camelCase
var zmienna = 2.5;
console.log(zmienna);
var j1 = '1';
var j2 = '1.5';
j2 = parseFloat(j2);
console.log(typeof(j1));
j1 = parseInt(j1);
var wynik = j1 + 2;
console.log(wynik);
var wynik2 = j1 + j2;
console.log(wynik2);
var wiek = 'maks';
wiek = parseInt(wiek);
console.log(wiek);
var x = 'zsk';
//document.getElementById('naglowek').innerHTML = x;
var elNaglowek = document.getElementById('naglowek');
elNaglowek.innerHTML = x;
elNaglowek.style.color = 'red';
var imie = prompt('Podaj swoje imię');
console.log(typeof(imie));
var a = prompt('Podaj a');
var b = prompt('Podaj b');
a = parseInt(a);
b = parseInt(b);
var srednia = (a + b) /2;
console.log(wynik);
var elNaglowek2 = document.getElementById('naglowek2');
elNaglowek2.innerHTML = 'Średnia' + srednia;
