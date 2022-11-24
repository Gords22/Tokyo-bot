module.exports = {
	name: 'nuke',
  usage: "nuke -n/-nombre (opcional)",
  description: "Limpia totalmente un canal",
	code: `$deleteChannel[$findChannel[$message[1];yes]]
$channelSendMessage[$cloneChannel[$findChannel[$message[1]];$channel[$findChannel[$message[1]];name];yes];**$replaceText[$replaceText[$checkContains[$message[1];-n;-nombre];true;El canal a sido nukeado];false;El canal ah sido nukeado por $username]**
https://tenor.com/view/explosion-boom-explode-gif-17383346;no]
$onlyBotPerms[admin;**⚠️ | No tengo suficientes permisos]
$onlyPerms[admin;**⚠️ | No puedes usar este comando, no eres administrador**]
`
}