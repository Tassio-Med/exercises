export {};

// Exemplo 01 - Classes 

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Tássio', 'Medeiros');
console.log(pessoa.nomeCompleto());


// Exemplo 02 - Classes (sem constructor)

class Estudante {
  codigoEstudante: number;
  nomeEstudante: string;
}
// Criar um objeto ou instância
const estudante = new Estudante();
// Inicializar o objeto:
estudante.codigoEstudante = 3451;
estudante.nomeEstudante = 'Maria Cecília';
// Acessar os campos:
console.log('Código do estudante: ' + estudante.codigoEstudante);
console.log('Nome do estudante: ' + estudante.nomeEstudante);


// Exemplo 03 - Classes (com constructor)

class Estudante_1 {
  codigoEstudante: number;
  nomeEstudante: string;

// Definir construtor
  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

// Criar o método
  listarEstudante(): void {
    console.log('Código do Estudante: ' + this.codigoEstudante);
    console.log('Nome do Estudante: ' + this.nomeEstudante);
  }  
}

// Acessar os campos:
const estudante_1 = new Estudante_1(9834, 'Amanda Portela');
console.log('Lendo o atributo de código do estudante: ' + estudante_1.codigoEstudante);
console.log('Lendo o atributo de nome do estudante: ' + estudante_1.nomeEstudante);