module.exports = {
  name: "set-levels",
  description: "Configura el sistema de niveles o tambien lo desactiva",
  usage: "set-levels false | <#canal> <mensaje> | default default",
  aliases: ["levels","level","set-level"],
  $if: "v4",
  code: `$if[$message[1]==false]
$setServerVar[level;false]
✅** | El sistema de niveles se desactivo**
$else
$setServerVar[levels;$replaceText[$replaceText[$checkCondition[$message[1]==default];true;$channelID];false;$findChannel[$message[1]]]]
$setServerVar[level;true]
$setServerVar[msglevel;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==default];false;$messageSlice[1]];true;$getServerVar[msglevel]]
$title[1;Sistema de niveles activado]
$color[1;GREEN]
$description[1;Canal: $replaceText[$replaceText[$checkCondition[$message[1]==default];false;<#$findChannel[$message[1]]>];true;\`Configuracion Predeterminada\`]
Mensaje: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==default];false;$messageSlice[1]];true;\`Configuracion Predeterminada\`]]
$addTimeStamp[1]
$endif
$onlyPerms[admin;⚠️** | No eres administrador**]`
}