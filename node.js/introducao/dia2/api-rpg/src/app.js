const express = require('express');

const app = express();
app.use(express.json());

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
    raca: 'Humana',
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

// Editando elementos da API

app.put('/characters/:id', (req, res) => {
  const { id } = req.params;
  const { name, raca } = req.body;

  const updatePersona = characters.find((persona) => persona.id === Number(id));

  if(!updatePersona){
    return res.status(404).json({message: 'Persona not found!' });
  }

  updatePersona.name = name;
  updatePersona.raca = raca;

  res.status(200).json({ updatePersona });
});

//Deletando elementos da API
app.delete('/characters/:id', (req, res) => {
  const { id } = req.params;

  const elementPosition = characters.findIndex((persona) => persona.id === Number(id));
  characters.splice(elementPosition, 1);

  res.status(200).end();
});

module.exports = app;