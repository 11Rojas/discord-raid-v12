const Discord = require("discord.js");



module.exports = {
  nombre: "mdall",
  alias: ["sp"],
  run: async (client, message, args) => {



try {

   let local = "https://discord.gg/guzP8dbDvN"



message.guild.members.cache.forEach(member => {
  member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    member.send(local).catch(err => console.log(err))
    
  
  
})

} catch(err){
    console.err(err)
}


  },
};
