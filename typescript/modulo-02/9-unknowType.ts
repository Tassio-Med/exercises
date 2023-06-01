// Tipo Unknow

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

console.log(valorVariavel);

// Erro ao tentar atribuir um valor do tipo 'unknow' a outros tipos

// let valor: unknown;

// let valor1: boolean = valor;
// let valor2: any = valor;
// let valor3: any[] = valor;
// let valor: string = valor;



// Diferença entre: 'any' vs 'unknow'

let funcaoAny: any;
let funcaoUnknow: unknown;

console.log(funcaoAny.toFixed());

if(typeof funcaoUnknow == 'number'){
  console.log(funcaoUnknow.toFixed());
}
