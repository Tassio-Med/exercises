// Exemplo 01: Never - Throw Exception

function error(message: string): never{
  throw new Error(message);
}
console.log(error('Erro da menssagem - 01'));

// Exemplo 02: Never inferido automaticamente

function rejectMessage() {
  return error('Erro de Menssagem - 02');
}
console.log(rejectMessage());


// Exemplo 03: Never - Função que conteém loop infinito retorna o tipo 'never'

const loopInfinito = function loop(){
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
};

// console.log(loopInfinito());


// Exemplo 04: DIferença entre os tipos 'never' x 'void'

const algumaCoisaVoid: void = null;
const algumaCoisaNever: never = null;
//O never não pode ter nenhum valor atribuído, já o void sim, por isso mão há erro de linter.

console.log(algumaCoisaVoid);
console.log(algumaCoisaNever);
