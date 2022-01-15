require("events").EventEmitter.defaultMaxListeners = 1000;

const Discord = require('discord.js')
const client = new Discord.Client()
client.interaction = {}; 
const DiscordButtons = require('discord-buttons');

client.login(process.env.token)
const db = require('pro.db')
const {MessageMenuOption , MessageMenu , MessageActionRow} = require("discord-buttons")
const disbut = require("discord-buttons")
disbut(client)
const lineReply = require('discord-reply')

const prefix = "."
client.on('ready', () => {
  console.log('done')
})


 const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello world!")
})

app.listen(3000, () => {
 console.log("done")
})



client.on('message', async message => {
  if(message.content.startsWith(prefix + 'setrole')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if (!role) return message.reply('Role?')
    let embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({dynamic: true}))
    .setDescription(`Done Set Role : ${role}`)
    .setFooter(message.author.username, message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('GREEN')
    db.set(`role_${message.guild.id}`, role.id)
    await message.channel.send(embed)
  }
})





client.on('message', async message => {
  if (message.content.startsWith(prefix + 'سجن')) {
   
    try {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let data = db.get(`role_${message.guild.id}`);
    let role = message.guild.roles.cache.find(role => role.id === data);
    if(!user) return message.channel.send('من فضلك قم بإختيار العضو')
    if(!role) return await message.channel.send('من فضلك قم بإختيار رتبة السجن ');
    
     let member = await message.guild.member(user);
    
let embed1 = new Discord.MessageEmbed()
.setDescription('يرحم امك اختر شي من هنا')

  let option = new disbut.MessageMenuOption()
  .setLabel('سب')
  .setValue('role') 
  .setDescription('سجن ادا سب شخص')
   
  let option1 = new disbut.MessageMenuOption()
  .setLabel('إستهبال فالشات')
  .setValue('2') 
  .setDescription('إستهبال فالشات')
   
  let option2 = new disbut.MessageMenuOption()
  .setLabel('تنمر')
  .setValue('3') 
  .setDescription('سجن إدا تنمر شخص')
  
  let option3 = new disbut.MessageMenuOption()
  .setLabel('كلام غير لائق')
  .setValue('4')
  .setDescription('سجن ادا قال شخص كلام غير لائق')
 
  
let select = new disbut.MessageMenu()
  .setID('hey')
  .addOption(option)
  .addOption(option1)
  .addOption(option2)
  .addOption(option3)
  .setMaxValues(1) //optional
  .setMinValues(1) //optional
  .setPlaceholder('اختر شي من هنا يشيخ!'); //optional
const sendmenu = await message.channel.send(embed1, select)
const filter = (button) => button.clicker.user.id == message.author.id
let collector = sendmenu.createMenuCollector(filter, {time : 60000})
collector.on('collect', async (menu) => {
  if (menu.values[0] === 'role') {
   
      await member.roles.add(role).then(async () => {
       db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن لي منشنته انت`, true);
    });
    
    
    menu.reply.defer()
        }
        if (menu.values[0] === '2') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن لي منشنته انت`, true);
    });
    
    
    menu.reply.defer()
        }
        if (menu.values[0] === '3') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن لي منشنته انت`, true);
    });
   
   
    menu.reply.defer()
        }
        if (menu.values[0] === '4') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن لي منشنته انت`, true);
    });
    
  
    menu.reply.defer()
        }
        })
        collector.on('end', async menu => {
         sendmenu.delete(embed1)
        })
    } catch (err) {
      message.channel.send(`${err}`)
    }
  }
})

