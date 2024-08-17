const Discord = require("discord.js");
const db = require("megadb");
const channel_db = new db.crearDB("channel");

module.exports = {
  nombre: "setchannel",
  alias: ["sp"],
  run: (client, message, args) => {


    let channel = args.slice(0).join(" ")
    if (!channel) return message.channel.send("Debes colocar nombre para el canal");
    if(channel.length > 30) return message.channel.send("Debe ser menor a 30 caracteres")

   channel_db.establecer(message.author.id, channel) 

    message.channel.send("nombre del canal a sido cambiado a ```txt\n" + channel + "```");
  },
};
