module.exports = { 
   name: "deredere",
  usage: "deredere <@usuario> (opcional)",
  description: "Enseña que estas enamorado de algo o de alguien",
   code: `$title[1;$replaceText[$replaceText[$checkContains[$mentioned[1];$authorID];true;$username se siente enamorad@];false;$username esta enamorad@ de $username[$mentioned[1]]]]
$image[1;$randomText [https://nekocdn.com/images/IFejdVyn.gif;https://nekocdn.com/images/X03mYSIf.gif;https://nekocdn.com/images/-T3jFkST.gif;https://nekocdn.com/images/kO1up7WS.gif;https://nekocdn.com/images/nrZT5zxlA.gif;https://nekocdn.com/images/-wWbxYpF_.gif]]
$onlyIf[$mentioned[1]!=$clientID;**⚠️ | Menciona a otro usuario <3**]
$color[1;RANDOM]
`
}