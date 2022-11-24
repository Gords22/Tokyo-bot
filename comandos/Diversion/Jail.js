module.exports = {
  name: "jail",
  usage: "jail <@usuario> (opcional)",
  description: "Muestra a un usuario tras las rejas",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/jail?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimeStamp[1;$dateStamp]`
} 