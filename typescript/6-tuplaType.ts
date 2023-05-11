// Uso simples de Tuplas

let pessoa: [string, string, number];
pessoa = ['Tássio Medeiros', 'Desenvolvedor Front-end', 25];
console.log(pessoa);

// Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Tássio Medeiros', 'Desenvolvedor Front-end', 25];
console.log(pessoa1[0]);

// Outra forma de usar Tuplas em Typescript(com labels)

let pessoa2: [nome: string, profissao: string, idade: number] = ['Tássio Medeiros', 'Desenvolvedor Front-end', 25];
console.log(pessoa2);

// Usando Tuplas com Spread Operator

let pessoa3: [string, ...string[]] = ['Tássio Medeiros', 'Desenvolvedor Front-end', 'Tekwondista'];
console.log(...pessoa3);

// Lista Heterogênea de Tupla:

let pessoa4: [number, boolean, ...string[]] = [10, false, ...pessoa3];
console.log(pessoa4);


// Uso de função com Tuplas

function listarPessoas(nomes:string[], idades: number[]){
  return [...nomes, idades];
}

let resultado = listarPessoas(['Tássio', 'Regina'], [25, 57]);
console.log(resultado);


// Labeled Tuples com Spread Operator numa função

type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeMeio: string, sobreNome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}

console.log(criarPessoa('Tássio', 'Medeiros'));
console.log(criarPessoa('Tássio','Henrique', 'Medeiros'));

