function tabuada(){

    let numero = parseInt(prompt("Digite um número de 1 a 9 para saber a tabuada:"));
    let i = parseInt(0);

    if (numero > 9){
        alert("Número invalido, Digite um Numero de 1 á 9")
    } 
    else
    {
        for (i=1; i<=10; i++){
            document.write(numero +" x "+ i + " = "+ numero * i + "<br>" )
        }

    }
    }


