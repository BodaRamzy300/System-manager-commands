const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id'); 
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////
var statuss = ["+help","+invite","+server support"]; // بالإمكان اضافة المزيد بدون التعديل في الكود
var secound = 5; // عدد الثواني المحددة
client.on("ready", () =>{
  var timeing = Math.floor(secound*1000);
  setInterval(function(){
    var ammount = statuss.length;
    var num = Math.floor(Math.random() * ammount);
    client.user.setActivity(statuss[num], {type: 'PLAYING'})
  }, timeing)
});

  

const prefix = "+"
const developers = "676716074212786199"



      client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
    if (message.author.id ) {
      message.author
        .send(
          `   
         :sparkles: \**Public command\  **   

\`${prefix}server\` **『 معلومات السيرفر 』**
\`${prefix}bot\` **『 معلومات البوت 』**
\`${prefix}sug\` **『 لعمل اقتراح 』 **
\`${prefix}feedback\` **『 لعمل تقيم 』 **
\`${prefix}avatar\`**『 لاظهار صورتك 』** 
\`${prefix}server avatar\`**『 لاظهار صورة السيرفر 』**
\`${prefix}ping\`**『 لمعرفه بنج البوت 』**   
\`${prefix}deves\`**『 لمعرفه معلومات مطور البوت 』**
\`${prefix}time\` **『 لمعرفه الوقت 』**
\`${prefix}user\` **『 لمعرفه معلومات حسابك 』 ** 
\`${prefix}roles\` **『 لرويه رتب السيرفر 』** 
\`${prefix}emojis\` **『 لرويه اموجى السيرفر 』**
\`${prefix}invite\` **『 رابط دعوة البوت 』  ** 
\`${prefix}server support\` **『 سيرفر الدعم الفنى لى البوت 』 **   
\`${prefix}website\` **『 موقع البوت 』  **

:zap: \**Admin command\  **   
  
\`${prefix}kick\` **『 لطرد شخص من السيرفر 』 **
\`${prefix}ban\` **『 لتبنيد شخص من سيرفر 』**
\`${prefix}say\` **『 لنشر رسالة بالبوت 』  **  
\`${prefix}vkick\` **『 لطرد شخص من الغرفه الصوتيه 』 ** 
\`${prefix}vmove\` **『 لنقل شخص لى الغرفه الصوتيه الموجود فيها انت 』 ** 
\`${prefix}role\` **『 لعطاء شخص رتبه 』 ** 
\`${prefix}nick\` **『 لعمل اسم مستعار 』 **
\`${prefix}lock\` **『 قفل الشات 』 **
\`${prefix}unlock\`**『 فتح الشات 』**  
\`${prefix}mute\` **『 لاعطاء اسكات لشخص 』 **  
\`${prefix}unmute\` **『 لفك الاسكات من على الشخص 』 **
\`${prefix}clear\`**『 مسح الشات 』 **  
\`${prefix}blist\`**『 يوريك عدد الي مبندين بسيرفر 』 ** 

:shield: \**Owner command\  ** 

\`${prefix}protection\` **『 اوامر الحماية 』  **  

:tickets: \**Ticket command\  **  
  
\`${prefix}new\` 
\`${prefix}close\` 
\`${prefix}add\` 
\`${prefix}rename\` 
\`${prefix}remove\` 

:headphones: \**Music command\  ** 

\`${prefix}mhelp\`**『 اوامر الاغانى 』 **    
  
:desktop: \**Links\** 

\`server support\` **<https://discord.gg/gN8jZEv>** 
\`invite bot\` **<https://discord.com/api/oauth2/authorize?client_id=751138569430630591&permissions=8&scope=bot>**  
\`Website\` **<https://systemmanager.discordsystem.repl.co/>**  
\`Donation\` **<https://paypal.me/prodeveloer?locale.x=ar_EG>** 
 `)

.then(e => {
          message.react("✅"); 
          
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
});


      







client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith(prefix + 'kick')) {
   if (!message.member.hasPermission("MANAGE_MESSAGES"))
     return message.channel
        .send("**```Please Check Your Permssion```**");
    message.channel
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('**Optional reason that will display in the audit logs**')
          .then(() => {
            return message.channel.send(`**Successfully kicked ${user.tag}:airplane:**`);
          })
          .catch(err => {
           return message.channel.send('**I was unable to kick the member**');
            console.error(err);
          });
      } else {
        return message.channel.send("**```That user isn't in this guild!```**");
      }
    } else {
      return message.channel.send("**```You didn't mention the user to kick!```**");
    }
  }
}); 



