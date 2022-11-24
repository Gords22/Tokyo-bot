module.exports = {
  name: "clear",
  aliases: ["purge"],
  description: "Limpia una cantidad de mensajes con filtro especifico",
  usage: "clear <cantidad> <all/@mencion (opcional)> <#canal (opcional)>",
  code: `$deleteIn[5s]
$title[1;✅ | Mensajes limpiados correctamente]
$description[1;Mensajes limpiados: \`$clear[$message[1];$replaceText[$if[$userExists[$findUser[$if[$message[2]==;all;$message[2]]]]==true;$findUser[$message[2]]];all;everyone];yes;$findChannel[$message[3];yes]]\`
Canal: <#$findChannel[$message[3];yes]>
Filtro: $replaceText[$if[$message[2]==;\`Todos\`;$message[2]];all;Todos]
$color[1;RANDOM]
$footer[1;Este mensaje se eliminara en 5s]
$onlyIf[$message>1;⚠️** | Debe ser mayor a 1**]
$onlyIf[$message[1]=<100;⚠️** | Limite de 100 mensajes por comando**]
$onlyIf[$isNumber[$message[1]]!=false;⚠️** | Solamente numeros $username**]
$onlyIf[$message[1]!=;⚠️** | Escribe una cantidad para eliminar**]
$onlyPerms[admin;⚠️ | No tienes permisos para usar este comando**]`
}