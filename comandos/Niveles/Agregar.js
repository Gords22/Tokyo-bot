module.exports = {
  name: "$alwaysExecute",
  code: `$djsEval[(async () => {
const levels = require("discord-xp")

const hasLeveledUp = await levels.appendXp("$authorID", "$guildID", $random[1;30])

if(hasLeveledUp) { 
const u = await levels.fetch("$authorID", "$guildID", true)

message.client.channels.cache.get("$getServerVar[levels]").send({ content: \`$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[msglevel];(user.mention);<@\${user.userID}>];(user.tag);$userTag];(level);\${u.level}];(user.name);$username]\` })
}

})()]
$onlyIf[$getServerVar[level]!=false;]
$onlyIf[$toLowercase[$message]!=$getServerVar[prefix]rank;]
$cooldown[7s;]
`
}
