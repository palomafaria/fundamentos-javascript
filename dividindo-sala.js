const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

//.slice() não pega o ultimo indice mas sim o indice anterior, ou seja [0] - [9]
//const sala1 = alunos.slice(0,10);

//Tornando dinamico
const sala1 = alunos.slice(0, alunos.length / 2);
//passando um parametro apenas eu dou a entender que quero que o valor seja selecionado até o final do array
//const sala2 = alunos.slice(10);

//Tornando dinamico
const sala2 = alunos.slice(alunos.length / 2);
console.log(alunos);
console.log(sala1);
console.log(sala2);
