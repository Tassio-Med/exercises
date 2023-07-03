// ==> Exemplo 01 - Generics Constraints

export { };

interface Pessoa {
  nome: string;
  idade: number;
}

function obterMaisVelhos<T extends Pessoa>(pessoas: T[], idade: number): T[]{
  return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
  { nome: 'Tássio Medeiros', idade: 25 },
  { nome:'Amanda Portela', idade: 27 },
  { nome: 'Wallyson Lopes', idade: 29},
  { nome: 'Francisco Medeiros', idade: 21},
];

const pessoasComIdadeMaiorQue25 = obterMaisVelhos(pessoas, 25);
console.log(pessoasComIdadeMaiorQue25);

// ==> Exemplo 02 - Generics Constraints

function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
  return {
    ...objeto1,
    ...objeto2,
  }
}

const pessoa = juntarObjetos(
  { nome: 'Glaucia', },
  { idade: 36, }
);

console.log(pessoa);

const pessoa2 = juntarObjetos(
  { nome: 'Glaucia' },
  36
);

console.log(pessoa2);

function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
  return {
    ...objeto1,
    ...objeto2,
  }
}

const pessoa3 = juntarObjetos2(
  { nome: 'Glaucia' },
  { idade: 36 }
);

// ==> Exemplo 03 - Type parameter in generic constraints

/*function prop<T, K>(objeto: T, chave: K) {
  return objeto[chave];
}*/

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
  return objeto[chave];
}

const pessoa4 = prop2(
  { nome: 'Glaucia' }, 'nome'
);

console.log(pessoa4);

/*const pessoa5 = prop2(
  { nome: 'Glaucia' }, 'idade'
);

console.log(pessoa5);*/