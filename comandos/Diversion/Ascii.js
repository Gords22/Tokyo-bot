module.exports = {
  name: "ascii",
  usage: "ascii <texto>",
  description: "Convierte un texto en arte Ascii",
  code: `$djsEval[const figlet = require('figlet');

figlet(\`$message\`, (err, result) => {
 message.channel.send(\`\\\`\\\`\\\`
\${result}
\\\`\\\`\\\`\`)
})
]
$onlyIf[$message!=;⚠️** | Escribe un texto**]
$suppressErrors[⚠️** | Formato de Texto no valido**]`
}