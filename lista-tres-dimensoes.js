const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(
  `O funcionário ${funcionarios[0][2]} possui ${funcionarios[1][2]} anos e seu status de faculdade é: ${funcionarios[2][2]}.`
);
