module.exports = {
  name: "happy-end",
  usage: "happy-end <@usuario>",
  description: "Muestra un happy end en un usuario",
  code: `$title[1;$username se vino en la boca de $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/_jLru6pG.gif;https://nekocdn.com/images/eQERVz0I.gif;https://nekocdn.com/images/A9FmG4DN.gif;https://nekocdn.com/images/V_jqzkE_.gif;https://nekocdn.com/images/--Ovu-eb.gif;https://nekocdn.com/images/dWDJjAUg.gif;https://nekocdn.com/images/YvqO_uPQ.gif;https://nekocdn.com/images/KBkPQrpa.gif;https://nekocdn.com/images/JAxxPqsi.gif;https://nekocdn.com/images/eQERVz0I.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
$onlyNSFW[⚠️** | No puedes usar este coamando aqui 😳**]
`
} 