//Buscando o arquivo JSON
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof(dados));

//Transfornmando objeto JSON em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof(clienteEmString));

//Transformando string em objeto
const ojbetoCliente = JSON.parse(clienteEmString);
console.log(ojbetoCliente);