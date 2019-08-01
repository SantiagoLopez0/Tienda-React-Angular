const Router = require('express').Router();
const Users = require('../models/schemaUser.js');

const usuarios = require('../controllers/users.controller');

Router.get('/', usuarios.getUsers);
Router.post('/login', usuarios.loginUser);


/*Router.post('/logout', function(req, res) {
  req.session.destroy(function(err) {
  if(err) {
    console.log(err);
    res.json(err);
  } else {
    req.session = null;
    res.send('logout');
    res.end();
  }
  });
});*/

module.exports = Router;
