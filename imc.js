function calcularimc() {
    let nome = prompt("Digite Seu Nome: ");
    let peso = parseFloat(prompt("Digite Seu Peso"));
    let altura = parseFloat(prompt("Digite Sua Altura"));
    let imc = 0;
    let resultado;

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        resultado = "Abaixo Do Peso";
    } 
    else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso Normal";
    } 
    else if (imc >= 25 && imc < 30) {
        resultado = "SobrePeso";
    }
    else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade";
    } 
    else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade 2";
    } 
    else {
        resultado = "Obesidade 3";
    }

    document.write(nome + " Possui o Imc " + imc + " e Está" + resultado);
    // ouu
    // alert(nome +"Possui o Imc" + imc + "e está" + resultado);


}
