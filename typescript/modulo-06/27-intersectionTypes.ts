export = {};

// ==> Exemplo - Intersection Types;

interface Pessoa {
  nome: string;
  idade: number;
  cpf: number;
}

interface Vagas {
  local: string;
  funcao: string;
  salario: string;
}

interface Empresas {
  cnpj: number;
  localizacao: string;
}

type Candidatos = Pessoa & Vagas & Empresas;

const candidatos: Candidatos = {
  nome: "Tássio Medeiros",
  idade: 25,
  cpf: 293792740,
  local: "Remoto",
  funcao: "Desenvolvedor Front-end",
  salario: "15k",
  cnpj: 9384089,
  localizacao: "Rio de Janeiro",
}

console.log(candidatos);