client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
     return message.channel
        .send("**```Please Check Your Permssion```**");
    message.channel
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: '**They were bad!**',
          })
          .then(() => {
            return message.channel.send(`**Successfully banned ${user.tag}:airplane:**`);
          })
          .catch(err => {
             return message.channel.send('**I was unable to ban the member**');
            console.error(err);
          });
      } else {
         return message.channel.send("**```That user isn't in this guild!```**");
      }
    } else {
       return message.channel.send("**```You didn't mention the user to ban!```**");
    }
  }
});   



client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles") {
    let roles = message.guild.roles.cache
      .map(r => `[ ${r.name}  - Color ${r.color} ]`)
      .join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});

 client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "emojis") {
    let emojis = message.guild.emojis.cache.map(e => ` ${e}`).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Emojis")
      .setDescription(emojis);
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help emojis") {
    let emojis = new Discord.MessageEmbed()
      .setTitle(`Command: emojis `)
      .addField("Usage", `${prefix}emojis`)
      .addField("Information", "Show All Emojis For Server");
    message.channel.send(emojis);
  }
});



client.on('message', message => {
  const {MessageEmbed} = require('discord.js')
  if(message.content.toLowerCase().startsWith("+avatar"))
  {
   var user = message.mentions.users.first() || message.author
   if(!user)return('**❌ Eror**')
 let abdel = new MessageEmbed()
 .setTitle('Avatar Link')
 .setURL(user.displayAvatarURL({size:2048,dynamic: true}))
 .setImage(user.avatarURL({size:512,dynamic: true}))
 .setFooter(`Requested By ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))
 .setAuthor(user.tag,user.displayAvatarURL({dynamic: true}))
message.channel.send(abdel).then(m => { console.log('Successfully Avatar Sent To The Requester ✅')
 }).catch(() => {
 return console.log('❌ Something Went Wrong')
 })
}
}) 

client.on('message', message => {
  const {MessageEmbed} = require('discord.js')
  if(message.content.toLowerCase().startsWith("+server avatar"))
  {
 let abdel = new MessageEmbed()
 .setTitle('Avatar Link')
 .setURL(message.guild.iconURL({size:2048,dynamic: true}))
 .setImage(message.guild.iconURL({size:512,dynamic: true}))
 .setFooter(`Requested By ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))
  .setAuthor(`ServerAvatar ${message.guild.name}`)
message.channel.send(abdel).then(m => { console.log('Successfully Avatar Sent To The Requester ✅')
 }).catch(() => {
 return console.log('❌ Something Went Wrong')
 })
}
}) 




client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "lock") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .send("**Please Check Your Permssion**")
        .then(m => m.delete({ timeout: 5000 }));
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    let lock = new Discord.MessageEmbed()
      .setDescription(
        "```Channel Locked By : " + message.author.username + "``` "
      )
      .setColor("None");
    message.channel.send(lock);
  }
  if (message.content.toLowerCase() === prefix + "unlock") {
    if (!message.channel.guild || message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel
        .send("**Please Check Your Permssion**")
        .then(m => m.delete({ timeout: 5000 }));
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
    let unlock = new Discord.MessageEmbed().setDescription(
      "```Channel Unlocked By : " + message.author.username + "``` "
    );
    message.channel.send(unlock);
  }
  if (message.content.toLowerCase() === prefix + "help lock") {
    let lock = new Discord.MessageEmbed()
      .setTitle(`Command: lock `)
      .addField("Usage", `${prefix}lock`)
      .addField("Information", "lock Channel");
    message.channel.send(lock);
  }
  if (message.content.toLowerCase() === prefix + "help unlock") {
    let unlock = new Discord.MessageEmbed()
      .setTitle(`Command: unlock `)
      .addField("Usage", `${prefix}unlock`)
      .addField("Information", "unlock Channel");
    message.channel.send(unlock);
  }
});

