const Discord = require("discord.js");
const db = require("megadb");
const prefix_db = new db.crearDB("prefix");

module.exports = {
  nombre: "setprefix",
  alias: ["sp"],
  run: (client, message, args) => {



    if (!args[0]) return message.channel.send("Debes colocar el nuevo Prefix");

    prefix_db.establecer(message.author.id, args[0]);

    message.channel.send(`Prefix a sido cambiado a ${args[0]}`);
  },
};
