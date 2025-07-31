/*
Null Safety
- Ajuda a eviatr erros comuns causados por variáveis "null"
- Obriga você a declarar explicitamente quando uma variável pode ser null, por segurança.
*/


//Variáveis nuláveis
int? idade = null; // ✅ Pode ser nulo
int idade = null;  // ❌ ERRO! Não pode ser nulo

//Variáveis Não-Nuláveis
String nome = "João"; // ✅ Válido
nome = null;          // ❌ ERRO! Não pode ser nulo

/* 
?. (Operador de Acesso Condicional)
 - Só executa o método/propriedade se o objeto não for null.

*/
int? numero = null;
print(numero?.toString()); // Se "numero" for null, não chama .toString()


/*
?? (Operador de Coalescência Nula)
 - Retorna um valor padrão se a variável for null.
*/

int? numero = null;
print(numero ?? 0); // Se "numero" for null, usa 0

/*
?? (Operador de Coalescência Nula)
 -  Força o compilador a tratar um valor como não-nulo (cuidado! Pode causar erros se for null).
*/

int? numero = 42;
print(numero! + 10); // Confia que "numero" não é null



void main() {
  int? numero = null;
  
  // Se numero for null, não chama .toString() e retorna null
  print(numero?.toString()); // null (sem erro)
  
  // Se numero não for null, converte para String
  numero = 42;
  print(numero?.toString()); // "42"
}