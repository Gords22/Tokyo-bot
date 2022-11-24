module.exports = {
  name: "kiss",
  usage: "kiss <@usuario>",
  description: "Enseña que besas a un usuario",
  code: `$title[1;$username le dio un beso a $username[$mentioned[1]]]
$image[1;$randomText[https://nekocdn.com/images/VsbgMg0S.gif;https://nekocdn.com/images/NmmVj6HdJ.gif;https://nekocdn.com/images/JKRSP4Xn.gif;https://nekocdn.com/images/Md8sga2c.gif;https://nekocdn.com/images/tNfkJjuPK.gif;https://nekocdn.com/images/GQkjmNCw.gif;https://nekocdn.com/images/XfQdb7D3h.gif;https://nekocdn.com/images/fk3kNXy3I.gif;https://nekocdn.com/images/oUiAFsDZ.gif;https://nekocdn.com/images/7zsWss3Az.gif;https://nekocdn.com/images/SiZwWxBhA.gif;https://nekocdn.com/images/dUTutY96.gif;https://nekocdn.com/images/-mqrr0BL.gif;https://nekocdn.com/images/77TT-530.gif;https://nekocdn.com/images/iKvlZdyw.gif;https://nekocdn.com/images/g2FiClix.gif;https://nekocdn.com/images/uBg5v6aN.gif;https://nekocdn.com/images/o85u_nFq.gif;https://nekocdn.com/images/sv7eQBqu.gif;https://nekocdn.com/images/dUTutY96.gif;https://nekocdn.com/images/_7OKtwuz.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]
$onlyIf[$mentioned[1]!=$clientID;**No necesito un beso pero gracias <3**]`
} 