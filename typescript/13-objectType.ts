/* eslint-disable prettier/prettier */
export {};

// Exemplo 01 --> Exemplo básico do uso do Type Object

const pessoa = {
  nome: 'Tássio',
  sobrenome: 'Medeiros',
  idade: 25,
  funcao: 'DevOps'
};

console.log(pessoa);

// Exemplo 02 --> Object como parâmetros de função (eles podem ser anônimos)

function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vinda ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Glaucia Lemos' }));

// Exemplo 03 --> Object nomeados

interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui será ' +
    pessoa.funcao +
    '.'
  )
}

console.log(onboarding02({ nome: 'Tássio Medeiros', funcao: 'DevOps' }));

// Exemplo 04 --> Object como type alias 

type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
}

function onboarding03(pessoa: Pessoa03) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  )
}

console.log(onboarding03({ nome: 'Tássio Medeiros', funcao: 'DevOps', linguagem: 'Typescript' }));

// Exemplo 05 --> Usando optional no object

interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string; /* É uma propriedade opcional, por isso tem a interrogação */
}

function onboarding04(pessoa: Pessoa04) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.'
  )
}

console.log(onboarding04({ nome: 'Tássio Medeiros', funcao: 'DevOps', linguagem: 'Typescript' }));

// Exemplo 06 --> Propriedades 'readonly' (se deseja proibir que os devs não modifquem um determinado objeto, use o readonly)

interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string; /* Por conta do 'readonly' não vai ser possível realizar alterações nessa propriedade */
}

function onboarding05(pessoa: Pessoa05) {
  return (
    'Seja bem-vindo(a) ' +
    pessoa.nome +
    '!' +
    ' Sua função aqui será ' +
    pessoa.funcao +
    '.' +
    ' Você trabalhará com a linguagem ' +
    pessoa.linguagem +
    '.' +
    ' Seu e-mail será ' +
    pessoa.email +
    '.'
  )
}

console.log(onboarding05(
  { 
    nome: 'Tássio Medeiros', 
    funcao: 'DevOps', 
    linguagem: 'Typescript',
    email: 'tassiodevops@email.com'
  }));

// Exemplo 07 --> Tipos de extensões (heranças)

interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'Amanda',
  sobrenome: 'Portela',
  idade: 24
}

console.log(filha);

// Exemplo 08 --> Tipos de interações

interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animais = Cachorro & Gato;

// Exemplo 09 --> Generic Objects

type Usuario = {
  nome: string;
  email: string;
}

type Admin = {
  nome: string;
  email: string;
  admin: true;
}

const usuario: Usuario = {
  nome: 'Tássio H. F. Medeiros',
  email: 'tassiodevops@email',
}

const admin: Admin = {
  nome: 'Tássio H. F. Medeiros',
  email: 'tassiodevops@email',
  admin: true
}

function acessarSistema<T>(usuario: T): T { /*  É do tipo genérico, aceitas funções de Usuario e Admin */
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));