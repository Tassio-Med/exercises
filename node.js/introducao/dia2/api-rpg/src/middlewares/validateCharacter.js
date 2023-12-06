const validateCharacter = (req, res, next) => {
  const { name, raca } = req.body;
  if(!name) return res.startus(400).json({ message: 'O campo "name" é obrigatório' });
  if(!raca) return res.startus(400).json({ message: 'O campo "raca" é obrigatório' });
  next();
};

module.exports = validateCharacter;