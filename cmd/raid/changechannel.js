const Discord = require("discord.js");



module.exports = {
  nombre: "name-all",
  alias: ["sp"],
  run: async (client, message, args) => {



try {


    message.guild.channels.cache.forEach((channel) => {
        channel.setName("Possessed by Awekening")
    })

    

} catch(err){
    console.error(err)
}


  },
};
