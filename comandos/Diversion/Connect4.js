module.exports = {
  name: "connect4",
  code: `$djsEval[(async () => {
    const { Connect4 } = require("leaf-utils");

    await Connect4({
        message: message,
        client: client,
        slash_command: false,
        time: 300000,
        opponent: message.mentions.users.first(),
        embed: {
            title: "Connecta 4",
            color: "RED",
        },
        challenge: {
            acceptButton: "Aceptar",
            denyButton: "Rechazar",
        },
        emojis: {
            player1: "🔴",
            player2: "🟡",
        },
        noUser: "⚠️** | Menciona a un usuario**",
        acceptMessage: "{{player}} te ha retado {{opponent}}",
        cancelMessage: "{{opponent}} ah rechazado tu reto",
        endMessage: "Reto no aceptado a tiempo!",
        timeoutMessage: "Juego finalizado por inactividad",
        authorOnly: "**⚠️ | Tu no puedes usar los botones**",
    });
})()]
$onlyIf[$isBot[$mentioned[1]]!=true;⚠️** | No puedes juagar con bots**]
$onlyIf[$mentioned[1]!=$authorID;⚠️** | Menciona a un usuario**]
$suppressErrors`
}