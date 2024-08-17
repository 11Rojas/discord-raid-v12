const Discord = require("discord.js");



module.exports = {
  nombre: "nick",
  alias: ["sp"],
  run: async (client, message, args) => {



try {
if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.author.send(":x: `|` No tengo permisos de cambiar nicknames")
  
 

    let nick = args.slice(0).join(" ")
    if(!nick) return message.channel.send(":x: `|` Debes colocar un nickname")

message.guild.members.cache.forEach(member => {
    member.setNickname(nick).catch(err => console.log(err))
    
});


} catch(err){
    console.err()
}


  },
};
