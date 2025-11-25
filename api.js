import express from "express";
import { Perceptron } from "./perceptron.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Substitua por seus pesos do treino!
const modelo = new Perceptron(3);
modelo.pesos = [0.4603889592193404, 0.18505676816548852, -0.07191630420210537];
modelo.bias = -0.3604069000913842;

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
