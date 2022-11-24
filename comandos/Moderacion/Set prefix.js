module.exports = {
  name: "prefix",
  usage: "prefix <nuevo prefix> / prefix",
  description: "Cambia el prefijo del bot, si no encuentra mensaje muestra el prefijo actual del servidor",
  aliases: ["set-prefix"],
  code: `$setServerVar[prefix;$message[1]]
$title[1;Cambio de Prefix]
$addField[1;Antiguo Prefix:;\`$getServerVar[prefix]\`;no]
$addField[1;Nuevo Prefix:;\`$message[1]\`;no]
$footer[1;Cambiado por $userTag]
$addTimestamp[1]
$thumbnail[1;$authorAvatar]
$color[1;RANDOM]
$onlyPerms[admin;**⚠️ | No eres administrador**]
$onlyIf[$message[1]!=;**Mi prefix para este servidor es \`$getServerVar[prefix]\`**]`
} 