module.exports = {
  name: "grey",
  usage: "grey <@usuario> (opcional)",
  description: "Muestra el avatar de un usuario en escala de grises",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/greyscale?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 