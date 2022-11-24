module.exports = [{
    name: "lock",
    $if: "v4",
    code: `
$if[$findChannel[$message;no]==$channelID]
$onlyIf[$hasPermsInChannel[$channelID;$authorID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Canal ya Bloqueado}{description:Este canal ya a sido bloqueado}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$elseIf[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Bloqueo]
$description[1;El canal actual se ha bloqueado para los miembros que no tienen permiso para \`administrar canal\`]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$channelID;-sendmessage]
$onlyIf[$hasPermsInChannel[$channelID;$authorID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Canal ya Bloqueado}{description:Este canal ya a sido bloqueado}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$elseIf[$message!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Bloqueo]
$description[1;El canal <#$findChannel[$message;no]> se ha bloqueado para los miembros que no tienen permiso para \`administrar canal\`. ]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$findChannel[$message;no];-sendmessage]
$onlyIf[$channelType[$findChannel[$message;no]]==text;]
$onlyIf[$hasPermsInChannel[$findChannel[$message;no];$guildID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Canal ya Bloqueado}{description:Este canal ya a sido bloqueado}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$onlyIf[$channelExists[$findChannel[$message;no]]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Invalid Channel}{description:It seems like that channel doesn't exist in this server. You could try mentioning the channel, type the channel ID, or type the channel name.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$endIf
`
}, {
        name: "unlock",
        $if: "v4",
        code: `
$if[$findChannel[$message;no]==$channelID]
$onlyIf[$hasPermsInChannel[$channelID;$authorID;sendmessage]!=true;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Unlocked}{description:This channel is already unlocked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$elseIf[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Unlock]
$description[1;Current channel has been unlocked.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$channelID;/sendmessage]
$onlyIf[$hasPermsInChannel[$channelID;$authorID;sendmessage]!=true;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Unlocked}{description:This channel is already unlocked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$elseIf[$message!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Unlock]
$description[1;The channel <#$findChannel[$message;no]> has been unlocked.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$findChannel[$message;no];/sendmessage]
$onlyIf[$channelType[$findChannel[$message;no]]==text;]
$onlyIf[$hasPermsInChannel[$findChannel[$message;no];$authorID;sendmessage]!=true;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Unlocked}{description:That channel is already unlocked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$onlyIf[$channelExists[$findChannel[$message;no]]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Invalid Channel}{description:It seems like that channel doesn't exist in this server. You could try mentioning the channel, type the channel ID, or type the channel name.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$endIf
`},{
        name: "lock-all",
        code: `
$forEachGuildChannel[1;{};L1;]
$author[1;$userTag;$authorAvatar;]
$title[1;Lock All]
$description[1;Each and every channel has been locked.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
`},{
        name: "L1",
        type: "awaited",
        code: `
$modifyChannelPerms[$guildID;$channelID;-sendmessage]
`},{
        name: "unlock-all",
        code: `
$forEachGuildChannel[1;{};L2;]
$author[1;$userTag;$authorAvatar;]
$title[1;Unlock All]
$description[1;Each and every channel has been unlocked.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
`},{
        name: "L2",
        type: "awaited",
        code: `
$modifyChannelPerms[$guildID;$channelID;/sendmessage]
`
}]