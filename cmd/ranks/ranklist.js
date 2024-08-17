const Discord = require("discord.js");
const db = require("megadb");
const channel_db = new db.crearDB("channel");
const r4ids = new db.crearDB("raid");

module.exports = {
  nombre: "ranklist",
  alias: ["sp"],
  run: async (client, message, args) => {
    var raidData = await r4ids.datos();
    
    const embed = new Discord.MessageEmbed()
      .setAuthor("Rank list")
      .addField("TOP R4IDERS", formatRanking(raidData));

    message.channel.send(embed);



    function formatRanking(raidData) {
        let ranking = [];
        
        for (const [userId, raids] of Object.entries(raidData)) {
          const member = message.guild.members.cache.get(userId);
          if (member) {
            ranking.push(`User: ${member.user.tag}, Raids: ${raids}`);
          }
        }
        
        return ranking.join("\n");
      }


  },
};
