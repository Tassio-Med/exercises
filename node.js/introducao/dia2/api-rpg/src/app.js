const express = require('express');
const apiCredentials = require('./middlewares/apiCredentials');
const validateCharacter = require('./middlewares/validateCharacter');

const app = express();

let nextId = 3;
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

app.use(express.json());
// Retornando a API para o usuário
app.get('/characters', (req, res) => res.json(characters));

app.get('/characters/:id', (req, res) => {
  const id = Number(req.params.id);
  const persona = characters.find(p => p.id === id);
  if (persona) {
    res.json(persona);
  } else {
    res.sendStatus(404);
  }
});

app.use(apiCredentials);
// Adicionando elementos na API
app.post('/characters', validateCharacter, (req, res) => {
  const newPersona = {id: nextId, ...req.body };
  characters.push(newPersona);
  nextId += 1;
  res.status(200).json({ newPersona });
});

// Editando elementos da API

app.put('/characters/:id', validateCharacter, (req, res) => {
  const id = Number(req.params.id);
  const updatePersona = characters.find((persona) => persona.id === id);

  if(updatePersona){
    const index = characters.indexOf(updatePersona);
    const updated = { id, ...req.body };
    characters.splice(index, 1, updated);
    res.status(201).json(updated);
  }else{
    return res.status(404).json({message: 'Persona not found!' });
  }

});

//Deletando elementos da API
app.delete('/characters/:id', (req, res) => {
  const { id } = req.params;

  const elementPosition = characters.findIndex((persona) => persona.id === Number(id));
  characters.splice(elementPosition, 1);

  res.status(200).end();
});

module.exports = app;