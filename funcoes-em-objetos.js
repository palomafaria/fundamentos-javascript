const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555555550","11444444400"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo){
            console.log("Saldo Insuficiente")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);