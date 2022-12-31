const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("Pode beber");
} else {
  console.log("Não pode beber");
}

//Utilizando operador ternário
console.log(idadeCliente >= idadeMinima ? "Pode Beber" : "Não pode beber");
