let Usuario = require('./TiendaAngular/server/models/schemaUser.js'),
    Producto = require('./TiendaAngular/server/models/schemaProducto.js'),
    mongoose = require('mongoose');

let newUsers = [
  {
    user: "User1",
    email: "user1@mail.com",
    password: "12345"
  },
  {
    user: "User23",
    email: "user45@mmail.com",
    password: "654321"
  }
];

let newProd = [
  {
    nombre: 'Aguacate',
    descripcion: 'Persea americana, conocida comúnmente como aguacate, ​​ palto​, Cura, o aguacatero, es una especie arbórea del género Persea perteneciente a la familia Lauraceae, cuyo fruto, el aguacate o palta, ​ es una baya comestible.​',
    precio: 5,
    cantidadDisponible: 15,
    url: '../../assets/aguacate.jpg'
  },
  {
    nombre: 'Ajo',
    descripcion: 'El ajo mejora los niveles de colesterol, lo que puede disminuir el riesgo de enfermedades cardíacas.',
    precio: 1,
    cantidadDisponible: 40,
    url: '../../assets/ajo.jpg',
  },
  {
    nombre: 'Almendras',
    descripcion: 'La almendra es el fruto del almendro. Posee una película de color canela que la envuelve además de una cáscara exterior que no es comestible, que representa un peso importante de la almendra.',
    precio: 7,
    cantidadDisponible: 60,
    url: '../../assets/almendras.jpg',
  },
  {
    nombre: 'Arandanos',
    descripcion: 'El nombre arándano rojo hace referencia a un grupo de arbustos enanos perennes del género Vaccinium, subgénero Oxycoccus, aunque algunos botánicos consideran Oxycoccus un género aparte.',
    precio: 2,
    cantidadDisponible: 35,
    url: '../../assets/arandanos.jpg',
  },
  {
    nombre: 'Brocoli',
    descripcion: 'El brócoli, ​ brécol​ o bróquil​, del italiano broccoli, es una planta de la familia de las brasicáceas.',
    precio: 5,
    cantidadDisponible: 10,
    url: '../../assets/brocoli.png',
  },
  {
    nombre: 'Calabaza',
    descripcion: 'La calabaza es en su definición más abarcativa una baya de cáscara dura.',
    precio: 15,
    cantidadDisponible: 3,
    url: '../../assets/calabaza.jpg',
  },
  {
    nombre: 'Canela',
    descripcion: 'Se aprovecha como especia su corteza interna, que se obtiene pelando y frotando las ramas.',
    precio: 2,
    cantidadDisponible: 20,
    url: '../../assets/canela.jpg',
  },
  {
    nombre: 'Cebolla',
    descripcion: 'Allium cepa, comúnmente conocida como cebolla, es una planta herbácea bienal perteneciente a la familia de las amarilidáceas.',
    precio: 3,
    cantidadDisponible: 30,
    url: '../../assets/cebolla.jpg',
  },
  {
    nombre: 'Fresa',
    descripcion: 'Fragaria, llamado comúnmente fresa, frutilla o frantera, es un género de plantas rastreras estoloniferas de la familia Rosaceae.',
    precio: 2,
    cantidadDisponible: 50,
    url: '../../assets/fresa.jpg',
  },
  {
    nombre: 'Kiwi',
    descripcion: 'El kiwi o mangüeyo es la baya de la enredadera Actinidia deliciosa.',
    precio: 4,
    cantidadDisponible: 20,
    url: '../../assets/kiwi.jpg',
  },
  {
    nombre: 'Limon',
    descripcion: 'Citrus × limon, el limonero, es un pequeño árbol frutal perenne.',
    precio: 1,
    cantidadDisponible: 15,
    url: '../../assets/limon.jpg',
  },
  {
    nombre: 'Lychee',
    descripcion: 'Litchi chinensis, conocido vulgarmente como lichi o lechias​, es un árbol frutal tropical originario del sur de China. ',
    precio: 4,
    cantidadDisponible: 20,
    url: '../../assets/lychee.jpg',
  },
  {
    nombre: 'Maiz',
    descripcion: 'Zea mays, el maíz, es una gramínea anual originaria y domesticada por los pueblos indígenas en el centro de México​​ desde hace unos 10 000 años.',
    precio: 3,
    cantidadDisponible: 40,
    url: '../../assets/maiz.jpg',
  },
  {
    nombre: 'Manzana',
    descripcion: 'La manzana es un tipo de fruta pomácea comestible, fruta del manzano comestible (Malus domestica), otros manzanos (especies del género Malus) o híbridos de aquel.',
    precio: 8,
    cantidadDisponible: 20,
    url: '../../assets/manzana.jpg',
  },
  {
    nombre: 'Naranja',
    descripcion: 'La naranja es una fruta cítrica obtenida del naranjo dulce, del naranjo amargo y de naranjos de otras variedades o híbridos, de origen asiático.',
    precio: 5,
    cantidadDisponible: 40,
    url: '../../assets/naranja.jpg',
  },
  {
    nombre: 'Papa',
    descripcion: 'Sin dudas, la patata es una de las verduras más versátiles y populares. Gracias a los primeros exploradores, quienes la encontraron por primera vez en las altas montañas de los andes peruanos.',
    precio: 3,
    cantidadDisponible: 100,
    url: '../../assets/papa.jpg',
  },
  {
    nombre: 'Pasta',
    descripcion: 'La pasta es un conjunto de alimentos preparados con una masa cuyo ingrediente básico es la harina, mezclada con agua, y a la cual se puede añadir sal.',
    precio: 20,
    cantidadDisponible: 10,
    url: '../../assets/pasta.jpg',
  },
  {
    nombre: 'Pimienta',
    descripcion: 'Piper nigrum es una especie de la familia de las piperáceas, cultivada por su fruto, que se emplea seco como especia. ',
    precio: 2,
    cantidadDisponible: 60,
    url: '../../assets/pimienta.jpg',
  },
  {
    nombre: 'Repollo',
    descripcion: 'El repollo, col repollo​ o col cerrada es una planta comestible de la familia de las Brasicáceas, y una herbácea bienal.',
    precio: 16,
    cantidadDisponible: 15,
    url: '../../assets/repollo.jpg',
  },
  {
    nombre: 'Tomate',
    descripcion: 'El tomate es rico en vitaminas A, B, C, PP y K; en minerales como fósforo, calcio, zinc, magnesio, potasio, sodio y manganeso; en bioflavonoides, en licopeno y tiene propiedades antioxidantes.',
    precio: 6,
    cantidadDisponible: 30,
    url: '../../assets/tomate.jpg',
  },
  {
    nombre: 'Zanahoria',
    descripcion: 'Daucus carota subespecie sativus, llamada popularmente zanahoria es una hortaliza que pertenece a la familia de las umbelíferas.',
    precio: 4,
    cantidadDisponible: 20,
    url: '../../assets/zanahoria.jpg',
  },
]


mongoose.connect('mongodb://localhost/Tienda', { useNewUrlParser: true }, (err, db)=>{
    Usuario.collection.insert(newUsers, (err, doc)=>{
      console.log(err);
    });

    Producto.collection.insert(newProd, (err, doc)=>{
      console.log(err);
    });
});
