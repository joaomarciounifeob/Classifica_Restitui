📄 README.md — RestituiClassifier

Autor: João Márcio Godoy Rodrigues
RA: 24001917

🧠 RestituiClassifier

Um sistema simples de Inteligência Artificial desenvolvido em JavaScript, utilizando um Perceptron implementado manualmente, capaz de classificar mensagens enviadas para a igreja em dois grupos:

1 — Mensagem indicando possível pedido de ajuda espiritual

0 — Mensagem comum, sem sinais de urgência

O sistema foi desenvolvido para auxiliar a liderança da comunidade evangélica a identificar rapidamente mensagens que possam indicar aflição, necessidade de oração ou aconselhamento.

🏗️ Arquitetura do Projeto

O projeto é composto por 3 camadas principais:

1. Modelo de IA (Perceptron)

Implementado em JavaScript puro, sem bibliotecas externas.
Responsável por treinar e classificar vetores.

2. API Node.js

Serviço backend que recebe um vetor via POST e devolve a classificação.

3. Interface Web

Página HTML que recebe o texto, converte em vetor e envia para a API.

Fluxo simplificado:

Texto digitado → Vetorização → API /classificar → Perceptron → Resultado na tela

📁 Estrutura de Pastas
meu_projeto/
│ perceptron.js # Implementação do Perceptron
│ dataset.js # Dataset fictício de treinamento
│ train.js # Script de treino do modelo
│ api.js # API Node.js
│ index.html # Interface Web
│ package.json # Dependências do Node

🧩 1. Perceptron (perceptron.js)

O Perceptron implementa:

pesos e bias

função de ativação (degrau)

função de predição

função de treino (ajuste de pesos)

Treinado usando features simples extraídas do texto.

🧩 2. Dataset Fictício (dataset.js)

Dataset baseado em exemplos comuns da comunidade evangélica:

mensagens de aflição → y = 1

mensagens comuns → y = 0

Features usadas:

[ aflição, cumprimento, organizacional ]

🧩 3. Treinamento (train.js)

Roda o Perceptron, treina por algumas épocas e imprime os pesos finais, que são inseridos manualmente na API.

Para treinar:

node train.js

Saída esperada:

Pesos treinados: [0.8, -0.3, -0.2]
Bias treinado: 0.12

🧩 4. API Node.js (api.js)

Recebe vetores na rota:

POST /classificar

Retorna:

{
"entrada": [1,0,0],
"classificacao": 1
}

Para rodar a API:

npm install
npm install express cors
node api.js

API rodando em:

http://localhost:3000

🧩 5. Interface Web (index.html)

Permite:

digitar qualquer mensagem

transformar o texto em vetor

enviar para a API

exibir o resultado com cores

Não depende de backend para rodar — basta abrir no navegador.

💡 Como funciona a Vetorização

A interface converte o texto em três valores numéricos:

1. Aflição espiritual (0 ou 1)

Ativa se encontrar palavras como:

oração

ajuda

preciso

2. Cumprimentos (0 ou 1)

bom dia

boa tarde

boa noite

3. Organizacional (0 ou 1)

culto

aviso

confirmado

Exemplo:

"Pastor, preciso de oração" → [1,0,0]
"Bom dia igreja" → [0,1,0]
"Confirmado no culto" → [0,0,1]

🧪 Como Testar

Digite mensagens como:

"Pastor, preciso de oração urgente" → deve retornar 1

"Bom dia igreja" → deve retornar 0

"Confirmado para o culto" → deve retornar 0

"Estou passando por uma luta" → talvez retorne 0 (limitação do modelo simples)

📌 Limitações e Possíveis Melhorias

Apesar de funcional, o modelo é simples.
Melhorias possíveis:

Adicionar mais features textuais

Criar uma rede neural mais profunda

Usar ferramentas de NLP (como TensorFlow.js)

Integrar o sistema ao WhatsApp

Adicionar banco de dados para armazenar mensagens analisadas

👤 Autor

João Márcio Godoy Rodrigues
RA: 24001917

Desenvolvido como parte do Projeto Integrado, utilizando JavaScript, Node.js e implementação própria de Perceptron para classificação de mensagens.
