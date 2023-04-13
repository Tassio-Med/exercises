//FUNÇÃO NOMINADA
function exemplo (num1, num2){
  return num1 + num2;
}

console.log(exemplo(10, 20));

//========================================

//FUNÇÃO ANÔNIMA
const exemple = function (num1, num2){
  return num1 + num2;
};

console.log(exemple(5, 4));

//========================================

//ARROW FUNCTION
const arrowFunction = (num1, num2) => num1 + num2;

console.log(arrowFunction(10, 8));

//========================================

//HOFS - HIGHER ORDER FUNCTIONS
const array = ['GOKU', 'GOHAN', 'BULMA', 'MESTRE KAME'];

array.forEach((personagem) => console.log(`DBZ - ${personagem}`));