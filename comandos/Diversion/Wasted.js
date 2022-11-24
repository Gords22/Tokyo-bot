module.exports = {
  name: "wasted",
  usage: "wasted <@usuario> (opcional)",
  description: "Agrega \"WASTED\" al avatar del usuario",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/wasted?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
`
} 