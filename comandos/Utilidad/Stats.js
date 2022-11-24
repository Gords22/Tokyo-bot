module.exports = {
  name: "stats",
  description: "Muestra las estadisticas del bot",
  usage: "stats",
  code: `$author[1;Tokyo Estadisticas;$userAvatar[$clientID]]
$color[1;#EE75E0]
$description[1;__General__
ID: **$clientID**
Nombre: **$username[$clientID]**
Apodo: **$replaceText[$replaceText[$checkCondition[$nickName[$clientID]==];true;Sin Apodo];false;$nickName[$clientID]]**
Servidores: **$numberSeparator[$serverCount]**
Usuarios: **$numberSeparator[$allMembersCount]**
Cumpleaños: **20/4/2021**
Activo: **$uptime[humanize]**
Creadores: **$userTag[812447625096986635], $userTag[710941335510712342]**

__Base de Datos__
Ping: **$pingms**
Ram: **$truncate[$ram]MB/$replaceText[$abbreviate[$maxRam];K;GB;-1]**
Cpu: **$cpu%/100%**
Plataforma: **$replaceText[$djsEval[require ('os').platform();yes];linux;Linux;-1]**]
$image[1;https://i.ibb.co/p14CS6z/Picsart-22-04-03-22-30-31-260.png]
$addTimeStamp[1]
$addButton[1;Vota por Mi;5;https://top.gg/bot/929585145688760360;no;❤]
`
}