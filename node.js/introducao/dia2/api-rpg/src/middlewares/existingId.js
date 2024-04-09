const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  if(!characters.some((persona) => persona.id === id)){
    return res.sendStatus(404).json({ message: 'Personagem não encontrado' });
  } 
  next();
};

module.exports = existingId;