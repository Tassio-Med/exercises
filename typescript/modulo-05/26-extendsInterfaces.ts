exports = {};

// ==> Exemplo 01 - Interface com extends

interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Billy',
  idade: 4,
  porte: 'Pequeno',
  raca: 'Vira-lata',
}

console.log(cachorro);

// ==> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Billy',
  idade: 4,
};

console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  nacionalidade: string;
  salario: number;
}

interface Profissional extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  cargo: string;
  salario: string;
}

const profissional: Profissional = {
  id: 'thfm-1998',
  nome: 'Tássio Medeiros',
  nacionalidade: 'brasileiro',
  cargo: 'Desenvolvedor Front-end',
  salario: '20k',
}

console.log(profissional);