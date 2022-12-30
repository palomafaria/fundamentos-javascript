// Tipo de dados
// Booleanos

//conversão implicita
const numero = 456;
const numeroString = "456";
const numeroString2 = "456a";

console.log(numero === numeroString); //false
console.log(numero == numeroString); //true
console.log(numero + numeroString); //concatenação ao invés de soma

//conversão explicita
//Number()
console.log(numero + Number(numeroString));
console.log(numero + Number(numeroString2)); //NaN
//String()
console.log(String(numero) + numeroString);
