export { };

// ==> Exemplo 01: Iterface Simples

interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

function exibirNome(pessoa: Pessoa){
  return `
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    Idade: ${pessoa.idade}
  `;
}

const tassio = {
  nome: 'Tássio',
  sobrenome: 'Medeiros',
  idade: 25,
}

console.log(exibirNome(tassio));

// ==> Exemplo 02: Iterface com Propriedades Opcionais

interface Livro {
  titulo: string;
  autor: string;
  paginas?: number; // ==> Propriedade Opcional
}

const livro: Livro = {
  titulo: 'Clean Code',
  autor: 'Robert C. Martin',
}

console.log(livro);

// ==> Exemplo 03: Iterface com Propriedades de Somente Leitura e Opcionais

interface Carro {
  readonly modelo: string;
  ano: number;
  valor?: number;
}

const carro: Carro = {
  modelo: 'Fusca',
  ano: 1969,
}

// carro.modelo = 'Fusca 2.0';

console.log(carro);

// ==> Exemplo 04: Iterface com implements Class

interface Animal {
  nome: string;
  idade: number;
  estaVivo: boolean;
  comer(tipoComida: string): void;
}

class Gato implements Animal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
  }

  comer(tipoComida: string): void {
    console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
  }
}

const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');

// ==> Exemplo 05: Iterface vs Type Alias

// interface Pessoa_02 {
//   nome: string;
//   sobrenome: string;
//   idade: number;
// }

// type Pessoa_03 = {
//   nome: string;
//   sobrenome: string;
//   idade: number;
// }