function ConverterTemperatura(){
    if(document.getElementById("Centigrados").value == ""){
        alert ("Preenchimento Obrigatório!");
        document.getElementById("Centigrados").focus();
    }
    let c = document.getElementById("Centigrados").value;
    let f = (9 * c + 160) / 5;  
    document.getElementById("Fahrenheit").value = f
if (f > 50){
    document.getElementById("Fahrenheit").style.backgroundColor = "Yellow"
}
else{ 
    document.getElementById("Fahrenheit").style.backgroundColor = "Blue"
}

}