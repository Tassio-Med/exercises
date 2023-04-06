// EXERCÍCIO 3 - Página 45 do livro Lógica de Programação e Algoritmos com JavaScript de Edécio Iepsen

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

let preco = 80;
let parcelado = preco/3;
let aVista = 10;  
let total = 0;

total = (preco - (aVista/100) * preco);

console.log(`O preço do produto é R$${preco},00`);
console.log(`O preço do produto com 10% de desconto é R$${total},00`);
console.log(`O preço produto dividido em 3x é R$${parcelado},00`);