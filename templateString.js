const nome = "Paloma";
const idade = 2022 - 2000;
const cidadeNascimento = "Franca";
const apresentacao = "Meu nome é ";

console.log(
  apresentacao +
    nome +
    ", eu tenho " +
    idade +
    " anos e minha cidade de nascimento é " +
    cidadeNascimento +
    "."
);

//template string
console.log(
  `${apresentacao} ${nome}, eu tenho ${idade} anos e minha cidade de nascimento é ${cidadeNascimento}.`
);
