export { };

// ==> Exemplo 01: Generic Interfaces

interface Person<T, A> {
  name:T;
  age: A;
}

const dataPerson: Person<string, number> = {
  name: 'Tássio Medeiros',
  age: 25,
};

console.log(dataPerson);


