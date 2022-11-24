module.exports = {
  name: "addemoji",
  aliases: ["ad"],
  usage: "addemoji <emoji/emojiID> <nombre>",
  description: "Agrega un emoji de otro servidor al server",
  code: `
Emoji $addEmoji[$guildID;https://cdn.discordapp.com/emojis/$replaceText[$replaceText[$checkCondition[$checkContains[$message[1];<]$checkContains[$message[1];:]$checkContains[$message[1];>]==truetruetrue]$isNumber[$message[1]];truefalse;$replaceText[$advancedTextSplit[$message[1];:;3];>;]];falsetrue;$message[1]];$message[2];yes] añadido con el nombre de: **$message[2]**
$onlyIf[$charCount[$message[2]]>=2;⚠️ | **Debe poner un nombre más largo que 2 caracteres**]
$onlyIf[$message[1]!=;⚠️** | parece que no usaste bien el comando**
**Uso**: \`$getServerVar[prefix]ad <emoji/emojiID> <nombre>\`]
$onlyIf[$message[2]!=;⚠️** | parece que no usaste bien el comando**
**Uso**: \`$getServerVar[prefix]ad <emoji/emojiID> <nombre>\`]
$onlyPerms[admin;⚠️** | Necesitas permisos de administrador**]
$onlyBotPerms[admin;**⚠️ | No tengo suficientes permisos**]`
}