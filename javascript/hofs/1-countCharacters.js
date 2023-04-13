//1-Crie uma função que mostre a quantidade de personagens

const database = require('./database');

function countCharacters(){
  return database.characters.length;
}

console.log(countCharacters());