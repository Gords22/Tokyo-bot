module.exports = {
  name: "spank",
  usage: "spank <@usuario>",
  description: "Enseña que le das una nalgada a un usuario",
  aliases: ["spanking"],
  code: `$title[1;$username le dio una nalgeada a $username[$mentioned[1]]]
$image[1;$randomText[https://c.tenor.com/5SPNhg5O38oAAAAd/anime-rikka-takanashi.gif;https://c.tenor.com/gScnebhgJn4AAAAC/taritari-anime-spank.gif;https://c.tenor.com/gz7bJXUiPMsAAAAC/stress-reliever.gif;https://c.tenor.com/Ep5dFoM0h5gAAAAC/bad-spank.gif;https://i.kym-cdn.com/photos/images/original/001/052/135/0a9.gif;https://i.imgur.com/6DF495Z.gif?noredirect;http://i.imgur.com/VttcgTa.gif;https://c.tenor.com/TdaDAY_K1wsAAAAC/dragon-ball-spank.gif;https://i.kym-cdn.com/photos/images/newsfeed/000/928/255/280.gif;https://i.imgur.com/nuqYKaS.gif?noredirect;https://c.tenor.com/4RIbgFCLRrUAAAAd/rikka-takanashi-bad-girlgif; https://nekocdn.com/images/fNGk23pB.gif;https://nekocdn.com/images/gOaYlAqT.gif;https://nekocdn.com/images/M8HHs8WB.gif;https://nekocdn.com/images/rs8Hdy2N.gif;https://nekocdn.com/images/DhBVDfPxO.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario travies@ 😈**]
$onlyIf[$mentioned[1]!=$clientID;**Hmmm rico, digo!! Oye no puedes hacer eso!!**]
`
}