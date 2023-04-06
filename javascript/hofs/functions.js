// FUNÇÃO NOMINADA

function exemplo(a, b){
  return a + b;
}

console.log(exemplo(25, 10));

/////////////////////////////////////////////////

// FUNÇÃO ANÔNIMA

const funcAnonima = function(a, b){
  return a + b;
}

console.log(funcAnonima(10, 5));

////////////////////////////////////////////////

// ARROW FUNCTION

const arrowFunction = (a, b) => {
  return a + b;
}

console.log(arrowFunction(45, 17));

//Nas arrow functions, quando há apenas uma linha, eu posso diminuir o código da seguinte forma:

const arrowFunctionCurta = (a, b) => a + b;

console.log(arrowFunctionCurta(45, 17));