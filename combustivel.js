function Converter(){
    if(document.getElementById("tempog").value == ""){
        alert ("Preenchimento Obrigatório!");
        document.getElementById("tempog").focus();
    }
    if(document.getElementById("velocidade").value == ""){
        alert ("Preenchimento Obrigatório!");
        document.getElementById("velocidade").focus();
    }
    let tempo = document.getElementById("tempog").value;
    let velocidade = document.getElementById("velocidade").value
    let distancia = (tempo * velocidade);
    let litros_usados = (distancia / 12); 

    document.getElementById("distancia").value = distancia
    document.getElementById("lusados").value = litros_usados.toFixed(2)
}