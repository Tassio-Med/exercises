const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(201).json({ message: 'olá mundo!' }));

const characters = [
  {
    id: 1,
    name: 'Jin Tao',
    raca: 'kalashtar',
  },
  {
    id: 2,
    name: 'Nira',
    initials: 'Humana',
  },
];

// Retornando a API para o usuário
app.get('/characters', (req, res) => res.status(200).json({ characters }));

// Adicionando elementos na API
app.post('/characters', (req, res) => {
  const newPersona = {...req.body };
  characters.push(newPersona);

  
  res.status(200).json({ persona: newPersona });
});

module.exports = app;