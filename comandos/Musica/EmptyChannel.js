module.exports = {
  type: "voiceStateUpdate",
  channel: "$getServerVar[music]",
  code: `
$editMessage[$getServerVar[msgID];{newEmbed:{title:Reproductor de Canciones}{description:No hay canciones en reproduccion}{footer:Coloca el nombre o url de alguna cancion}{color:GREEN}{image:https://media.discordapp.net/attachments/917928879878983721/951611547313115146/Picsart_22-03-10_15-43-39-566.jpg}}{
"components": "{actionRow:{button:⏸:danger:pause:false}{button:▶️:danger:resume}{button:⏩:danger:skip}{button:⏹:danger:stop}}"
}]
$sendMessage[**Canal Abandonado** {delete:10s}]
$leaveVc
$onlyIf[$djseval[d.data.oldVoiceState?.channel.members.first().user.id;yes]==$clientId;]
$wait[10s]
$sendMessage[**⚠️ | Canal de voz vacio, abandonando en 10 segundos** {delete:10s}]
$onlyIf[$djseval[d.data.oldVoiceState?.channel.members.first().user.id;yes]==$clientId;]
$onlyIf[$djseval[d.data.oldVoiceState?.channel.members.size === 1;yes]==true;]
$onlyIf[($oldState[channelId]!=)&&($newState[channelId]==);]
$onlyIf[$isBot[$oldState[id]]==false]`
}