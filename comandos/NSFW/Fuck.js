module.exports = {
  name: "fuck",
  usage: "fuck <@usuario>",
  description: "Muestra que te follas a un usuario",
  code: `$title[1;$username se folló a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/mqqzj6N3.gif;https://nekocdn.com/images/gfpTAkY6.gif;https://nekocdn.com/images/CMn3bkSn.gif;https://nekocdn.com/images/ejOe9HwT.gif;https://nekocdn.com/images/UwC7sm4r.gif;https://nekocdn.com/images/J6n9kr7r.gif;https://nekocdn.com/images/ENN8YSVX.gif,https://nekocdn.com/images/MXjoubgt.gif;https://nekocdn.com/images/4LMgVPlq.gif;https://nekocdn.com/images/1KWHPe9O.gif;https://nekocdn.com/images/ZrT4z_5-.gif;https://nekocdn.com/images/SEBOTPdx.gif;https://nekocdn.com/images/SEBOTPdx.gif;https://nekocdn.com/images/dtSuq21g.gif;https://nekocdn.com/images/ymNfOSgd.gif;https://nekocdn.com/images/Bh4I3IoX.gif;https://nekocdn.com/images/t0ZHxadD.gif;https://nekocdn.com/images/8BlZBBaA.gif;https://nekocdn.com/images/gkKkMFtr.gif;https://nekocdn.com/images/gkKkMFtr.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
$onlyNSFW[**⚠️ | No puedes usar este comando aqui 😳**]
`
} 