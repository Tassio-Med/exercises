export {};

// Exemplo 01 - Functions (Named function)

function somarNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

// Exemplo 02 - Função Anônima (Function Expression)

const saudar = function (mensagem: string) {
  return mensagem;
};

console.log(saudar('Olá mundo!'));

// Exemplo 03 - (Arrow Function Expression)

const saudar02 = (mensagem: string) => mensagem;
console.log(saudar02('IIHUUU!'));


// Exemplo 01 - (Function constructor)

const saudar03 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar03('Pessoal!'));

