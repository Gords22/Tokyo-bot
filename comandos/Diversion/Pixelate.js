module.exports = {
  name: "pixelate",
  usage: "pixelate <@usuario> (opcional)",
  description: "Pixelea el avatar del usuario",
  code: `$reply[$messageID;no]
$image[1;https://some-random-api.ml/canvas/pixelate?avatar=$replaceText[$userAvatar[$findMember[$message]];webp;png]]
$color[1;RANDOM]
$addTimestamp[1;$dateStamp]`
} 