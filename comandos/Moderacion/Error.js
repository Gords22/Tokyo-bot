module.exports = {
type: "functionError",
channel: "952746429225517066",
code: `$title[1;Error en $serverName]
$description[1;__Funcion:__ \`$handleError[function]\`
__Comando:__ \`$handleError[command]\`
__Error:__ \`$handleError[error]\`]
$addTimeStamp[1]
$footer[1;Ejecutado por $userTag]
$color[1;RED]`
}