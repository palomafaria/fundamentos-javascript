const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555555550","11444444400"],
};

cliente.enderecos = [{
    rua: "R. Joseph Climper",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro! é necessário ter um endereço cadastrado.")
}