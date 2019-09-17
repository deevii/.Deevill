const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "d!";
var usage = `\`${prefix}bc <content>\``


client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) != 0) return;
  const [command, ...args] = message.content.slice(prefix.length).split(/ +/g);
  if (command === "bc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**✖｜${message.author.username}, Admins Only`);
    if (args.length == 0) message.channel.send(`**✖｜${message.author.username}, the correct usage is ${usage}**`);
    var idx = 0, fails = 0;
    message.channel.send(`${idx} received from ${message.guild.members.size} \n ${fails} fails`).then(res => {
    setInterval(() => {
      res.edit(`${idx} received from ${message.guild.members.size} \n ${fails} fails`)
    }, 3000)
      message.guild.members.map(member => {
        var content = args.join(" ").replace(/\[mention\]|\[ping\]|\[user\]/g, `<@${member.id}>`) // use less variables in loop
        setTimeout(() => {
          member.send({
            embed: {
              description: content,
              color: 990000,
              footer: {
                text: message.guild.name
              }
            }
          }).then(() => {
            idx++;
          }).catch((err) => {
            fails++;
          });
        }, idx * 5);
      });
    });
  }
});

client.login(NDQwMjkzMDA2ODU2NDIxMzc2.XYEANA.uboR3US6Eb1Zoxm6jQExVI0Rfrw)
