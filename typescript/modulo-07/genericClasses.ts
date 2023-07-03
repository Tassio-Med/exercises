export { };

// ==> Exemplo 01: Generic Classes

class Person<T> {
  private item: T;

  constructor(item: T){
    this.item = item;
  }

  getItem(){
    return this.item;
  }

  setItem(item: T){
    return this.item = item;
  }
}

const personName = new Person<string>('Tássio Medeiros');
const personAge = new Person<number>(25);

console.log(personName.getItem);
console.log(personAge.getItem);


// ==> Exemplo 02: Generic Classes

class Estudante<T, E>{
  private id: T;
  private nome: E;

  setValor(id: T, nome: E): void {
    this.id = id;
    this.nome = nome;
  }

  retornarValor():void {
    console.log(`Identificação do estudante: ${this.id}, Nome do estudante: ${this.nome}`);
  }
}

const estudante = new Estudante<number, string>();

estudante.setValor(2023, 'Tássio Medeiros');
estudante.retornarValor();

const estudante02 = new Estudante<string, string>();

estudante02.setValor("2025", 'Amanda Portela');
estudante02.retornarValor();

