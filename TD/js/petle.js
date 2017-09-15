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










