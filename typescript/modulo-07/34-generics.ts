export { };

// ==> Exemplo 01 - Generics

function retornarElementos<T>(items: T[]): T {
  const itemRandomico = Math.floor(Math.random() * items.length);
  return items[itemRandomico];
}

const numeros = [1, 2, 3, 4, 5];
const numerosRandomicos = retornarElementos<number>(numeros);
console.log(numerosRandomicos)

const frutas = ['banana', 'maçã', 'uva', 'pêra'];
const frutasRandomicas = retornarElementos<string>(frutas);
console.log(frutasRandomicas);



// ==> Exemplo 02 - Generics


function retornarValores<T>(array: T[]): void {
  array.forEach((elemento) => {
    console.log(elemento);
  });
};

const numeross: number[] = [1, 2, 3, 4, 5];

const frutass: string[] = ['banana', 'maçã', 'uva', 'pêra'];

retornarValores<number>(numeross);
retornarValores<string>(frutass);