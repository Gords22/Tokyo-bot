module.exports = {
  name: "user-info",
  usage: "user-info <@usuario> (opcional)",
  description: "Muestra la informacion del usuario",
  aliases: ["userinfo"],
  code: `$title[1;Informacion de Usuario]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$mentioned[1]]]
$addField[1;Roles del Usuario;$userRoles[$mentioned[1];$guildID;mention;, ];no]
$addField[1;Fecha de entrada al servidor;$formatDate[$memberJoinedDate[$findMember[$message];$guildID];MM/DD/YYYY, hh:mm:ss A];no]
$addField[1;Fecha de creacion de la cuenta;$creationDate[$mentioned[1];date];no]
$addField[1;Estado Personalizado;$replaceText[$getCustomStatus[$mentioned[1];$guildID;emoji];none;] $replaceText[$getCustomStatus[$mentioned[1];$guildID;state];none;Sin estado]
$addField[1;Platforma;$replaceText[$replaceText[$replaceText[$replaceText[$platform[$findMember[$message]];none;Ninguna];web;🌐 | Web];mobile;📱 | Telefono];desktop;💻 | PC]]
$addField[1;Es bot?;$replaceText[$replaceText[$isBot[$mentioned[1]];true;🤖 | Si es bot];false;👤 | No es bot];no]
$addField[1;Estado;$replaceText[$replaceText[$replaceText[$replaceText[$status[$mentioned[1]];dnd;🔴 | No molestar];idle;🟡 | Ausente];offline;⚪ | Invisible / Desconectado];online;🟢 | En linea];no]
$description[1;**Nombre:** $username[$mentioned[1]]
**Apodo:** $replaceText[$replaceText[$checkCondition[$nickname[$findMember[$message]]==];true;Sin Apodo];false;$nickname[$findMember[$message]]]
**Tag:** $discriminator[$mentioned[1]]
**ID:** $mentioned[1]]
`
}