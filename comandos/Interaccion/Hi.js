module.exports = {
  name: "hi",
  usage: "hi <@usuario> (opcional)",
  description: "Enseña que estas saludado a un usuario o aun servidor completo",
  aliases: ["hello"], 
  code: `$title[1;$replaceText[$replaceText[$checkContains[$findMember[$message];$authorID];true;$username saluda a Todos];false;$username saluda a $username[$findMember[$message]]]
$color[1;RANDOM]
$image[1;$randomText[https://c.tenor.com/uGN3n2O03GIAAAAC/anime-wave.gif;https://c.tenor.com/eeyZsVwZScsAAAAd/anime-wave.gif;https://c.tenor.com/H4xLf6epW-wAAAAC/anime-wave.gif;https://c.tenor.com/9l2tWpfn9yQAAAAd/anime-wave.gif;https://c.tenor.com/e48wByvWU-IAAAAC/anime-hi.gif;https://nekocdn.com/images/H9r9WLvO.gif;https://nekocdn.com/images/KyQIHhaB.gif;https://nekocdn.com/images/Bn-icMAP.gif;https://nekocdn.com/images/7bTP8yNH.gif;https://nekocdn.com/images/hNeYMiMI.gif;https://nekocdn.com/images/07J76JHt.gif;https://nekocdn.com/images/k6PVYNk7.gif;https://nekocdn.com/images/xOQV01fv9.gif;https://nekocdn.com/images/9diu1IYa.gif;https://nekocdn.com/images/lGTjW_NS.gif;https://nekocdn.com/images/eI_o5f0O.gif;https://nekocdn.com/images/8niLqqtN.gif;https://nekocdn.com/images/RP63UhGs.gif;https://nekocdn.com/images/0JFPkxFu.gif;https://nekocdn.com/images/MTZ3_-Mp.gif;https://nekocdn.com/images/8jGtkWQu.gif;https://nekocdn.com/images/UIQLXXPK.gif;https://nekocdn.com/images/2FnX323S.gif;https://nekocdn.com/images/q2s8BGcu.gif;https://nekocdn.com/images/hzdDXxu_.gif;https://nekocdn.com/images/UwbYgNNT.gif;https://nekocdn.com/images/Ck3yZHpaW.gif;https://nekocdn.com/images/M6B4wNoP.gif]]
$onlyIf[$mentioned[1]!=$clientID;Hola!!! **$username** 🤙]
`
}
