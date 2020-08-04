// Inicia o arquivo de configuração do TypeScript:
// tsc --init

function somar(numero1: number, numero2: number) {
  return numero1 + numero2;
}

const meuNumero1 = 10;
const meuNumero2 = 5;

const resultado = somar(meuNumero1, meuNumero2);

console.log(resultado); // 15

// Compila o TypeScript em JavaScript:
// tsc