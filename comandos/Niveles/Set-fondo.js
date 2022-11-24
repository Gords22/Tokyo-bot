module.exports = {
  name: "set-background",
  description: "Cambia el fondo de la tarjeta de rango",
  aliases: ["set-wallpaper", "sb"],
  usage: "set-background <link de la imagen>",
  code: `$setServerVar[fondoRnk;$message[1]]
$title[1;✅ | Fondo cambiado correctamente]
$description[1;Imagen:]
$image[1;$message[1]]
$color[1;RANDOM]
$addTimeStamp[1]
$onlyIf[$getServerVar[level]!=false;⚠️** | El sistema de niveles esta desactivado**]
$onlyIf[$isValidImageLink[$message[1]]!=false;⚠️** | El link de la imagen no es valida**]
$onlyPerms[admin;**⚠️ | No eres administrador**]`
}