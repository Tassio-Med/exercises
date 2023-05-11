// Numeric Enums(Enums Numérico)

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

console.log('');
console.log('///////////////////////////////////////////////');
console.log('');

// String Enums

enum Dia {
  Segunda = 'SEG',
  Terça = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}

console.log(Dia.Domingo);

console.log('');
console.log('///////////////////////////////////////////////');
console.log('');

// Como podemos acessar um valor de um Enum com uma chave: (usando o const)

const enum Day {
  Segunda = 'SEG',
  Terça = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}

function semana(c: Day) {
  return 'Dias da semana legais!';
}

console.log(semana(Day.Sabado));
console.log(semana(Day.Sexta));

console.log('');
console.log('///////////////////////////////////////////////');
console.log('');

// Quando usar enum?!

enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parebéns! Sua tarefa foi concluída com sucesso!',
};

if(concluidaTarefa.status == Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa concluída!');
}