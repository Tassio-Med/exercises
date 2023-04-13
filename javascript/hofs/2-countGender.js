// 2 - Contar a quantidade de personagens através do sexo


const database = require('./database');

function countGender(gender) {
  if(gender === 'M' || gender ==='F'){
    return database.characters.filter((character) => character.gender === gender).length;
  } else {
    return 'Valor inválido';
  }
}

console.log(countGender('M'));