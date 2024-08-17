const fs = require("fs");

module.exports = {
  nombre: "info",
  alias: ["export-info"],
  run: async (client, message, args) => {
    try {
      // Obtener todos los canales y categorías del servidor
      const channels = message.guild.channels.cache.sort((a, b) => a.position - b.position);
      const categories = channels.filter(channel => channel.type === "category");

      // Obtener todos los miembros del servidor
      const members = message.guild.members.cache;

      // Crear una cadena de texto con la lista de canales y categorías
      let text = "Canales y Categorías:\n\n";

      categories.forEach(category => {
        text += `[Categoría] ${category.name}\n`;

        const categoryChannels = channels.filter(channel => channel.parentID === category.id);
        categoryChannels.forEach(channel => {
          text += `- ${channel.name} (${channel.id})\n`;
        });

        text += "\n";
      });

      // Agregar la lista de miembros al texto
      text += "\nMiembros:\n\n";
      members.forEach(member => {
        text += `- ${member.user.username}#${member.user.discriminator} (${member.id})\n`;
      });

      // Escribir la lista en un archivo .txt
      fs.writeFileSync("info.txt", text);

      // Enviar el archivo .txt al autor del comando
      message.author.send("Aquí tienes la lista de canales, categorías y miembros:", { files: ["info.txt"] });
      message.channel.send("Se ha exportado la información del servidor. Revisa tus mensajes privados.");
    } catch (error) {
      console.error(error);
      message.channel.send("Ha ocurrido un error al exportar la información del servidor.");
    }
  }
};