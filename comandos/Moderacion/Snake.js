module.exports = {
  name: "snake",
  usage: "snake",
  description: "Juega el juego de la serpiente",
  code: `$djsEval[(async () => {
        const { Leafsnake } = require('leaf-utils')

new Leafsnake({
message: message,
embed: {
title: 'Juego de Serpiente (snake)',
timestamp: true,
color: 'RANDOM',
OverTitle: 'Juego Finalizado',
},
snake: { head: '🟩', body: '🟩', tail: '🟩', over: '💀' },
          emojis: {
            board: '⬛', 
            food: '🍎',
            up: '🔼', 
            right: '▶️',
            down: '🔽',
            left: '◀️',
          },
foods: ['🍎', '🍇', '🍊', '🍒'],
stopButton: 'Detener',
othersMessage: 'No puedes usar los botones',
}).startGame();
})()]
$suppressErrors`
}