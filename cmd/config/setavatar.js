const Discord = require('discord.js');


module.exports = {
  nombre: "setavatar",
  alias: ["sa"],
  run: async (client, message, args) => {

    let dd = args.slice(0).join(" ")
    if(!dd) return message.channel.send(":x: `|` Debes poner un enlace para la imagen");


  client.user.setAvatar(dd)
  .then(user => message.channel.send(`Nueva avatar colocado!`))
  .catch(console.error);
    
  }
}