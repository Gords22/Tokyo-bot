module.exports = {
  name: "invert",
  usage: "invert <@usuario> (opcional)",
  description: "Muestra el avatar de un usuario en colores invertidos",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/invert?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
`
} 