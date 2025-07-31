
// variáveis
void main() {
  var nome = "João"; // Inferência: String
  int idade = 25;    // Tipo explícito
  double altura = 1.75;
  bool isEstudante = true;

  print("Nome: $nome, Idade: $idade");
}


/*
const:
- Deve ser definida em tempo de compilação (compile-time).
- O valor já deve ser conhecido antes do programa rodar.
*/

void main() {
  const double PI = 3.1415; // Valor conhecido antes de executar
  const List<String> cores = ["vermelho", "verde", "azul"]; // Lista imutável

  print("O valor de PI é $PI");
}


/*
final:
- Pode ser definida em tempo de execução (runtime).
- Útil quando o valor só é conhecido quando o programa está rodando.
- Ex: Dados recebidos de uma API, entrada do usuário, etc.
*/

void main() {
  final String nome = "João"; // Valor fixo, mas definido em runtime
  final int idade = calcularIdade(); // Pode depender de uma função

  print("$nome tem $idade anos.");
}

int calcularIdade() {
  return 25; // Simulação de um cálculo em runtime
}
