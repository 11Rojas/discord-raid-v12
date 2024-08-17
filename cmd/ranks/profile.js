const Discord = require("discord.js");
const db = require("megadb");
const channel_db = new db.crearDB("channel");
const r4ids = new db.crearDB("raid");

module.exports = {
  nombre: "profile",
  alias: ["sp"],
  run: async (client, message, args) => {
    if (!r4ids.tiene(`${message.author.id}`)) r4ids.establecer(`${message.author.id}`, 0);
    var raidsRealizadas = await r4ids.obtener(`${message.author.id}`);

    let rango;
    let descripcion;

    if (raidsRealizadas <= 5) {
      rango = "Principiante";
      descripcion = "Has iniciado un camino por el mundo de r4id.";
    } else if (raidsRealizadas > 5 && raidsRealizadas < 10) {
      rango = "Intermedio";
      descripcion = "Ya tienes experiencia.";
    } else if (raidsRealizadas >= 10 && raidsRealizadas < 15) {
      rango = "Experto";
      descripcion = "Eres una máquina de r4idear.";
    } else if (raidsRealizadas >= 15 && raidsRealizadas < 20) {
      rango = "Superior";
      descripcion = "Pocos llegan hasta aquí.";
    } else if (raidsRealizadas >= 20) {
      rango = "No Mercy";
      descripcion = "Haz alcanzado el rango máximo.";
    }

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`)
      .setColor("GREEN")
      .addField("Rango", rango)
      .addField("Descripción", descripcion)
      .addField("Raids realizadas", raidsRealizadas)
      .setFooter("AwOnTop");

    message.channel.send(embed);
  },
};