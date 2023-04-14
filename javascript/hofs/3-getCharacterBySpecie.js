//3 - Monstre o primeiro presonagem de acordo com o id da espécie

let data = require('./database');
 
function getCharacterBySpecie(id){
  return data.characters.find((specie) => specie.speciesId === id)
}

console.log(getCharacterBySpecie(4));