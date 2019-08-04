const Router = require('express').Router();
const Producto = require('../models/schemaProducto.js');

const productos = require('../controllers/productos.controller');

Router.get('/', productos.getProducts);
Router.get('/:name', productos.getOneProduct);


module.exports = Router;
