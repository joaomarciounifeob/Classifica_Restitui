export class Perceptron {
  constructor(numEntradas, taxa = 0.1) {
    this.taxa = taxa;
    this.pesos = Array(numEntradas)
      .fill(0)
      .map(() => Math.random() - 0.5);
    this.bias = Math.random() - 0.5;
  }

  ativacao(soma) {
    return soma >= 0 ? 1 : 0;
  }

  prever(entradas) {
    let soma = this.bias;
    for (let i = 0; i < this.pesos.length; i++) {
      soma += entradas[i] * this.pesos[i];
    }
    return this.ativacao(soma);
  }

  treinar(dataset, epocas = 50) {
    for (let epoca = 0; epoca < epocas; epoca++) {
      dataset.forEach(({ x, y }) => {
        const pred = this.prever(x);
        const erro = y - pred;

        for (let i = 0; i < this.pesos.length; i++) {
          this.pesos[i] += this.taxa * erro * x[i];
        }
        this.bias += this.taxa * erro;
      });
    }
  }
}
