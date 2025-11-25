import express from "express";
import { Perceptron } from "./perceptron.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Substitua por seus pesos do treino!
const modelo = new Perceptron(3);
modelo.pesos = [
  0.002631039496704836, -0.02968551476110659, -0.029547710878888855,
];
modelo.bias = 0.02816114201653673;

app.post("/classificar", (req, res) => {
  const { x } = req.body;

  if (!x || !Array.isArray(x)) {
    return res.status(400).json({ erro: "Envie x como array numérico." });
  }

  const pred = modelo.prever(x);
  res.json({ entrada: x, classificacao: pred });
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
