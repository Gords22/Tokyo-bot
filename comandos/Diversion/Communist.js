module.exports = {
  name: "communist",
  usage: "communist <@usuario> (opcional)",
  description: "Muestra que un usuario es comunista",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/comrade?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 