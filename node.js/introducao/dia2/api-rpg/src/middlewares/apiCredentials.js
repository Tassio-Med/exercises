const fs = require('fs/promises');

module.exports = async function apiCredentials(req, res, next){
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });

  const authorized = JSON.parse(authdata);

  if(token in authorized) {
    req.characters = authorized[token];
    next();
  } else {
    res.sendStatus(401).json({ message: 'Token inválido ou expirado.' });
  }
};