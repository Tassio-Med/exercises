export {};

// Exemplo 01 - Modificador public

class Estudante {
  codigoEstudante: number;
  nomeEStudante: string;
}

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEStudante = "Tássio Medeiros";

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEStudante);

// Exemplo 02 - Modificador private

class Estudante_2 {
  codigoEstudante: number;
  nomeEstudante: string;
  private idade: number;

  constructor(codigoEstudante: number, nomeEstudante: string, idade: number){
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
    this.idade = idade;
  }

  retornarDadosEstudante(){
    return `Código do Aluno: ${this.codigoEstudante}.
      Nome do Estudante: ${this.nomeEstudante}.
      Idade do Estudante: ${this.idade}`;
  }
}

const estudante_2 = new Estudante_2(9890, 'Tássio Medeiros', 25);
console.log(estudante_2.retornarDadosEstudante());  

// Exemplo 03 - Modificador protected

class Estudante_3 {
  codigoEstudante: number;
  protected nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string){
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }
}

class Pessoa extends Estudante_3 {
  private curso: string;

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string){
    super(codigoEstudante, nomeEstudante);
    this.curso = curso;
  }

  retornarDadosAlunos (){
    return `Código do Aluno: ${this.codigoEstudante}.
    Nome do Estudante: ${this.nomeEstudante}.
    Matéria do Estudante: ${this.curso}`
  }
}

const estudante_3 = new Pessoa(112233, 'Tássio Medeiros', 'Matemática');
console.log(estudante_3.retornarDadosAlunos)

// Exemplo 04 - Modificador readonly