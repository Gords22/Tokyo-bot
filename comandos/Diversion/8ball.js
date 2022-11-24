module.exports = {
  name: "8ball",
  usage: "8ball <pregunta>",
  description: "Haz una pregunta y obtienes una pregunta aleatoria",
  code: `$reply[$messageID;no]
**$randomText[🎱 | Definitivamente si;🎱 | No lo se;🎱 | Es muy ovbio que no;🎱 | Es muy ovbio que si;🎱 | Claro que no;🎱 | tu crees?;🎱 | No lo creo;🎱 | Lo dudo;🎱 | Claro que si;🎱 | Definitivamente no]**
$onlyIf[$message!=;⚠️** | Escribe un mensaje**]`
}