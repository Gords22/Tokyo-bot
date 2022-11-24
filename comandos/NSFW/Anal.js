module.exports = {
  name: "anal",
  usage: "anal <@usuario>",
  description: "Dale anal a un usuario",
  code: `$title[1;$username le da anal a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/ESGvvlcT.gif;https://nekocdn.com/images/twe036GD.gif;https://nekocdn.com/images/1KloAiRk.gif;https://nekocdn.com/images/E9Whis7E.gif;https://nekocdn.com/images/jcSkM8Wf.gif;https://nekocdn.com/images/NeNID2yZ.gif;https://nekocdn.com/images/ykgrhL8W.gif;https://nekocdn.com/images/AGNsuqHx.gif;https://nekocdn.com/images/09_RuzZh.gif;https://nekocdn.com/images/swr7ugLw.gif;https://nekocdn.com/images/Scq6lyac.gif;https://nekocdn.com/images/Sf_svYIK.gif;https://nekocdn.com/images/swr7ugLw.gif;https://nekocdn.com/images/t8xMxFol.gif;https://nekocdn.com/images/WJpLmqGM.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
$onlyNSFW[**⚠️ | No puedes usar este comando aqui 😳**]
`
} 