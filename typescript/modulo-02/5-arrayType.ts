// Uso de colchetes

let frutas: string[] = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];
console.log(frutas[2]);

// Array Object

let frutas1: Array<string> = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];
console.log(frutas1[0]);

// Adicionando mais strings com método 'push'

let frutas2: Array<string> = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];
console.log(frutas2);
frutas2.push('laranja');
console.log(frutas2);


// Identificar tamanho do array - método 'length'

let frutas3: Array<string> = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];
console.log(frutas3.length);

// Exemplo de array com spread operator

let frutas4: Array<string> = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];
frutas4 = [...frutas4, 'pêssego', 'caqui', 'caju'];
console.log(frutas4);


// Exemplo de array com laço de interação

let frutas5: Array<string> = ['maçã', 'banana', 'uva', 'melancia', 'goiaba'];

function frutasMassa(frutinhas:string[]) {
  for (let i = 0; i < frutinhas.length; i++) {
    console.log(frutas5[i]);
  }
}

frutasMassa(frutas5);