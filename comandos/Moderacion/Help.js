module.exports = [{
  usage: "help",
  description: "Manda la lista completa de comandos",
  name: "help", 
  code: `$title[1;❕ | Comandos de ayuda]
$description[1;Puedes usar el comando \`$getServerVar[prefix]info <comando>\` para mas ayuda]
$footer[1;Selecciona una de las categorias]
$color[1;RANDOM]
$thumbnail[1;https://i.ibb.co/p14CS6z/Picsart-22-04-03-22-30-31-260.png]
$addSelectMenu[1;menu;📑 ¿Que categoria quieres ver?;1;1;no;Diversion:Lista de Comandos de Diversion:men1::$customEmoji[jumeco;854153356166955069];Moderacion:Lista de Comandos de Moderacion:men2::$customEmoji[mod;854153356166955069];Interaccion o Emociones:Lista de Comandos de Interaccion:men3::$customEmoji[ani;854153356166955069];NSFW:Lista de Comandos de NSFW:men4::$customEmoji[smug;854153356166955069];Utilidad:Lista de Comandos de Utilidad:men5::$customEmoji[niggapin;854153356166955069];Niveles:Lista de Comandos de Niveles:men6::$customEmoji[level;808808003645079552]]`
},{
  type: "interaction", 
  name: "menu", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{title:Comandos de Diversion}{description:\`snake, tictactoe, calculator, connect4, say, pixelate, invert, gay, 8ball, grey, ascii\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men1;] 
`
},{
  type: "interaction", 
  name: "menu", 
  prototype: "selectMenu", 
  code: `$interactionUpdate[;{newEmbed:{title:Comandos de Moderacion}{description:\`kick, ad, nuke, clear\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men2;] 
`
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `
$interactionUpdate[;{newEmbed:{title:Comandos de Interaccion o Emociones}{description:\`banghead, blush, Boom, bored, confuse, cry, dab, dance, deredere, disgust, drink, drunk, eat, facepalm, fail, fly, happy, hi, hug, jump, kill, kiss, lewd, like, nope, peek, pout, psycho, run, sad, scream, shrung, sing, slap, sleep, smile, smug, spank, teehee, think, vomit, wag, wasted, yandere\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men3;]
  `
},{
  type: "interaction",
  name: "menu",
  prototype: "selectMenu",
  code: `
$interactionUpdate[;{newEmbed:{title:Comandos de NSFW}{description:\`fuck, cum, anal, boobs, booblob, suck, kuni, lewdkitsune, pussy, fap, happyend, hentai\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$channelNSFW[$channelID]!=false;{
 "content" : "⚠️** | Esta categoria solo puede verse en canal NSFW**",
 "ephemeral" : true,
 "options" : {"interaction" : true}
}]
$onlyIf[$interactionData[values[0]]==men4;]
  `
},{
  name: "menu",
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Comandos de Utilidad}{description:\`user-info, news, command-info\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men5;]`
},{
  name: "menu",
  type: "interaction",
  prototype: "selectMenu",
  code: `$interactionUpdate[;{newEmbed:{title:Comandos de Niveles}{description:\`set-levels, set-background, rank, leaderboard\`}{color:RANDOM}{thumbnail:$userAvatar[$clientID]}};{actionRow:{selectMenu:menu:📑 ¿Que categoria quieres ver?:1:1:no:{selectMenuOptions:Diversion:men1:Lista de Comandos de Diversion:false:<a:jumeco:929962378186092566>}{selectMenuOptions:Moderacion:men2:Lista de Comandos de Moderacion:false:<:mod:929960007909392395>}{selectMenuOptions:Interaccion o Emociones:men3:Lista de Comandos de Interaccion:false:<a:ani:929961359314153492>} {selectMenuOptions:NSFW:men4:Lista de Comandos de NSFW:false:<:smug:929960947546746890>}{selectMenuOptions:Utilidad:men5:Lista de Comandos de Utilidad:false:<:niggapin:944405889799057429>}{selectMenuOptions:Niveles:men6:Lista de Comandos de Niveles:false:<:level:959861289360977970>}}}]
$onlyIf[$interactionData[values[0]]==men6;]`
}] 