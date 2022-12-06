module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  code: `$djsEval[(async () => { 
const { TicTacToe } = require("leaf-utils");

await TicTacToe({
    message: message,
    slash_command: false,
    time: 300000,
    opponent: message.mentions.users.first(),
    embed: {
        title: "Tic Tac Toe",
        color: "RED",
    },
    challenge: {
        acceptButton: "Aceptar",
        denyButton: "Rechazar",
    },
    emojis: {
        xEmoji: "❌",
        oEmoji: "🔵",
    },
    colors: {
        xEmoji: "DANGER",
        oEmoji: "PRIMARY",
    },
    noUser: "**⚠️ | Menciona a un usuario**",
    acceptMessage: "{{player}} Te ah retado {{opponent}}",
    cancelMessage: "{{opponent}} Te ah rechazado el reto",
    endMessage: "Reto no aceptado a tiempo!",
    authorOnly: "**⚠️ | Tu no puedes usar los botones**",
});
})()]
$onlyIf[$isBot[$findMember[$message]]!=true;**⚠️ | No puedes jugar con bots**]
$onlyIf[$findMember[$message;false]!=;**⚠️ | Menciona a un usuario**]
$suppressErrors`
}