const apresentarArrow = (nome) => `Meu nome é ${nome}`;
console.log(apresentarArrow());

const soma = (num1, num2) => num1 + num2;
console.log(soma(1, 2));

//Arrow function com mais de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "Use somente números de 1 a 9";
  } else {
    return num1 + num2;
  }
};

console.log(somaNumerosPequenos(2, 8));
console.log(somaNumerosPequenos(20, 5));
