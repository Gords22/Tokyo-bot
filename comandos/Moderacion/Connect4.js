module.exports = {
  name: "connect4",
  usage: "connect4 <@usuario>",
  description: "Reta a un jugador a un desafio de conecta 4",
  code: `$djsEval[(async () => {
let opponent = message.mentions.users.first()
  
const { Connect4 } = require('leaf-utils')
  
new Connect4({
  message: message,
  opponent: message.mentions.users.first(),
  embed: {
      title: 'Conecta 4',
      color: 'RANDOM',
    },
    emojis: {
      player1: '🔵',
      player2: '🟡'
    },
    waitMessage: 'Esperando al oponente',
    turnMessage: 'Es el turno de **{player}** | {emoji}',
    winMessage: '¡**{winner}** gana el juego!',
    gameEndMessage: 'El juego esta incompleto :/',
    drawMessage: '¡Es un empate!',
    othersMessage: 'No puedes usar los botones',
    askMessage: 'Oye {opponent}, {challenger} te esta retando a un juego de Conecta 4!',
    cancelMessage: 'Tu reto ah sido rechazado :(',
    timeEndMessage: 'No se ah respondido al reto, El juego se ah cancelado',
  }).startGame()
})()]
$suppressErrors`
}