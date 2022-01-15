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
