const Producto = require('../models/schemaProducto.js');

const productos = {};

productos.getProducts = async (req, res, next) => {
    const prod = await Producto.find();
    res.json(prod);
};

productos.getOneProduct = async (req, res, next) => {
  const  nombre  = req.params.nombre;
  const product = await Producto.find({nombre: nombre});
  console.log(product);
  res.json(product);
}

productos.updateProduct = async (req, res, next) => {
  const nombre = req.body.nombre;
  const cantidad = {cantidadDisponible: req.body.cantidad};
  Producto.findOneAndUpdate({"nombre":nombre},{$set:cantidad});
  res.json({status: `actualizado`});
}

module.exports = productos;