client.on('message', message => {
    if (message.content === prefix + 'bot') {
        const embed = new Discord.MessageEmbed()
            .setAuthor('Info about the Bot')  
            .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`) 
            .setTitle('Avatar Link')
            .setURL(`${client.user.displayAvatarURL({ dynamic: true })}`) 
            .addField("**Bot Name** :  ", `**${client.user.tag}**`)   
             .addField("**Bot ID** :  ", `\`[751138569430630591]\``)
            .addField('**Bot ping :**' , `\`[${client.ws.ping}ms]\`` )  
             .addField('**servers :**', `\`[${client.guilds.cache.size}]\``)  
              .addField('**Users :**', `\`[${client.users.cache.size}]\``).addField('**Channels :**', `\`[${client.channels.cache.size}]\``)     
            .addField("**Prefix Bot** :  ", `\`[+]\``)
            .addField("**Developer** :  ", `**<@676716074212786199>**`)  
            .addField("**Developer id** :  ", `\`[676716074212786199]\``)   
            .setFooter(`Created by ${message.author.username}`)
        message.channel.send(embed)
    }
});



 
client.on('message', message => {
 if (message.content.split(" ")[0].toLowerCase() === prefix + "clear") {
        const word = message.content;
        const number = word.slice(7, word.length);
        const int = Number(number);
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("**i need to be given Manage Messages permissions to use this command**");
}
         if(int >= 101){
            return message.channel.send("**The max number of messages you can delete is 100**");
}
         if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.channel.send("**Looks like you dont have the permissions to do that**");
}
         if(int == ""){
            return message.channel.send("**supply A Number to Delete**");
        }else if (isNaN(int)){
            return message.channel.send('**Must be a number**')
        }
        message.channel.bulkDelete(int).then(() => {
            return message.channel.send(`:ballot_box_with_check:**Cleared \`${int}\` messages.**` ).then(message => {
                message.delete({ timeout: 3000 })
            })
    });
    }
})

client.on('message', message => {
    if (message.content.startsWith("+blist")) { 
       if (!message.member.hasPermission("MANAGE_MESSAGES"))
     return message.channel
        .send("**```Please Check Your Permssion```**");
    message.channel
        message.guild.fetchBans()
      .then(bans => message.channel.send(`**Number Of Ban Is \`${bans.size}\`**`))
}
});
 

  client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`** :heart: Welcome to server :heart:
:pencil: Name Member is ${member} :pencil:  
:ballot_box_with_check: You are the number member is  \`${member.guild.memberCount}\` :ballot_box_with_check:**`) 
}).catch(console.error)
})



 

       client.on('message', message =>{
  if (!message.channel.guild) return;
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(`${prefix}say`)){  
     if (!message.member.hasPermission("MANAGE_MESSAGES"))
     return message.channel
        .send("**```Please Check Your Permssion```**");
    message.delete()
    message.channel.send(args.join(' '));
    return console.log(`>say command used by ${message.author.username} `);
  }
})


 

 


client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let com = command.toLowerCase();
    var sender = message.author;

    if (com === `${prefix}user`) {
        let ment = message.mentions.users.first()|| message.author;
        let embed = new Discord.MessageEmbed()
.setAuthor(`Avatar User Link`)
            .setTitle('**Click here**')  
            .setURL(`${ment.displayAvatarURL({ dynamic: true })}`)
            .addField("**:clipboard: Username**", ment.tag)
            .addField("**:id: ID**", ment.id) 
            .addField("**:chart_with_upwards_trend: Status**",ment.presence.status) 
           .addField(':door: Join Discord', `\`In ${message.author.createdAt.toLocaleString()}\``) 
           .addField(':inbox_tray: Join Server', `\`In ${message.guild.joinedAt.toLocaleString()}\``)
            .setThumbnail(`${ment.displayAvatarURL({ dynamic: true })}`)
            .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(embed)
        return console.log(`> userinfo command used by ${message.author.username}`);
    }
});
  





   client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "invite")) {
    if (message.author.id ) {
      message.author
        .send(
          `                            \**:shield: Invite [System Manager] :shield:\**    

\** :tada: Thank you very much for your choosing my bot. I hope you have a great time with the bot. :tada: \** 
**\`link\`** \**<https://discord.com/api/oauth2/authorize?client_id=751138569430630591&permissions=8&scope=bot> \** 
 `)

.then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
});

   

  client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "server support")) {
    if (message.author.id ) {
      message.author
        .send(
          `   \**:wrench: server support [System Manager] :wrench:\**    

\**:tools: If you have a problem. Enter the server and say it to solve it. :tools:\**
**\`server\`** \**<https://discord.gg/gN8jZEv>\**
 `)

.then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
}); 

