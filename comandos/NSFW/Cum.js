module.exports = {
  name: "cum",
  usage: "cum <@usuario>",
  description: "Muestra que te vienes en un usuario",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username se ah venido];false;$username se ah venido en $username[$mentioned[1]]]
$color[1;RANDOM]
$image[1;$randomText[https://nekocdn.com/images/4FqkgH6j.gif;
https://nekocdn.com/images/J-gSa6uB.gif;
https://nekocdn.com/images/GqXveid2.gif;
https://nekocdn.com/images/ztHZIEV1.gif;
https://nekocdn.com/images/22GmcXDg.gif;
https://nekocdn.com/images/9BX3UAJP.gif;
https://nekocdn.com/images/TPVS0oRs.gif;
https://nekocdn.com/images/MHLq1ECn.gif;
https://nekocdn.com/images/HA4syz43.gif;
https://nekocdn.com/images/-ueCH_pq.gif;
https://nekocdn.com/images/JB4vMJUH.gif]]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey¡Noo! Menciona a alguien mas**]
$onlyNSFW[**⚠️ | No puedes usar este comando aqui 😳**]
`
}
