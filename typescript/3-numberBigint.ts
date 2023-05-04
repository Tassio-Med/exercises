// Exemplos do tipo number:

let num1: number = 23.0;
let num2: number = 0x7CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number - Ponto Flutuante:', num1);
console.log(typeof(num1));
console.log('Number - Hexadecimal:', num2);
console.log(typeof(num2));
console.log('Number - Octal:', num3);
console.log(typeof(num3));
console.log('Number - Binário:', num4);
console.log(typeof(num4));

// Exemplos do tipo bigint:


let big1: bigint = 9000083748221n;
let big2: bigint = 0b1000000000000000000000000000000000000000000000000000000000011n;
let big3: bigint = 0x1000000000000000000000003n;
let big4: bigint = 0o40000000000000000000000000000n;

console.log('Bigint:', big1);
console.log(typeof(big1));
console.log('Bigint - Binário:', big2);
console.log(typeof(big2));
console.log('Bigint - Hexadecimal:', big3);
console.log(typeof(big3));
console.log('Bigint - Octal:', big4);
console.log(typeof(big4));