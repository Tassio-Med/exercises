// Tipo Any

const a: any = 25;
const b: any = ['Tássio Medeiros'];

const result = a + b;
console.log(result);

// Quando tipo 'any' é inferido implicitamente

let frase; // Como ñão tipei, ele coloca logo como any
frase = 'Oi, pessoal! Tudo bem?'
console.log(frase)

// Quando devemos usar o tipo any?

const formulario: {[campoFormulario: string]: any} = {
  nome: 'Tássio',
  sobrenome: 'Medeiros',
  idade: 34,
};

console.log(formulario);
