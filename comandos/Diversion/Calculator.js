module.exports = {
  name: "calculator",
  usage: "calculator",
  description: "Manda una calculadora hecha en botones",
  code: `$djsEval[(async () => {
const { calculator } = require('leaf-utils');

await calculator({
			message: message,
			embed: {
				title: 'Calculadora',
				color: 'RANDOM',
				footer: '$userTag',
				timestamp: true,
			},
			disabledQuery: 'La calculadora a sido desactivada',
			invalidQuery: 'La ecuacion proporcionada es invalida',
			othersMessage: 'Solamente <@{{author}}> puede usar los botones',
})
})()]
$suppressErrors`
}