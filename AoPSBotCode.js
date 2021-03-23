let Discord = require("discord.js");
let client = new Discord.Client();
const TOKEN = process.env.TOKEN;
client.login(TOKEN);

client.on("message", message => {
  if (message.content === "aops invite") {
    return message.channel.send("https://discord.gg/BWDk98TdM8");
  }
});
client.on("message", message => {
  if (message.content === "aops botinfo") {
    return message.channel.send(
      "AoPSBot is a utilities bot created by Synthetic#0920 and worked on by Jminding#6728 specifically for the AoPS discord server. To get started, type a command!"
    );
  }
});
client.on("message", message => {
  if (message.content === "aops break") {
    return message.channel.send("I am now broken");
  }
});
client.on("message", message => {
  if (message.content === "aops ping") {
    message.channel.send("Connecting to server").then(async msg => {
      msg.delete();
      message.channel.send(
        `Latency is ${msg.createdTimestamp -
          message.createdTimestamp}ms. API Latency is ${Math.round(
          client.ws.ping
        )}ms`
      );
    });
  }
});
client.on("message", message => {
  if (message.content === "aops pong") {
    return message.channel.send("🏓 Ping!");
  }
});
client.on("message", message => {
  if (message.content === "aops tos") {
    return message.channel.send(
      "Discord TOS: https://discord.com/terms\nAoPS TOS: https://artofproblemsolving.com/company/tos"
    );
  }
});
client.on("message", message => {
  if (message.content === "aops rules") {
    return message.channel.send(
      "Check <#796544244839088129> for the rules of this server!"
    );
  }
});
client.on("message", message => {
  if (message.content === "aops test") {
    return message.channel.send("Bot is up and running.");
  }
});
client.on("message", message => {
  if (message.content === "aops website") {
    return message.channel.send("https://artofproblemsolving.com/");
  }
});
client.on("message", message => {
  if (message.content === "aops duplication") {
    return message.channel.send(
      "https://cdn.discordapp.com/attachments/636679472527179788/788080706697691156/duplication.webm"
    );
  }
});
client.on("message", message => {
  if (message.content === "hi") {
    return message.channel.send("hey, how are you?");
  }
});
client.on("message", message => {
  if (message.content === "aops bump") {
    return message.channel.send("Bumped!");
  }
});
client.on("message", message => {
  if (message.content === "aops support") {
    return message.channel.send(
      "Contact Synthetic#0920 or Jminding#6728 for help!"
    );
  }
});
client.on("message", message => {
  if (message.content === "aops about") {
    return message.channel.send(
      "AoPS provides math and programming classes for students grades 2-12 after school, weekends, and summer, with locations all over the USA."
    );
  }
});
client.on("message", message => {
  if (message.content === "good") {
    return message.channel.send("nice");
  }
});
client.on("message", message => {
  if (message.content === "bot prefix") {
    return message.channel.send("aops");
  }
});
client.on("message", message => {
  if (message.content === "bad") {
    return message.channel.send("lol n0ob");
  }
});
client.on("message", message => {
  if (message.content === "aops help" || message.content === "aops cmds") {
    return message.channel.send(
      'AoPSBot here!  Here are my commands: \n`help` or `cmds` - Shows this message that has the commands\n`invite` - Gives you the invite link to this server\n`botinfo` - Gives you info about the bot\n`break` - The bot will say that it\'s broken\n`rules` - The bot will show you the rules of this server\n`ping` - Shows you the ping of the bot\n`pong` - Just says "🏓 Ping!"\n`test` - Tests if the bot is working\n`website` - Gives you the link to the AoPS website\n`bump` - Bumps the channel\n`support` - Tells you who to contact for support\n`about` - Tells you what AoPS is about\n`prefix` - Returns the prefix of the bot (which is aops)'
    );
  }
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "online", //You can show online, idle....
    game: {
      name: 'aops.com | aops help', //The message shown
      type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
    }
  });
});
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
