export { };

// ==> Exemplo 01 - Type Casting: 'as'

const nome: unknown = 'Tássio Medeiros';
console.log((nome as string).toUpperCase());

// ==> Exemplo 02 - Type Casting: '<>' 

const veiculo = 'Onix';

const tamanhoString: number = (<string>veiculo).length;
console.log('O tamanho da string é: ', tamanhoString);