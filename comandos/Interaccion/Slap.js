module.exports = {
   name: "slap",
  usage: "slap <@usuario>",
  description: "Enseña que le das una cachetada a un usuario",
   code: `$title[1;$username le dio una cachetada a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/mPM4mhrV.gif;https://nekocdn.com/images/mPM4mhrV.gif;https://nekocdn.com/images/x1_bGNp6.gif;https://nekocdn.com/images/DKG8rDBj.gif;https://nekocdn.com/images/gqZCqLOa-.gif;https://nekocdn.com/images/U_PBkWNK.gif;https://nekocdn.com/images/caNp-cCFJ.gif;https://nekocdn.com/images/4OGFfco1W.gif;https://nekocdn.com/images/ru6ds5JS.gif;https://nekocdn.com/images/OLU3EvHw.gif;https://nekocdn.com/images/9-b0vW08.gif;https://nekocdn.com/images/P7YGdSQL.gif;https://nekocdn.com/images/Cce4ShGk.gif;https://nekocdn.com/images/mdpcqfEf.gif;https://nekocdn.com/images/gcQvEOSI.gif;https://nekocdn.com/images/VX9seotd.gif;https://nekocdn.com/images/OPvRFcsw.gif;https://nekocdn.com/images/j0GLhnKc.gif;https://nekocdn.com/images/fJhrnfJ3P.gif;https://nekocdn.com/images/N3_DyuEDK.gif;https://nekocdn.com/images/MuTW1A8a.gif;https://nekocdn.com/images/rZ8poeMB.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**No me puedes pegarme a mi :p**]
`
}