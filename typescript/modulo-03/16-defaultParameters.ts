export {};

// Exemplo 01 - Default Parameters

function descontoCompra(preco: number, desconto = 0.08){
  return preco * (1 - desconto);
}
console.log(descontoCompra(100));

// Exemplo 02

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!'){
  return saudar + ' ' + mensagem + '!';
}
console.log(exibirMensagem('Bora estudar'));


