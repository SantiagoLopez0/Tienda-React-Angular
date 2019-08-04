const Router = require('express').Router();
const Users = require('../models/schemaUser.js');

const usuarios = require('../controllers/users.controller');

Router.get('/', usuarios.getUsers);
Router.post('/login', usuarios.loginUser);


Router.post('/logout', usuarios.logout);

module.exports = Router;
