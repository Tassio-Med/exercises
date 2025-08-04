//MÉTODOS(Funções)

// Função com retorno
int soma(int a, int b) {
  return a + b;
}

// Arrow function (curta)
int multiplicacao(int a, int b) => a * b;

void main() {
  print(soma(2, 3)); // 5
}


// CLASSES

class Pessoa {
  String nome;
  int idade;

  // Construtor
  Pessoa(this.nome, this.idade);

  // Método
  void apresentar() {
    print("Olá, sou $nome e tenho $idade anos.");
  }
}

void main() {
  var pessoa = Pessoa("Maria", 30);
  pessoa.apresentar();
}