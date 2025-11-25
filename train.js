import { Perceptron } from "./perceptron.js";
import { dataset } from "./dataset.js";

const p = new Perceptron(3, 0.1);

p.treinar(dataset, 50);

console.log("Pesos treinados:", p.pesos);
console.log("Bias treinado:", p.bias);
