// connect.js

const mongoose = require('mongoose');

// Reemplaza estas variables con tus propias credenciales y URL de conexión

const url = `mongodb://127.0.0.1:1433/raiddb`;

// Crea una nueva conexión a la base de datos
async function connect() {
  try {
    const client = await mongoose.connect(url);
    //Enviamos un console log de exito

    console.log("Conexion exitoso");

  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
}

module.exports = connect

// Exporta la función connect
