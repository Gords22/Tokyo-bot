module.exports = {
  name: "triggered",
  usage: "triggered <@usuario> (opcional)",
  description: "Agrega \"TRIGGERED\" al avatar del usuario",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/triggered?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 