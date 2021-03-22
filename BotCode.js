let Discord = require("discord.js");
let client = new Discord.Client();

client.login("ODE0MzMzODc1NDI5OTY1ODQ0.YDcVhQ.FuL_wXEr1vP644XHEKyUPXHkHu0");

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
    return message.channel.send("https://discord.com/terms, https://artofproblemsolving.com/company/tos");
  }
});
client.on("message", message => {
  if (message.content === "aops rules") {
    return message.channel.send("<#796544244839088129>");
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
      "AoPS provides math classes and language arts classes for students grades 2-12 after school, weekends, and summer, with locations all over the USA."
    );
  }
});
client.on("message", message => {
  if (message.content === "good") {
    return message.channel.send(
      "nice"
    );
  }
});
client.on("message", message => {
  if (message.content === "bot prefix") {
    return message.channel.send(
      "aops"
    );
  }
});
client.on("message", message => {
  if (message.content === "bad") {
    return message.channel.send(
      "lol n0ob"
    );
  }
});
