const Users = require('../models/schemaUser.js');

const usuarios = {};

usuarios.getUsers = async (req, res, next) => {
    const users = await Users.find();
    res.json(users);
};

usuarios.loginUser = async (req, res, next) => {
  let user = req.body.user;
  let password = req.body.pass;
  let session = req.session;

  Users.find({user: user}).count({}, function(err, count) {
      if (err) {
          res.status(500);
          res.json(err);
      }else{
        if(count == 1){
          Users.find({user: user, password: password }).count({}, function(err, count) {
              if (err) {
                  res.status(500);
                  res.json(err);
              }else{
                if(count == 1){
                  session.user = req.body.user;
                  res.json({status: 'Validado', session: session.user});
                }else{
                  res.json({status: 'Contraseña incorrecta'});
                }
              }
          })
        }else{
          res.json({status: 'Usuario no registrado'});
        }
      }
  })
}

module.exports = usuarios;
