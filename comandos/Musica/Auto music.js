module.exports = [{
  name: "auto-setup",
  usage: "auto-setup",
  description: "Configura un canal para musica automaticamente",
  aliases: ["setup"],
  code: `$editIn[3s;{newEmbed:{title:Auto Configuracion Completada}{description:Canal configurado como <#$get[a]>}{color:GREEN}{timestamp:ms}}]
$setServerVar[msgID;$get[a2]]
$let[a2;$channelSendMessage[$get[a];{
"embeds": "{newEmbed:{title:Reproductor de canciones}{description:Sin canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}",
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
$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$let[e;$playTrack[spotify;$message]]
$joinVC
$deleteCommand
$else
$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$let[e;$playTrack[youtube;$message]]
$deleteCommand
$endif
$onlyIf[$voiceID!=;⚠️** | Debes estar en un canal de voz primero** {delete:3s}{deletecommand}]
$onlyIf[$channelExists[$getServerVar[music]]!=false;]
$onlyIf[$channelID==$getServerVar[music];]
$onlyForIDs[710941335510712342;]`
},{
  name: "pause",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏸** | Cancion pausada**;;;;;true]
$pauseTrack
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[$voiceID!=;{
 "content" : "⚠️** | Debes estar en un canal de voz primero**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$voiceID[$clientID]!=;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]`
},{
  name: "resume",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[▶️** | Cancion resumida**;;;;;true]
$resumeTrack
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[$voiceID!=;{
 "content" : "⚠️** | Debes estar en un canal de voz primero**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$voiceID[$clientID]!=;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]`
},{
  name: "stop",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏹** | Canciones detenidas, cola terminada**;;;;;true]
$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:No hay canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$stop
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[$voiceID!=;{
 "content" : "⚠️** | Debes estar en un canal de voz primero**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$voiceID[$clientID]!=;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]`
},{
  name: "skip",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⏩** | Cancion salteada**;;;;;true]
$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:$queue[1;20;{position}.[{title}]({url}) | {user.tag}]}{footer:Coloca el nombre o url de alguna cancion (solamente youtube)}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$skip
$onlyIf[$queueLegth!=0;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]
$onlyIf[$voiceID!=;{
 "content": "⚠️** | Debes estar en un canal de voz primero**",
 "ephemeral": true,
 "options": {"interaction": true}
}]
$onlyIf[$voiceID[$clientID]!=;{
"content": "⚠️** | No hay canciones en reproduccion**",
"ephemeral": true,
"options": {"interaction": true}
}]`
}]