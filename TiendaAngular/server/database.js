const mongoose = require('mongoose');
const URL = 'mongodb://localhost/agenda';

mongoose.connect(URL)
    .then(db => console.log('db is connected'), { useNewUrlParser: true })
    .catch(err => console.error(err));

module.exports = mongoose;
