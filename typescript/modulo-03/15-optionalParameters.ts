/* eslint-disable prefer-const */
export {};

// Exemplo 01 - Optional isParameter

function informarDadosPessoa(idPessoa: number, nome: string, email?: string){
  console.log('ID do Funcionário: ', idPessoa, 'Nome:', nome);

  if(email != undefined) console.log('E-mail: ', email);
}

informarDadosPessoa(775544, 'Tássio Medeiros');
informarDadosPessoa(994411, 'Amanda Portela', 'doorshe@example.com');

// Exemplo 02 

function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString();
  
  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conctado(a)');
}

mensagemLog('Atualizar página');
mensagemLog('Usuário(a) logado(a) com sucesso', 778811);


// Exemplo 03

type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa: Pessoa;

pessoa = {
  idFuncionario: 43434,
  nome: 'Tássio Med',
};

console.log(pessoa);

