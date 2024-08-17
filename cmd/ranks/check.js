const Discord = require("discord.js");
const db = require("megadb");
const message_db = new db.crearDB("message");
const channel_db = new db.crearDB("channel");
const r4ids = new db.crearDB("raid")
const servers = new db.crearDB("offservers");

module.exports = {
  nombre: "check",
  alias: ["sp"],
  run: async (client, message, args) => {

let server = message.guild;

    var off = await servers.obtener(`Server OFF ${message.guild.id}`)
   
    if(off == "true") return  message.channel.send("Este servidor ya ha sido raideado")

 if(!servers.tiene(`${message.author.id}`))  servers.establecer(`Server OFF ${message.guild.id}`, "true")

 
     



    if(server.memberCount <= 40) return message.channel.send("Debe ser un servidor de 45 personas minimo")
    if(server.memberCount >= 45){ 
 if(!r4ids.tiene(`${message.author.id}`)) r4ids.establecer(`${message.author.id}`, 0) 

   var sad = await r4ids.obtener(`${message.author.id}`)
    if(sad < 20){
            r4ids.sumar(`${message.author.id}`, 1)
      message.channel.send("El r4id se ha reconocido!")
    }else{
      message.channel.send("Has llegado al nivel maximo")
    }
   }
    
   


  }
}