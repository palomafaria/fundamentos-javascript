const nomes = ["Evaldo", "Mari", "Camis"];
//1º
nomes.forEach(function (nome){
    console.log(nome);
})

//2º
nomes.forEach((nome) =>{
    console.log(nome);
})

//3º
function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);