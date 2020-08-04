// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Felipe Fadul';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [10, 20, 30];

// Tuple
let jogadores: [string, string, string, number, boolean];
jogadores = ['Felipe', 'Fulano', 'Ciclano', 21, true];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
};

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'Felipe', false];
const retornoDaAPI2: any = {
  // ...
};

// Void
function printarNaTela(mensagem: string): void {
  console.log(mensagem);
}

function printarNaTela2(mensagem: string) {
  console.log(mensagem);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
  // ...
}

criar({
  propridade: 1
})

// criar('Felipe') // Dá erro

// Never
function loopInfinito(): never {
  while (true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

// TypeScript infere que a função falha é do tipo never.
function falha() {
  return erro('Algo falhou!');
}

// Union Types (mais de um tipo)
let nota: string | number = 5;
nota = '9';

function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota(8);
exibirNota('10');

// Alias
type Pessoa = Array<string>;
const pessoas: Pessoa = ['Felipe', 'Fulano', 'Ciclano'];

function tratarPessoas(pessoas: Pessoa) {
  // ...
}

type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{  
  nome: 'Felipe',
  sobrenome: 'Fadul',
  dataNascimento: new Date()
}, {
  nome: 'Fulano',
  sobrenome: 'Ciclano',
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for(let funcionario of funcionarios) {
    console.log('Nome do funcionário:', funcionario.nome);
  }
}

tratarFuncionarios(funcionarios);

// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; // opcional
}

const contato: Contato = {
  nome: 'Felipe',
  telefone1: '11 1111-1111'
}

// Type Assertion
const minhaIdade: any = 23;
// A partir de agora, minhaIdade será do tipo number
(minhaIdade as number).toString();
(<number>minhaIdade).toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
// or
const input = <HTMLInputElement>document.getElementById("numero1");

console.log(input.value);