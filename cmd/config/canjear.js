const Discord = require('discord.js');
const User = require('../../db/PremiumSchema')
const Key = require('../../db/keys')

module.exports = {
  nombre: "canjear",
  alias: ["sa"],
  run: async (client, message, args) => {
 
    let dd = args[0]
    if(!dd) return message.channel.send(":x: `|` Debes poner una KEY valida");

    const user = await User.findOne({ userId: message.author.id})
    const key = await Key.findOne({ key: args[0]})
    if(!key) return message.channel.send(":x: `|` La clave no existe.")
    if(key.used === true) return message.channel.send(":x: `|` La clave ya esta en uso.")






    if(!user) {
       await new User({
            userId: message.author.id,
            keyActive: args[0]
        }).save()

        message.channel.send("**Premium activado con exito**")
    } else {
        await user.updateOne({ keyActive: args[0]})
        message.channel.send("**Premium activado con exito**")
    }
    
    await key.updateOne({ used: true  })
  }
}