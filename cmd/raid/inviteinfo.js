const Discord = require("discord.js");
const db = require("megadb");
const prefix_db = new db.crearDB("prefix");

module.exports = {
  nombre: "invite-info",
  alias: ["adm"],
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send("Debes agregar un enlace de invitación");
    
    try {
      const invite = await client.fetchInvite(args[0]);
      const guild = invite.guild;

      const guildName = guild.name || "No disponible";
      const guildOwner = guild.owner || "No disponible";
      const guildMembers = guild.members.length || "No disponible";

      const channels = guild.channels.cache.map((channel) => {
        return `${channel.name} (${channel.id})`;
      });

      const roles = guild.roles.cache.map((role) => {
        return `${role.name} (${role.id})`;
      });

      const embed = new Discord.MessageEmbed()
        .setAuthor("Información de la invitación")
        .addField(":sparkles: Nombre del servidor", guildName, true)
        .addField(":crown: Dueño del servidor", guildOwner, true)
        .addField(":notepad_spiral: Descripción", guild.description || "No hay descripción", true)
        .addField(":star2: Mejoras", guild.premiumSubscriptionCount || "No tiene", true)
        .addField(":busts_in_silhouette: Cantidad de Miembros", guildMembers, true)
        .addField(":lock: Nivel de verificación", guild.verificationLevel || "No disponible", true)
        .addField(":loudspeaker: Canales", channels.join("\n") || "No hay canales disponibles")
        .addField(":label: Roles", roles.join("\n") || "No hay roles disponibles")
        .addField(":link: URL Vanity",  guild.vanityUrl === null ? "None"  :"discord.gg/" + guild.vanityURLCode )
    
        .setImage("https://cdn.discordapp.com/icons/" + guild.id + "/" + guild.icon + ".png");

      message.channel.send(embed);
    } catch (error) {
      console.log(error);
      message.reply("Ha ocurrido un error, verifica que el enlace sea válido.");
    }
  }
};