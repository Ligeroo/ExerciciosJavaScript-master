function ParOuImpar() {
  let numero = parseInt(prompt("Digite um número:"));

  let resto = 0;

  resto = numero % 2;
  
  if (resto == 0) {
    alert("O número digitado (" + numero + ") é par");
  } else {
    alert("O número digitado (" + numero + ") é ímpar");
  }
}
