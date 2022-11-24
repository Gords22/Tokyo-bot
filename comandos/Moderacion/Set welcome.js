module.exports = [{
  name: "set-welcome",
  usage: "set-welcome",
  description: "Crea un sistema de bienvenidas para tu servidor",
  aliases: ["welcome"],
  code: `$deleteIn[1m]
$title[1;Configuracion de Bienvenida]
$description[1;Que deseas configurar primero?]
$footer[1;Selecciona un Boton (este mensaje se eliminara en 1 minuto)]
$color[1;RANDOM]
$addButton[1;Canal;3;canal;false]
$addButton[1;Mensaje;3;mensaje;false]
$addButton[1;Fondo;3;fondo;false]
$addButton[1;Resetear;danger;reset;false]
$onlyPerms[admin;⚠️** | No eres administrador**]`
},{
  name: "fondo",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[⚠️** | Funcion eliminada temporalmente**;;;;;yes]`
},{
  name: "reset",
  type: "interaction",
  prototype: "button",
  code: `$resetServerVar[canalwel]
$resetServerVar[mensajewel]
$resetServerVar[fondowel]
$interactionReply[✅** | Configuraciones Reseteadas**;;;;;yes]`
},{
  name: "canal",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Configuracion de canal}{description:Menciona un canal a continuacion}{footer:Tienes 1 minuto para responder}
{color:RANDOM}}]
$awaitMessages[$channelID;$authorID;1m;everything;set-canal;⚠️** | Tu tiempo se acabo $username**]`
}, {
  name: "set-canal",
  type: "awaited",
  code: `$setServerVar[canalwel;$findChannel[$message[1]]]
$title[1;✅ | Canal configurado correctamente]
$description[1;Canal configurado como: <#$findChannel[$message[1]]>]
$color[1;RANDOM]`
}, {
  name: "mensaje",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Configuracion del mensaje}{description:Escribe un mensaje para las bienvenidas}{field:Puedes usar estas siglas para tu comando:\`(user.tag), (user.mention), (server.name), (user.name), \(members.count)\`:no} {color:RANDOM}{footer:Tienes 5 minutos para responder}}]
$awaitMessages[$channelID;$authorID;5m;everything;set-mensaje;⚠️** | Tu tiempo se acabo $username**]
`
}, {
  name: "set-mensaje",
  type: "awaited",
  code: `$setServerVar[mensajewel;$message]
$title[1;✅ | Mensaje configurado correctamente]
$description[1;Mensaje configurado como: $message]
$color[1;RANDOM]
`
}, {
  name: "fondo1",
  type: "interaction",
  prototype: "button",
  code: `$interactionReply[;{newEmbed:{title:Configuracion del fondo}{description:Proporciona un link de alguns imagen para el fondo}{field:Formatos validos:\`png, jpg, jpeg\`:no}{color:RANDOM}{footer:Debes responder en 3 minutos}}]
$awaitMessages[$channelID;$authorID;3m;everything;set-fondo;⚠️** | Tu tiempo se acabo $username**]`
}, {
  name: "set-fondo",
  type: "awaited",
  code: `$setServerVar[fondowel;$message[1]]
$title[1;✅ | Fondo configurado correctamente]
$description[1;Fondo configurado como:]
$image[1;$message[1]]
$color[1;RANDOM]
$onlyIf[$isValidImageLink[$messge[1]]!=false;⚠️** | Debes poner un link de imagen valido**]
$onlyIf[$isValidLink[$message[1]]!=false;⚠️** | Debe ser un link $username**]`
}]