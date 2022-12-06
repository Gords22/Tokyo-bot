module.exports = {
  name: "snake",
  code: `$djsEval[(async () => {
    const { Snake } = require("leaf-utils");

    new Snake({
        message: message,
        slash_command: false,
        snake: {
            head: "🟢",
            body: "🟩",
            tail: "🟢",
            over: "💀",
        },
        emojis: {
            board: "⬛",
            food: "🍎",
            up: "⬆️",
            right: "➡️",
            down: "⬇️",
            left: "⬅️",
        },
        foods: ["🍎", "🍇", "🍊", "🍕", "🥕", "🥞"],
        stopButton: {
            stopLabel: "Detener",
            stopStyle: "DANGER",
        },
        authorOnly: "**⚠️ | Solamente {{author}} puede usar los botones**",
    }).startGame();
})()]`
}