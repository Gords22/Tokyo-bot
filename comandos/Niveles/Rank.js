module.exports = {
  name: "rank",
  description: "Muestra tu rango y nivel en el sistema de niveles",
  usage: "rank <@usuario>",
  code: `$djsEval[(async () => {
const levels = require("discord-xp")
const canva = require("canvacord")
const Discord = require("discord.js")

const user = await levels.fetch("$findMember[$message]", "$guildID", true)

if(!user){
message.channel.send("⚠️** | Este usuario no tiene nivel**")
}else{

const rank = new canva.Rank() .setAvatar("$replaceText[$userAvatar[$findMember[$message]];webp;png]") 
.setCurrentXP(user.cleanXp) 
.setRequiredXP(user.cleanNextLevelXp) 
.setStatus("$status[$findMember[$message]]") 
.setProgressBar("#FFFFFF", "COLOR") 
.setUsername("$username[$findMember[$message]]")
.setBackground("IMAGE", "$getServerVar[fondoRnk]")
.setRank(user.position, "POSICION:")
.setLevel(user.level, "NIVEL:")
.setDiscriminator("$discriminator[$findMember[$message]]"); 
rank.build() 
.then(data => { 
const attach = new Discord.MessageAttachment(data, "Tokyo-rank.png")
message.channel.send({ content: "$replaceText[$replaceText[$checkCondition[$findMember[$message]==$authorID];false;**❔ | Rango de $userTag[$findMember[$message]]**];true;**❔ | Tu rango $userTag**]", files: [attach] })
})
}
})()
]
$onlyIf[$isBot[$findMember[$message]]!=true;⚠️** | Los bots no tienen niveles**]
$onlyIf[$getServerVar[level]!=false;⚠️** | El sistema de niveles esta desactivado**]`
}