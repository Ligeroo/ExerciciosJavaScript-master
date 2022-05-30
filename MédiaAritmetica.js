function media(){
    let numerototal= parseFloat(0);
    let i =parseInt(1)
    let n =parseFloat();

    while (i){
    let n = parseFloat(prompt("Digite um Numero"));
    
       if (n % 2 == 0){
        numerototal = numerototal + n;
        i = i + 1
       }

       if(n == 0){
        alert("Saindo Da Sessão")   
        break;
           
       }
    
    }

    alert("o Valor Total da soma foi = " + numerototal / (i - 1))

}