module.exports = {
  name: "hug",
  usage: "hug <@usuario>",
  description: "Enseña que abrazas a un usuario",
  code: `$title[1;$username le dio un abrazo a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/ZxnDk7Sx.gif;https://nekocdn.com/images/_DKjv1J1.gif;https://nekocdn.com/images/i6wKzufP.gif;https://nekocdn.com/images/1BlXHF4R.gif;https://nekocdn.com/images/trYMVXTu.gif;https://nekocdn.com/images/84RVP9FR.gif;https://nekocdn.com/images/zJz37_q-.gif;https://nekocdn.com/images/6hgY2K1t.gif;https://nekocdn.com/images/8uYwL6G9.gif;https://nekocdn.com/images/7xSdtDj_.gif;https://nekocdn.com/images/rHWL1M78.gif;https://nekocdn.com/images/G28u_mVkK.gif;https://nekocdn.com/images/f_WTij-n.gif;https://nekocdn.com/images/xV5AuVLD.gif;https://nekocdn.com/images/osbqQHgU.gif;https://nekocdn.com/images/UqFzUna9.gif;https://nekocdn.com/images/H31aUh0pH.gif;https://nekocdn.com/images/_HPBDopl.gif;https://nekocdn.com/images/0bUSg7Vq.gif;https://nekocdn.com/images/brs_qFJSz.gif;https://nekocdn.com/images/rxjRvJmt.gif;https://nekocdn.com/images/y-1DCcK2.gifhttps://nekocdn.com/images/X6RLyO-P.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**No gracias no quiero un abrazo**]
`
} 