client.on("message", message => {
    var args = message.content.split(" ");
    var sugg = message.content.split(" ").slice(1).join(" ");
    var prefix = "+"
    if (args[0] === prefix+"sug"){
    if (!sugg){
        return message.channel.send("Usage : `"+args[0]+" <your suggest>`");
    }
    var chname = "suggestions"; // اسم الروم
    var sugchanel = message.guild.channels.cache.find(ch => ch.name == chname); // اسم الروم 
    if (!sugchanel){
        return message.channel.send("**i can't find a suggestion channel please create one with name `"+chname+"`**");
    }
    message.channel.send("**Thanks you for suggestion , your suggestion has been Sent in ** <#"+sugchanel.id+">")
    message.delete();
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')   
    .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
     .setAuthor(`Vote on ${message.author.username}'s Suggestion`)      
    .setTitle('**suggestion**')
    .setDescription(`${sugg}`)  
    .setFooter(`ID: ${message.author.id}`)
    sugchanel.send(embed).then(mes => {
    mes.react("✅").then(rec =>{
        mes.react("❌")
    })
    
    });
    }
});   

client.on("message", message => {
    var args = message.content.split(" ");
    var sugg = message.content.split(" ").slice(1).join(" ");
    var prefix = "+"
    if (args[0] === prefix+"feedback"){
    if (!sugg){
        return message.channel.send("Usage : `"+args[0]+" <your feedback>`");
    }
    var chname = "feedback"; // اسم الروم
    var sugchanel = message.guild.channels.cache.find(ch => ch.name == chname); // اسم الروم 
    if (!sugchanel){
        return message.channel.send("**i can't find a feedback channel please create one with name `"+chname+"`**");
    }
    message.channel.send("**Thanks you for feedback , your feedback has been Sent in ** <#"+sugchanel.id+">")
    message.delete();
    let embed = new Discord.MessageEmbed()  
     .setColor('RANDOM')    
     .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
     .setAuthor(`Vote on ${message.author.username}'s feedback`)      
    .setTitle('**Feedback**')
    .setDescription(`${sugg}`)  
    .setFooter(`ID: ${message.author.id}`)
    sugchanel.send(embed).then(mes => {
    mes.react("✅").then(rec =>{
        mes.react("❌")
    })
    
    });
    }
}); 

client.on("message", message => {
  moment.locale("en-TN");
  if (message.content.toLowerCase() === prefix + "server") {
    let server = new Discord.MessageEmbed()
      .setAuthor("[GUILD INFO]", message.guild.iconURL({ dynamic: true}))
      .setThumbnail(message.guild.iconURL({ dynamic: true}))
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setTimestamp()
      .addField(
        "Guild",
        `**ID: (${message.guild.id})\nOwner:👑 ${message.guild.owner}**`
      )
      .addField(
        "Guild Details",
        `**>>> Region: \`${message.guild.region
          .toString()
          .toUpperCase()}\`\nMembers: \`${
          message.guild.members.cache.size
        }\` Bots: \`${
          message.guild.members.cache.filter(m => m.user.bot).size
        }\`\nBoosts: \`${
          message.guild.premiumSubscriptionCount
        }\`\nAfkChannel: <#${message.guild.afkChannelID || "non"}> AfkTime: \`${
          message.guild.afkTimeout
        }\`\nNotifications:\`${
          message.guild.defaultMessageNotifications
        }\`\nVerification: \`${
          message.guild.verificationLevel
        }\`\nSystemChannel: \`${message.guild.systemChannelID ||
          "non"}\`\nGuild Channels: \`🔊\`${
          message.guild.channels.cache.filter(m => m.type === "voice").size
        } \`#\`${
          message.guild.channels.cache.filter(m => m.type === "text").size
        }\nGuild Roles: \`${message.guild.roles.cache.size}\`\nGuild Emoji:\`${
          message.guild.emojis.cache.size
        }\` **`
      )
      .addField(
        "» Guild Creation Date:",
        `**${moment(message.guild.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )}**`
      )
      .addField("» More Info", `**${prefix}roles - ${prefix}emojis**`);
    message.channel.send(server);
  }
  if (message.content.toLowerCase() === prefix + "help server") {
    let hlp = new Discord.MessageEmbed()
      .setTitle(`Command: Server `)
      .addField("Usage", `${prefix}server`)
      .addField("Information", "Information server");
    message.channel.send(hlp);
  }
});



