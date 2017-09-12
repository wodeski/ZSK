var tekst = "Zespół Szkół Komunikacji";
console.log(tekst.length);
var pierwszyZnak = tekst.charAt(0);
console.log(pierwszyZnak);
var ostatniZnak = tekst.charAt(tekst.length - 1);
console.log(ostatniZnak);
var kod  = tekst.charCodeAt(0);
console.log(kod);
//zamiana na duze litery 
var duza = tekst.toUpperCase();
console.log(duza);
var male = tekst.toLowerCase();
console.log(male);

var poprawnyTekst = prompt('Podja imie' , 'np. Kowlaski');
poprawnyTekst = poprawnyTekst.charAt(0).toUpperCase() + poprawnyTekst.slice(1).toLowerCase();
console.log(poprawnyTekst) 

poprawnyTekst = poprawnyTekst.substr(1, poprawnyTekst.length - 2);
console.log(poprawnyTekst);
