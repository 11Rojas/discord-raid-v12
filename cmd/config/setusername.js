const Discord = require("discord.js");



module.exports = {
  nombre: "setusername",
  alias: ["sp"],
  run: async (client, message, args) => {

    let xd = args.slice(0).join(" ");
    if(!xd) return message.channel.send(":x: `|` Debes colocar un username")

client.user.setUsername(xd)
  .then(user => message.channel.send(`Username cambiado a ${user.username}`))
  .catch(console.error);
    


  },
};







