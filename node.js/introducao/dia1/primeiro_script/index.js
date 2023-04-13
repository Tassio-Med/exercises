const readlineSync = require('readline-sync'); //importação do pacote readline-sync

//funções 'question' e 'questionIt' disponibilizadas pelo 'readline-sync'; 
const name = readlineSync.question('Qual seu nome? '); 
const age = readlineSync.questionInt('Qual sua idade? ');

console.log('Hello, world!');
console.log(`Olá, ${name}! Você tem ${age} de idade!`);