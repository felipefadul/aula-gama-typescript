class Data {
  // public dia: number;
  // mes: number;
  // private ano: number;

  constructor(public dia: number, public mes: number, private ano: number = 1970) {
    //this.dia = dia;
    //this.mes = mes;
    //this.ano = ano;
  }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);

const data2 = new Data(1, 1);

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta;
    
    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima)
      this.velocidadeAtual = novaVelocidade;
    else
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;

    console.log('Velocidade atual', this.velocidadeAtual);
  }

  acelerar(aceleracao: number) {
    this.alterarVelocidade(aceleracao);
  }

  frear(frenagem: number) {
    this.alterarVelocidade(-frenagem);
  }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar(5);
carro.frear(2);

// Herança
class Camaro extends Carro {
  private turbo = false;

  constructor() {
    super('Chevrolet', 'Camaro', 350);
  }

  ligarTurbo() {
    this.turbo = true;
  }
}

const camaro = new Camaro();
camaro.acelerar(30);
camaro.frear(10);
camaro.ligarTurbo();