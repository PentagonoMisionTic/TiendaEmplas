const mongoose = require('mongoose');

const connecDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos conectada con el servidor:  ${con.connection.host}`)
    })
}

module.exports=connecDatabase;