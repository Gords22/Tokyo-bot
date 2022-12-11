module.exports = [{
  name: "auto-setup",
  usage: "auto-setup",
  description: "Configura un canal para musica automaticamente",
  aliases: ["setup"],
  code: `$editIn[3s;{newEmbed:{title:Auto Configuracion Completada}{description:Canal configurado como <#$get[a]>}{color:GREEN}{timestamp:ms}}]
$setServerVar[msgID;$get[a2]]
$let[a2;$channelSendMessage[$get[a];{
"embeds": "{newEmbed:{title:Tokyo Reproductor}{description:Sin canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}",
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"};yes]]
**<a:loading:859418130820759595> | Auto configurando, Por favor espera**
$setServerVar[music;$get[a]]
$let[a;$createChannel[$guildID;Tokyo Music;text;yes]]
$onlyBotPerms[admin;⚠️** | No tengo sufucientes permisos**]
$onlyPerms[admin;⚠️** | No tienes suficientes permisos**]
$onlyIf[$channelExists[$getServerVar[music]]!=true;⚠️** | El canal ya existe**]`
},{
  name: "$alwaysExecute",
  $if: "v4",
  code: `$if[$voiceID[$clientID]==]
$editMessage[$getServerVar[msgID];{
  "embeds": "{newEmbed:{title:Tokyo Reproductor}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}",
  "components": "{actionRow:{button:⏸:success:pause:false}{button:▶️:success:resume}{button:⏩:success:skip}{button:⏹:success:stop}}"
}]
$let[e;$playTrack[youtube;$message]]
$joinVC
$deleteCommand
$else
$editMessage[$getServerVar[msgID];{
  "embeds": "{newEmbed:{title:Tokyo Reproductor}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}",
  "components": "{actionRow:{button:⏸:success:pause:false}{button:▶️:success:resume}{button:⏩:success:skip}{button:⏹:success:stop}}"
}]
$let[e;$playTrack[youtube;$message]]
$deleteCommand
$endif
$onlyIf[$checkContains[$message;spotify]!=true;⚠️** | Spotify no es soportado actualmente, mantente al tanto de las noticias** {delete:5s}{deletecommand}]
$onlyIf[$voiceID!=;⚠️** | Debes estar en un canal de voz primero** {delete:3s}{deletecommand}]
$onlyIf[$checkContains[$message;$getServerVar[prefix]]!=true;⚠️** | En este canal no puedes usar comandos <@$authorID>** {delete:5s}{deletecommand}]
$onlyIf[$channelExists[$getServerVar[music]]!=false;]
$onlyIf[$channelID==$getServerVar[music];]`
},{
  name: "pause",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏸** | Cancion pausada**;;;;;true]
$pauseTrack
$onlyIf[$songInfo[userID]!=$interactionData[author.id];{
  "content" : "⚠️** | Tu no puedes controlar la musica**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[($voiceID!=)&&($voiceID[$clientID]!=);{
  "content" : "⚠️** | Debes estar en un canal de voz primero**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]
`
},{
  name: "resume",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[▶️** | Cancion resumida**;;;;;true]
$resumeTrack
$onlyIf[$songInfo[userID]!=$interactionData[author.id];{
  "content" : "⚠️** | Tu no puedes controlar la musica**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[($voiceID!=)&&($voiceID[$clientID]!=);{
  "content" : "⚠️** | Debes estar en un canal de voz primero**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]`
},{
  name: "stop",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏹** | Canciones detenidas, cola terminada**;;;;;true]
$editMessage[$getServerVar[msgID];{
  "embeds": "{newEmbed:{title:Reproductor de Canciones}{description:No hay canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}",
  "components": "{actionRow:{button:⏸:success:pause:false}{button:▶️:success:resume}{button:⏩:success:skip}{button:⏹:success:stop}}"
}]
$stop
$onlyIf[$songInfo[userID]!=$interactionData[author.id];{
  "content" : "⚠️** | Tu no puedes controlar la musica**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[($voiceID!=)&&($voiceID[$clientID]!=);{
 "content" : "⚠️** | Debes estar en un canal de voz primero**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]`
},{
  name: "skip",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏩** | Cancion salteada**;;;;;true]
$editMessage[$getServerVar[msgID];{newEmbed:{title:Tokyo Reproductor}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:success:pause:false}{button:▶️:success:resume}{button:⏩:success:skip}{button:⏹:success:stop}}"
}]
$skip
$onlyIf[$songInfo[userID]!=$interactionData[author.id];{
  "content" : "⚠️** | Tu no puedes controlar la musica**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
}]
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[($voiceID!=)&&($voiceID[$clientID]!=);{
  "content" : "⚠️** | Debes estar en un canal de voz primero**",
  "ephemeral" : true,
  "options" : {"interaction" : true}
 }]`
}]