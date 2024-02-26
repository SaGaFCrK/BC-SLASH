const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
const Discord = require('discord.js')
const { REST } = require('@discordjs/rest');

const { Routes } = require('discord-api-types/v9');
const db = require("pro.db")
const client = new Discord.Client({intents: new Discord.Intents(32511), partials: ['MESSAGE', 'CHANNEL', 'REACTION']})
const {AutoKill} = require("autokill")
AutoKill({Client: client, Time: 5000})
require('express')().listen()
let time = 2000;
let ping = client.ws.ping
require("events").setMaxListeners(99)
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

client.on("ready", async () => {

  
setInterval(()=>{
   
    client.user.setActivity('Brodcast Bot');
   },3000)
  client.user.setStatus("dnd")
  console.log(`logged in as ${client.user.tag}`)


   process.on("unhandledRejection", error => {
  return;
}); 
process.on("uncaughtException" , err => {
return;
})

process.on("unhandledRejection" , err => {
return;
})

process.on("rejectionHandled", error => {
return;
});
  
 
  const c = [{
    name: "rbc",
    description: "برودكاست لرول معينة",
    options: [{
      name: "role",
      description: "الرول ",
      type: 8,
      required: true,
    }, {
     name: "txt",
    description: "الرسالة",
     type: 3,
     required: true,
   }]
  },{
     name: "bc",
    description: "  برودكاست للكل",
       options:[{
     name: "message",
    description: "الرسالة",
     type: 3,
     required: true,
       }]
  }]

    const rest = new REST({ version: '9' }).setToken(process.env.token);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: c },
            );
            console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
})
client.on("interactionCreate", async interaction => {
 if(interaction.commandName == "bc"){
    let c = 0

    let args = interaction.options.getString("message")
  if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
        let members = interaction.guild.members.cache.filter(e => !e.user.bot).map(e => e)
        let timeout = time
        for (let i = 0; i < members.length; i++) {
            let memb = members[i]
            setTimeout(() => {
                memb.send({content: `${args}\n${memb}`})
        })
          let a7a = new MessageEmbed()
          .setDescription(`𝗗𝗼𝗻𝗲 𝘀𝗲𝗻𝗱 𝘁𝗵𝗲 𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘁𝗼 **${interaction.guild.memberCount}** 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 `)
          
          interaction.reply({embeds: [a7a]})
   }
  }  else

  if(interaction.commandName == "rbc"){
    let args = interaction.options.getString("txt")
let role = interaction.options.getRole("role")
     if(!interaction.member.permissions.has('ADMINISTRATOR')) return;
        let members = interaction.guild.members.cache.filter(e => !e.user.bot && e.roles.cache.some(e => e.id == role.id)).map(e => e)
        let timeout = time
        for (let i = 0; i < members.length; i++) {
            let memb = members[i]
            setTimeout(() => {
                memb.send({content: `${args}\n${memb}`})
            }, time)
            timeout += time
        }
          let a7a = new MessageEmbed()
          .setDescription(`تم ارسال الرسالة الى جميع الاعضاء المعاهم الرول `)

          interaction.reply({embeds: [a7a]})
   }
});


  


client.login(process.env.token)