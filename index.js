//Modulos Necesarios
Discord = require('discord.js');
const client = new Discord.Client();
const { ifError } = require('assert');
const {Client, MessageEmbed, MessageAttachment } = require('discord.js');
const fs = require("fs");
const db = require('megadb');
const prefix_db = new db.crearDB('prefix');
client.comandos = new Discord.Collection();


const express = require('express');
const app = express();
app.listen("3001")
app.get("/status", (req, res) => {
  res.json({ status: 'ok'})
})


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`✅ | Evento cargado: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

const connect = require('./db/connect')
connect()
//Command Handler

let handler = fs.readdirSync("./cmd/")
for (var archi of handler) {
    if(!archi.endsWith(".js")){
        let sub_handler = fs.readdirSync(`./cmd/${archi}`)
        for(var archi2 of sub_handler){
            
            let sub_archivo = require(`./cmd/${archi}/${archi2}`)
            console.log(`cargo el comando ${sub_archivo.nombre}`)
            client.comandos.set(sub_archivo.nombre, sub_archivo)
        }
    }else if(archi.endsWith('.js')){
        let archivo = require(`./cmd/${archi}`)
        console.log(`cargo el comando ${archivo.nombre}`)
        client.comandos.set(archivo.nombre, archivo) 
    }
  }


//Message & Handler

  client.on('message', async (message) => {
    if(message.channel.type == "dm") return;

    let prefix;
  
    if (prefix_db.tiene(message.author.id)) {
      prefix = await prefix_db.obtener(message.author.id)
    } else {
      prefix = 'aw!'
    }
  
    if (!message.content.startsWith(prefix)) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmd = client.comandos.get(command)
  if(cmd){
      cmd.run(client, message, args)
  
  }
  

  
    //Ping
    let ping = Math.floor(message.client.ws.ping);
      if(command == 'ping'){
      message.channel.send(`:ping_pong: tiempo de respuesta ` + ping + "ms")
      }
  
  
  })




app.listen('4001', (req, res) => {
  console.log(`4001 Port funcionado`)
})




process.on('uncaughtException', (error) => {
  console.error('Se ha producido un error no capturado:');
  console.error(error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Rechazo no capturado:');
  console.error(reason);
});






client.login("XXX")