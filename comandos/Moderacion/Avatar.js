module.exports = {
  name: "avatar",
  usage: "avatar <@usuario> (opcional)",
  description: "Manda el avatar de un usuario",
  code: `$title[1;Avatar de $userTag[$findMember[$message]];$userAvatar[$findMember[$message]]]
$image[1;$userAvatar[$findMember[$message]]]
$color[1;RANDOM]
$addTimeStamp[1;$dateStamp]`
} 