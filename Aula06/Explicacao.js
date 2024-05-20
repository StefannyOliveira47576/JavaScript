const Cartao1 = {
    nome : 'Stefanny Oliveira',
    saldo : 90000,
};

const Cartao2 = Cartao1;

console.log(Cartao1);
console.log(Cartao2);

//Crie Três tipos diferentes de Variáveis Tipo Referênciais, onde obtenha além do nome e saldo, informações como banco agencia e conta e seja alimentado por uma nova variáveis.

const Cartao10 = {
    nome: 'Stefanny Oliveira',
    saldo: 2000,
    banco: 'Bradesco',
    agencia: 99200,
    conta: 20000,
};

const Cartao11 = Cartao10;

console.log(Cartao10);
console.log(Cartao11);


const CartaoDebito = {
    nome: 'Stefanny Oliveira',
    saldo: 120,
    banco: 'Banco Brasil',
    agencia: 680,
    conta: 940,
};

const CartaoCredito = CartaoDebito;

console.log(CartaoDebito);
console.log(CartaoCredito);

const SaldoNegativo = {
    nome: 'Stefanny Oliveira',
    saldo: 138,
    banco: 'NuBank',
    agencia: 980,
    conta: 93330,
}

const SaldoPositivo = SaldoNegativo;

console.log(SaldoPositivo);
console.log(SaldoNegativo);
