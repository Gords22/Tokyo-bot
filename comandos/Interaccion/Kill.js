module.exports = {
  name: "kill",
  usage: "kill <@usuario>",
  description: "Enseña que matas a un usuario",
  code: `$title[1;$replaceText[$replaceText[$checkContains[$mentioned[1];$clientID];true;$username[$clientID] mato a $username 😈];false;$username mato a $username[$mentioned[1]]]]
$image[1;$randomText[https://nekocdn.com/images/BsSwC-rK.gif;https://nekocdn.com/images/ED7SvvaM.gif;https://nekocdn.com/images/512X1rBhh.gif;https://nekocdn.com/images/7EXP03fh.gif;https://nekocdn.com/images/GinvSokV.gif;https://nekocdn.com/images/FzvmbRFyZ.gif;https://nekocdn.com/images/rnWn_Xia5.gif;https://nekocdn.com/images/41qc0jku.gif;https://nekocdn.com/images/2BkFvaQX.gif;https://nekocdn.com/images/WA_K5JBL.gif;https://nekocdn.com/images/z-YH-uXEP.gif;https://nekocdn.com/images/HNnrdYke.gif;https://nekocdn.com/images/pQhYyBmUa.gif;https://nekocdn.com/images/GcQysFw1.gif;https://nekocdn.com/images/32ZhOAU3.gif;https://nekocdn.com/images/RAeA7zuS.gif;https://nekocdn.com/images/xyQW7qt3.gif;https://nekocdn.com/images/512X1rBhh.gif;https://nekocdn.com/images/6Ma7do22.gif;https://nekocdn.com/images/hd8AByR6.gif;https://nekocdn.com/images/GS63a0Pu.gif;
https://i.pinimg.xom/originals/29/e1/98/29e19856fe521238af416c1ac2e0fe40.gif]]
$color[1;RANDOM]
$onlyIf[$mentioned[1]!=$authorID;**⚠️ | Menciona a un usuario**]`
}