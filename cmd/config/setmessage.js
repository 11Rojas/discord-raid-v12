const Discord = require("discord.js");
const db = require("megadb");
const message_db = new db.crearDB("message");




module.exports = {
  nombre: "setmessage",
  alias: ["sp"],
  run: (client, message, args) => {








    


    let raid = args.slice(0).join(" ")
    if (!raid) return message.channel.send("Debes colocar un spam");

   message_db.establecer(message.author.id, raid) 

    message.channel.send("Spam a sido cambiado a ```txt\n" + raid + "```");
  },
};
