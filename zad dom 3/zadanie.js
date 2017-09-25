var elZes = document.getElementById('zespol')
var elPrzycisk  = document.getElementById("przycisk")
var elBox = document.getElementById("box")


przycisk.onclick = function(){
if (elZes.value == "Metallica"){
        
    window.location.assign("https://www.metallica.com/")}

else if
    (elZes.value == "AC/DC"){
        
    window.location.assign("http://www.acdc.com/")}
if (elZes.value != "Metallica" && elZes.value != "AC/DC"){
    elBox.innerHTML = "Nie słuchasz tego co ja!"
}
}
