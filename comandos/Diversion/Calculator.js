module.exports = {
  name: "calculator",
  usage: "calculator",
  description: "Manda una calculadora hecha en botones",
  code: `$djsEval[(async () => {
	const { Calculator } = require("leaf-utils");

	await Calculator({
		message: message,
		slash_command: false,
		time: 300000,
		embed: {
			title: "Tokyo Calculadora",
			color: "#FF5733",
		},
		invalidQuery: "La ecuacion dada no es valida",
		authorOnly: "**Solo <@{{author}}> puede usar los botones**",
	});
})()]
$suppressErrors`
}