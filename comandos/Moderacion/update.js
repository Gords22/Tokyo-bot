module.exports = {
  name: "update",
  usage: "update",
  aliases: ["up"],
  description: "Actualiza los comandos de mi base de datos (solo mi creador puede usar este comando)",
  code: `$deleteIn[1s]
$updateCommands
$deletecommand
> Listo 
$onlyForIDs[710941335510712342;]
`
}