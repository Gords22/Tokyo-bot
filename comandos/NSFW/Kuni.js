module.exports = {
  name: "kuni",
  usage: "kuni <@usuario>",
  description: "Muestra un Kuni a un usuario",
  code: `$title[1;$username le lame la concha a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/eSL4K8r2.gif;https://nekocdn.com/images/TsUllNqd.gif;https://nekocdn.com/images/sR24oYI-.gif;https://nekocdn.com/images/vjr7ypWk.gif;https://nekocdn.com/images/58Inc02Q.gif;https://nekocdn.com/images/-WzQchUs.gif;https://nekocdn.com/images/21-UJ4ra.gif;https://nekocdn.com/images/eH5chnrc.gif;https://nekocdn.com/images/bstfs38a.gif;https://nekocdn.com/images/xgUXQBW7.gif;https://nekocdn.com/images/KN2N2zO9.gif;https://nekocdn.com/images/2dcGhKDh.gif;https://nekocdn.com/images/k3Yisy6d.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
$onlyNSFW[**⚠️ | No puedes usar este comando aqui 😳**]
`
} 