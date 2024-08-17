const Discord = require('discord.js');
const crypto = require('crypto');
const Key = require('../../db/keys');

module.exports = {
  nombre: "genkey",
  alias: ["sa"],
  run: async (client, message, args) => {
    if(message.author.id != "815397981880320010") return message.channel.send("No tienes permisos para hacer esto.")
    let dd = args[0];
    if (!dd) return message.channel.send(":x: `|` Debes proporcionar un número válido de claves a generar");
    const claves = []
    if (isNaN(dd)) return message.channel.send(":x: `|` Debes proporcionar un número válido");

    if (dd > 100) return message.channel.send(":x: `|` El número máximo de claves a generar es 100");

    for (let i = 0; i < dd; i++) {
      let key = crypto.randomBytes(32).toString('hex');

      // Verificar si la clave ya existe en la base de datos
      let existingKey = await Key.findOne({ key });
      while (existingKey) {
        key = crypto.randomBytes(32).toString('hex');
        existingKey = await Key.findOne({ key });
      }

      // Guardar la clave en la base de datos
      let newKey = new Key({ key });
      await newKey.save();
      claves.push(key)
    }

    message.channel.send(`Se han generado ${dd} nuevas claves`);
    message.channel.send("```" + claves.join("\n") + "```")
  }
}