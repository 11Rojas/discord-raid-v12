const { WebhookClient, Discord, Client, MessageEmbed} = require('discord.js');
module.exports = (client, message, guild) =>{ 





  

  const array =
   [ { name: "Awekening", type: 'PLAYING', },
    { 
      name: "Awekening - Bot Oficial", 
      type: 'PLAYING', 
      }, 
    { 
      name: 'Versión Beta', 
      type: 'PLAYING', 
      }, 
    { 
      name: `aw!comandos`, 
      type: `WATCHING`, 
      }, ]
    
    
    
    
    
     setInterval(() => { function presence(){ 
       client.user.setPresence({ 
       status: 'online', 
       activity: array[Math.floor(Math.random() * array.length)] }); } presence(); 
       
       }, 5000) 


       console.log(`${client.user.tag} Listo para el raid.`);
       console.log(`Invite: https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)







}