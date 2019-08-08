const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(session({
    secret: 'secret-pass',
    cookie: { maxAge: 3600000 },
    resave: false,
    saveUninitialized: true,
  }));

// Routes
app.use('/api/users', require('./server/routes/rutasUsuarios.js'));
app.use('/api/productos', require('./server/routes/rutasProductos.js'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
