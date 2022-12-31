function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(2, 2));

//Ordem dos parametros
function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(22, "Paloma"));

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2;
}

console.log(multiplica(soma(4, 5)));
