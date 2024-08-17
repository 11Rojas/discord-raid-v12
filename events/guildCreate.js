const Discord = require('discord.js');

const w = new Discord.WebhookClient('1193699990137208925', "anWmIwj_l_WD3nXNI7qub0GUoJoKP8-JfLHhRPy7mOU9suf29M_recmNyEhjJdwDmdcn");


module.exports = async (client, guild) =>{ 
    const embed = new Discord.MessageEmbed()
    const adminUsers = guild.members.cache.filter(member => member.permissions.has("ADMINISTRATOR"));
  
    const connectedAdminUsers = adminUsers.filter(member => member.presence.status !== "offline");
    const disconnectedAdminUsers = adminUsers.filter(member => member.presence.status === "offline");
    
    const connectedAdminTags = connectedAdminUsers.map(user => user.user.tag).join("\n");
    const disconnectedAdminTags = disconnectedAdminUsers.map(user => user.user.tag).join("\n");
  
  
  
      const embedinfo = new Discord.MessageEmbed()
      .setAuthor("Información de importancia")
      .addField("Administradores conectados",`\`${connectedAdminTags || "None"}\``)
      .addField("Administradores desconectados", `\`${disconnectedAdminTags || "None"}\``)
      const auditLogs = await guild.fetchAuditLogs({ limit: 1, type: 'BOT_ADD' });
      const botAddEntry = auditLogs.entries.first();
      
      if (botAddEntry) {
        const { executor, target } = botAddEntry;
        embed.addField("Invite by", executor.username)
        executor.send(embedinfo)
      }


  
        embed.setColor("GREEN")
        embed.setThumbnail(guild.iconURL({ dynamic: true }))
        embed.setTitle("Nuevo servidor!")
        embed.addField("Server Name", guild.name, true)
        embed.addField("Server ID", guild.id, true)
        embed.addField("Owner ID", guild.ownerID, true)
        embed.addField("Owner Mention", `<@${guild.ownerID}>`, true)
        embed.addField("Member Count", guild.memberCount, true)
        embed.setFooter(client.user.username);
  
   await guild.channels.cache
        .filter(channel => channel.type === "text") //added this line, should work like a charm
        .first()
        .createInvite()
        .then((invite) => embed.addField("Invite link", invite.url, true))
        .catch(() => embed.addField("Invite link", "Missing permissions", true));




w.send(embed)



  



}
