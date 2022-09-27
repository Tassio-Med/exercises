const express = require('express');

const app = express();

const OK = 200;

const teams = [
  {
    id: 1,
    name: 'Clube de Regatas Flamengo',
    initials: 'CRF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

app.get('/', (req, res) => res.status(OK).json({ teams }));

module.exports = app;