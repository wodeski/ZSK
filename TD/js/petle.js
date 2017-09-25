//petla for
/*for (var i = 0; i < 10; i++){
    document.write(i);

    if(i == 6){;
    break;
}
}*/

// losuj 10 liczb z przedziału <10;100>
/*for (var i = 0; i <= 10; i++){
    document.write(Math.floor(Math.random() * 91 + 10 ) + "<br>");

};*/

/*    for (var i = 0; i <= 10; i++){
    document.write(i + "<br>");

        if(i == 1){
            document.write(i +  1 + "raz")
        }
            else{document.write(i +  1 + "razy")
                }
            */



/*
uzytkownik podaje wartosc początkowa i koncowa w petli po kazdej liczbie dodaj przecinek a tylko po ostatniej liczbbie*/
/*     var a = prompt('Podaj a');
     var b = prompt('Podaj b');

        a = parseInt(a);
        a = parseInt(b);

        if(a<b){
           alert("podaj poprawne liczby ");
            }
        else{
            for(; <=a; a++){
                document.write(a + ",");
        }
             document.write(a + ",");
         }
        */

        //pętla while


        /*var i = 0;
        while(i++ < 5){
            document.write(i + "<br>")
        }*/
//x<y
/*
var x = 0, y = 0;
while(x >= y){
 x =  Number(prompt('Podaj x'));
 y =   Number(prompt('Podaj y'));
};
document.write('Podałes poprawne wartości: <br> ' + "x:" + x + "<br> " + 'y:' + y);
*/

//do while


/*do {
    var wiek = prompt('Podaj wiek');
    if(wiek == 18);
    document.write('Masz 18 lat');


}while(wiek!=18)
       alert('Masz 18 lat');
        */
//podaj 5 liczb podzielnych przez 2 z klawiatury zapisz je do tablicy i wyświetl je w konsoli


/*
var podzielne = [];
var x;
for(i=0; i<5; i++){
    do{

        x = prompt("podaj wartosc");
        parseInt(x);
    }while(x % 2 != 0)
        podzielne[i] = x;

    }
console.log(podzielne);
*/

//użytkownik podaje z klawiatury liczbe zabezpiecz przed podaniem litery, znaku specjalnego ma byc pytany tak długo az poda liczbe
// sprawdzamy czy dana wartosc jest liczba moza równies użyc isNAN i zanegowac
/*
document.write('<input type="text"  id="liczba">');
document.write('<button id="przycisk">Wyślij</button>');
var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
    elLiczba = document.getElementById('liczba');
    var wartosc = elLiczba.value;
    if(Number(wartosc)){
    console.log(wartosc);

    }
}
*/


// program wyswietlajacy liczby od 1 - 10 w 5 rzedach po każdej liczbie ma byc przecinek a pokazdym rzedzie kropka



/*
for (var j=0; j<5; j++){
    for (var i=1; i<11; i++){

    document.write(i + ",");
}
document.write(i + ".<br>");

}

*/

/*var g ="";
for(i = 0; i < 5; i++){
    g +='*';
    document.write(g + '<br>');

}*/

/*for(var i = 1; i <6; i++){
for(var j = 1; j <i ; j++){

    document.write(i);
}
    document.write("<br>")
}*/
// podaj maksymalna ilosc gwiazdek zrob petle w której zabezpieczysz przed podaniem błednych danych


/*
var i = 0;
do {

    i = prompt("podaj ilosc");

}while(isNaN(i) || < 0)

    for (var j = 1; j <=i; j++){
for(var k = 1; k <= j ; k++){
        document.write("*");
    }
document.write("<br>")
}
*/


//użytkownik podaje login i gasło w

/*
var elLogin = document.getElementById('login');
var elPas = document.getElementById('pas');
var elPrzycisk = document.getElementById('przycisk');
var elBlok = document.getElementById('blok');

elPrzycisk.onclick = function(){
var login = elLogin.value;
var pas = elPas.value;
if (login == 'admin' && pas == 'tajne@123'){
elBlok.style.color = 'red';
    elBlok.innerHTML = "poprawne hasło";
    }

}
    */

/*var tab = ["ania", "frania", "gienia"];
for (var i = 0; i<=tab.lenght - 1; i++) {
    document.log(tab[i] + ', ');
}


function pokaz(wartosc, indeks, br){
    document.write(indeks + 1 + ' - element tablicy wynosi: ');
    document.write("<strong>" + wartosc + "</strong>");
    document.write("<br>");

}

tab.forEach(pokaz);*/


var liczba = 3.123456789;
var nowa = liczba.toFixed(2); //3.12 ilosc miejsc po przecinku
console.log(nowa);

var nowa1 = liczba.toPrecision(4);// łaczna ilosc wraz z liczbą przed przecinkiem
console.log(nowa1);
var suma =nowa + nowa1;
console.log(suma);
var iloczyn =nowa * nowa1;
console.log(iloczyn);
console.log(typeof(iloczyn));
