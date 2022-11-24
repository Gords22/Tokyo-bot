module.exports = {
  name: "boobjob",
  usage: "boobjob <@usuario>",
  description: "hazle un boobjob a un usuario",
  code: `$title[1;$username le hace una rusa a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/Q-79ZToz.gif;https://nekocdn.com/images/oOCDpJnz.gif;https://nekocdn.com/images/wiOGm_iw.gif;https://nekocdn.com/images/5XkR7m-5.gif;https://nekocdn.com/images/EMVcgMsm.gif;https://nekocdn.com/images/eKj_VVKq.gif;https://nekocdn.com/images/9RB5wvTt.gif;https://nekocdn.com/images/_yYo0sRu.gif;https://nekocdn.com/images/eKWBeGUw.gif;https://nekocdn.com/images/2kK0aJ9W.gif;https://nekocdn.com/images/GBxW7w5S.gif;https://nekocdn.com/images/WgEbkuF1.gif;https://nekocdn.com/images/v9OTPqCj.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**¡Hey! ¡Noo! Menciona a alguien mas**]
$onlyNSFW[**⚠️ | No puedes usar este comando aqui 😳**]
`
} 