const validateCharacter = (req, res, next) => {
  const requiredProperties = ['name', 'raca'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); 
  } else {
    res.sendStatus(400); 
  }
};

module.exports = validateCharacter;