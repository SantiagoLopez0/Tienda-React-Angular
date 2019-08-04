let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

let ProdSchema = new Schema({
  nombre: { type: String, required: true},
  descripcion: {type: String},
  precio: { type: String, required: true },
  cantidadDisponible: { type: Number},
  url: {type: String},
});

var connection = mongoose.createConnection("mongodb://localhost/Tienda");
autoIncrement.initialize(connection);


ProdSchema.plugin(autoIncrement.plugin, {model: 'Productos', startAt: 1} );

let ProdModel = mongoose.model('Productos', ProdSchema);

module.exports = ProdModel;
