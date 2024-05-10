const variavelNova = 'Valor deste variável é 20';

console.log(variavelNova);

let stringTemplate = `String Template usada para ${1 + 1}`;
console.log(stringTemplate)

//String em resumo são textos que podem ser utilizados no JavaScript
        //E para ultiliza-lo podemos usar com aspas simples, duplas, ou String template.
        let aspasSimples = 'Estamos criando uma String com aspas simples';

        //Exemplo de String com aspas duplas.
        let aspasDuplas = "String com aspas dulpas";


        let templateLiteral = `String interpolation allows embedding expressions like ${1 + 1}`;
        // Essa é ema Sting Templete, basicamente usamos em casos que há necessidade de realizar uma ação aritimédica (Como no exemplo) ou quando guardamos variáveis dento dela. O símbolo ${} em JavaScript é usado para interpolar variáveis, ou seja para retornar o valor dela.

        //Veja abaixo exemplo de como e quando usar as crases
        let nome = 'Stefanny';

        //Número usados sem aspas (simples ou duplas)
        let idade = 16;

        let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos`;

        //Ele que vai imprimir nossa mensagem na tela
        console.log(mensagem);
        
        let primeiroNome = 'John';
        let ultimoNome = 'Doe';
        let nomeCompleto = primeiroNome + ' ' + ultimoNome; //Usando o +
        let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //Using template literal

        console.log(nomeCompletoTemplate);

