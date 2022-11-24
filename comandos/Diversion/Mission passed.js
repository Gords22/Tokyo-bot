module.exports = {
  name: "mission passed",
  usage: "mission <@usuario> (opcional)",
  description: "Muestra Mission passed en el avatar del usuario",
  aliases: ["mission-passed","passed","mission"],
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/passed?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
`
} 