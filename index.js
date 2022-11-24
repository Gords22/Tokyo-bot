const express = require('express');
const keepAlive = require("./server");
const aoijs = require("aoi.js")
const mongoose = require("mongoose")
const levels = require("discord-xp")
keepAlive()
const keep_alive = require('./keep_alive.js')
require('dotenv').config()

levels.setURL(process.env.uri)

mongoose.connect(process.env.uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true
}).then(() => {
  console.log("Conectado a la base de datos")
}).catch((err) => {
  console.log(err)
})

const bot = new aoijs.AoiClient({
  token: process.env.token, 
  prefix: "$getServerVar[prefix]", 
  intents: "all",
  mobilePlatform: true,
  suppressAllErrors: true,
  respondOnEdit: {
    commands: true,
    alwaysExecute: true,
    nonPrefixed: false,
    time: 60000
  },
  events: {
    timeout: true,
    functionError: true
  },
  database:{
    db: require("dbdjs.db"),
    type: "dbdjs.db",
    path: "./database/",
    tables: ["main"]
}
})

let encode = "utf8"
const fss = require('fs')
function backup() {
 fss.writeFileSync('./db backup/db.sql', fss.readFileSync('./database/main/main_scheme_1.sql', {
 encode,
 undefined
 }), 
 {encoding: encode})
}
setInterval(backup, 60000) 

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "abcdef012345"
  },
  cache: {
    cacheType: "Memory",
    enabled: true,
  }
},true);

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./comandos/")

const files = fss.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach(x => {
 require(`./events/${x}`)(bot)
});

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgGreen"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})

voice.onAudioError()
voice.onTrackStart()
voice.onTrackEnd()
voice.onTrackPause()
voice.onTrackResume()
voice.onQueueStart()
voice.onQueueEnd()

voice.queueEndCommand({
  channel: "$getServerVar[music]",
  code: `$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:No hay canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$leaveVc
$onlyIf[$channelExists[$getServerVar[music]]!=false;]
$onlyIf[$getServerVar[music]!=;]
$suppressErrors`
})

voice.trackEndCommand({
  channel: "$getServerVar[music]",
  code: `$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$onlyIf[$channelExists[$getServerVar[music]]!=false;]
$onlyIf[$queueLegth!=0;]
$onlyIf[$getServerVar[music]!=;]
$onlyIf[$voiceID[$clientID]!=;]
$suppressErrors`
})

bot.joinCommand({
  channel: "$getServerVar[canalwel]",
  code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[mensajewel];(user.tag);$userTag];(server.name);$serverName];(user.name);$username];(members.count);$membersCount[$guildID]];(user.mention);<@$authorID>]
$attachment[https://some-random-api.ml/welcome/img/6/stars?type=join&avatar=$replaceText[$authorAvatar;webp;png]&username=$uri[$username;encode]&discriminator=$discriminator&guildName=$uri[$serverName;encode]&textcolor=white&memberCount=$membersCount&key=G7ztt2d65ioePTCwELCAz7peRzuAdlkhiGtAfeToa9r9pHfeS1xyrfseOrM6Ghwc;tokyo-nida-xdd.png;url]
$onlyIf[$getServerVar[canalwel]!=;]`
})

bot.readyCommand({
 channel: '',
 code: `$wait[2d]
$log[$djseval[require("table").table([["Desarrollador", "$userTag[710941335510712342]"],["Bot",client.user.tag], ["Comandos cargados", client.cmd.default.size],["Ping de WebSocket", client.ws.ping+"ms"], ["Version", "v$packageVersion"]]);yes]]`
})

bot.status({
  text: "Midna's lament",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "1716",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Mi prefix es T.",
  type: "WATCHING",
  time: 12
})

bot.variables({
  prefix: "T.",
  mensaje: "sin mensajes",
  mensajes: "0",
  canalwel: "",
  mensajewel: "",
  fondowel: "https://media.discordapp.net/attachments/886981800235237426/898952238146388018/702551.jpg",
  music: "",
  msgID: "",
  level: false,
  levels: "$channelID",
  msglevel: "Felicidades (user.mention), Subiste al nivel (level)",
  fondoRnk: "https://media.discordapp.net/attachments/957494648354512906/960022902877610014/Picsart_22-04-02_20-46-55-315.jpg"
})

console.log(`Hello from Node.js ${process.version}!`);