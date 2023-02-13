// EXERCÍCIO 2 - Página 41 do livro Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let dinner = 80;
let garcom = 10;
let total = 0;

total = dinner + ((garcom / 100) * 80);
console.log(`Valor do jantar: R$${dinner},00`)
console.log(`A taxa do garçom é: R$${garcom},00`)
console.log(`Valor total: R$${total},00`)
