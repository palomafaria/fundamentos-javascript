const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//forEach percorre o array inteiro e pode imprimir os valores bem como o indice de cada elemento do array
notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
    console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`)