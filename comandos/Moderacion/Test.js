module.exports = {
  name: "test-welcome",
  usage: "test-welcome",
  description: "Muestra como seran las bienvenidas / testea las bienvenidas",
  aliases: ["test welcome"],
  code: `$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[mensajewel];(user.tag);$userTag];(server.name);$serverName];(user.name);$username];(members.count);$membersCount[$guildID]];(user.mention);<@$authorID>]
$attachment[https://some-random-api.ml/welcome/img/6/stars?type=join&avatar=$replaceText[$authorAvatar;webp;png]&username=$uri[$username;encode]&discriminator=$discriminator&guildName=$uri[$serverName;encode]&textcolor=white&memberCount=$membersCount&key=G7ztt2d65ioePTCwELCAz7peRzuAdlkhiGtAfeToa9r9pHfeS1xyrfseOrM6Ghwc;tokyo-nida-xdd.png;url]
$onlyIf[$getServerVar[canalwel]!=;**El sistema de Bienvenidas esta apagado $username 🤡**]`
}