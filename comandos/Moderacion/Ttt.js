module.exports = {
  name: "tictactoe",
  usage: "tictactoe <@usuario>",
  description: "Reta a un usuario a un desafio de tic tac toe",
  aliases: ["ttt"],
  code: `$djsEval[(async () => {
let opponent = message.mentions.members.first() 
const { Leaftictactoe } = require('leaf-utils')

new Leaftictactoe({
  message: message,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Juego Tic Tac Toe',
    color: 'RANDOM',
  },
  oEmoji: '⭕', 
  xEmoji: '❌',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  turnMessage: 'es el turno de **{player}**',
  waitMessage: 'Espera a tu oponente...',
  askMessage: 'Oye {opponent}, {challenger} te esta retando a un juego de Tic Tac Toe',
  cancelMessage: 'tu reto ah sido rechazado',
  timeEndMessage: 'No se ah respondido a el reto el juego se ah cancelado',
  drawMessage: '¡Es un empate!',
  winMessage: '**{winner}** gana el juego',
  gameEndMessage: 'El juego quedo incompleto :/',
}).startGame();
})()]
$onlyIf[$isBot[$mentioned[1]]!=true;**⚠️ | No puedes jugar con bots**]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | No puedes jugar contigo mismo**]`
}