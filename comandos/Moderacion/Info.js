module.exports = {
  name: "command-info",
  description: "Muestra la informacion de comandos",
  usage: "command-info <nombre del comando>",
  aliases: ["info", "command"],
  code: `$title[1;❕ | Informacion de comando]
$addField[1;Uso:;\`$getServerVar[prefix]$commandInfo[$message;usage]\`;no]
$addField[1;Alias:;\`$replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]==;];false;$replaceText[$commandInfo[$message;aliases];,;, ]];true;No tiene alias]\`;no]
$addField[1;Descripcion:;\`$commandInfo[$message;description]\`;no]
$addField[1;Nombre:;\`$commandInfo[$message;name]\`;no]
$thumbnail[1;$userAvatar[$clientID]]
$color[1;RANDOM]
$addTimeStamp[1;$dateStamp]
$onlyIf[$commandInfo[$message;name]!=;⚠️** | Ese comando no existe**]
$onlyIf[$message!=;⚠️** | Escribe el nombre o alias del comando a buscar**]
`
} 