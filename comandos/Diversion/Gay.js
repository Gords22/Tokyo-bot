module.exports = {
  name: "gay",
  usage: "gay <@usuario> (opcional)",
  description: "Muestra que un usuario es gay",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/gay?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]
`
} 