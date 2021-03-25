let Discord = require("discord.js");
let client = new Discord.Client();
const TOKEN = process.env.TOKEN;
client.login(TOKEN); // a more secure way for the token (since this code is going on GitHub)

client.on("message", message => {
  if (message.content === "aops invite") {
    return message.channel.send("https://discord.gg/BWDk98TdM8");
  }
});
client.on("message", message => {
  if (message.content === "aops botinfo") {
    return message.channel.send(
      "AoPSBot is a utilities bot created by Synthetic#0920 and worked on by <@645315667486179337> specifically for The AoPS Discord Server. To get started, type a command!"
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
      "Contact Synthetic#0920 or <@645315667486179337> for help!"
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
  if (message.content === "aops prefix") {
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
      'AoPSBot here!  Here are my commands: \n`help` or `cmds` - Shows this message that has the commands\n`invite` - Gives you the invite link to this server\n`botinfo` - Gives you info about the bot\n`break` - The bot will say that it\'s broken\n`rules` - The bot will show you the rules of this server\n`ping` - Shows you the ping of the bot\n`pong` - Just says "🏓 Ping!"\n`test` - Tests if the bot is working\n`website` - Gives you the link to the AoPS website\n`bump` - Bumps the channel\n`support` - Tells you who to contact for support\n`about` - Tells you what AoPS is about\n`prefix` - Returns the prefix of the bot (which is aops)\n`kick @user` - Kicks a user (you must have perms)\n`ban @user` - Bans a user (you must have perms)'
    );
  }
});
client.on("message", message => {
  if (message.content === "aops rickroll") {
    return message.channel.send(
      'Here is your rickroll: https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    );
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "aops kick"
  if (message.content.startsWith('aops kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member!');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "aops ban"
  if (message.content.startsWith('aops ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .ban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "online", //You can show online, idle....
    game: {
      name: 'aops.com | aops help for the commands | Bot programmed by Synthetic#0920 and Jminding#6728', //The message shown
      type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
    }
  });
});
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