client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "website")) {
    if (message.author.id ) {
      message.author
        .send(
          `   \**:desktop: Website [System Manager] :desktop:\  **    

\**:mag: If you would like to know more about the bot, enter the link. :mag:\**
**\`Link\`** \**<https://systemmanager.discordsystem.repl.co>\**
 `)

.then(e => {
          message.react("✅");
        })
        .catch(() => {
          return message.channel
            .send(
              "**يجب السماح بأستقبال الرسائل في الخاص ، لأتمكن من ارسال الاوامر لك **"
            )
            .then(() => {
              return message.react("❌");
            });
        });
    }
  }
}); 

client.on('message', message => {
  if (message.content.startsWith(prefix + "time")) {
    if(!message.channel.guild) return;
let user = message.mentions.users.first();
var args = message.content.split(" ").slice(1);
var men = message.mentions.users.first();
var heg;
if(men) {
   heg = men
} else {
   heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
   h = mentionned
} else {
   h = message.member
}
moment.locale('ar-TN'); //TN
var id = new  Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${heg.username}#${heg.discriminator}`,heg.avatarURL) //laaaaayer team
.setDescription([`
**Time** : \`\`${moment().format('HH:mm:ss A')}\`\`
**Date** : \`\`${moment().format('YYYY/M/D - YYYY/M/D')}\`\`
**Today** : \`\`${moment().format('dddd')}\`\` `])
message.channel.send(id)
};
});

client.on("message", async message => {
  let args = message.content.split(" ");  
  let user = 
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );  
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#000000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//unmute
client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
}); 



client.on('message', message => {
    if (message.content === prefix + 'deves') {
        const embed = new Discord.MessageEmbed()
.setTitle('Info Developer Bot')
 .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
.addField(`**Name :**`, `**BodaRamzy300#8404**`)
.addField('**Country :**',`:flag_eg:`) 
.addField('**Age :**',`**14**`)
.setFooter(`Created by ${message.author.username}`)
        message.channel.send(embed)
    }
}); 


client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles.cache
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`I Need Permissions !!`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user)
      return message.channel.send(
        `**>>> ${prefix}role <@mention or iD> role Name**`
      );
    if (!role)
      return message.channel.send(
        `**>>> ${prefix}role <@mention or iD> role Name**`
      );
    if (!role1)
      return message.channel.send(
        `**>>> ${prefix}role <@mention or iD> role Name**`
      );
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles
        .remove(role1)
        .then(() => {
          message.channel.send(
            `**>>> Role \`${role1.name}\` removed to ${user.user}**`
          );
        })
        .catch(err => message.channel.send("Error: **" + err.message + "**"));
    user.roles
      .add(role1)
      .then(() => {
        message.channel.send(
          `**>>> Role \`${role1.name}\` added to ${user.user}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
  if (message.content.toLowerCase() === prefix + "help role") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: role`)
      .addField("Usage", `${prefix}role @user role`)
      .addField("Information", "Change Roles");
    message.channel.send(move);
  }
}); 


client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
}); 

client.on("message", async message => {
  if (message.content.startsWith(prefix + "vkick")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user)
      return message.channel.send(`**>>> ${prefix}vkick <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    await user.voice.kick();
    message.channel.send(
      `**${user.user.username}** has been kicked from **Voice Channel**`
    );
  }
  if (message.content.toLowerCase() === prefix + "help vkick") {
    let vkick = new Discord.MessageEmbed()
      .setTitle(`Command: vkick`)
      .addField("Usage", `${prefix}vkick @user`)
      .addField("Information", "voice kick members");
    message.channel.send(vkick);
  }
}); 

client.on("message", message => {
  if (message.content.startsWith(prefix + "vmove")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user)
      return message.channel.send(`**>>> ${prefix}move <@mention or id>`);
    if (!message.guild.member(user.id).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    message.guild
      .member(user.id)
      .voice.setChannel(message.member.voice.channel.id)
      .then(() => {
        message.channel.send(
          `**${user.user.username}** has been moved to **${
            message.guild.member(message.author).voice.channel.name
          }**`
        );
      });
  }
  if (message.content.toLowerCase() === prefix + "help move") {
    let move = new Discord.MessageEmbed()
      .setTitle(`Command: move`)
      .addField("Usage", `${prefix}move @user`)
      .addField("Information", "move members");
    message.channel.send(move);
  }
});

client.login(process.env.token);