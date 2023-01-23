const clientes = require("./clientes.json");

function Ordenar(lista, propriedade){
    const resultado = list.sort((a, b) =>{
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
           return 1; 
        }
        return 0;
    });

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome");

console.log(ordenadoNome);