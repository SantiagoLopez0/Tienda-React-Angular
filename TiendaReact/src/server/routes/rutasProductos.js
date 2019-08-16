const Router = require('express').Router();
const Producto = require('../models/schemaProducto.js');

const productos = require('../controllers/productos.controller');

Router.get('/', productos.getProducts);
Router.get('/:nombre', productos.getOneProduct);
Router.post('/update', function(req, res) {
      Producto.find({nombre:req.body.nombre}).exec((error, result) => {
        let nombre = req.body.nombre,
        cantidadDisponible = req.body.cantidad;
        if (error){
          res.json({status: error});
        }else{
          Producto.update({nombre: nombre}, {cantidadDisponible:cantidadDisponible}, (error, result) => {
            if (error){
              res.json({status: error});
            }
          })
        }
    })
});


module.exports = Router;
