module.exports = {
  name: "suck",
  usage: "suck <@usuario>",
  description: "Muestra que le lame o chupa el nepe a un usuario",
  code: `$title[1;$username lame/chupa el nepe de $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/WMicUA6S.gif;https://nekocdn.com/images/_jKEAo3l.gif;https://nekocdn.com/images/gOUmDszO.gif;https://nekocdn.com/images/WdoxuC2y.gif;https://nekocdn.com/images/4jPOxf5j.gif;https://nekocdn.com/images/pScYmmYn.gif;https://nekocdn.com/images/9IRF9Fnx.gif;https://nekocdn.com/images/oQDjWlxU.gif;https://nekocdn.com/images/qa6DtKQp.gif;https://nekocdn.com/images/Sr0OP_hw.gif;https://nekocdn.com/images/vzZpXAof.gif;https://nekocdn.com/images/tfR85lcZ.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
`
} 