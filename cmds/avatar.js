const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  // 4096 is the new biggest size of the avatar.
  // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
  // If it's not animated, it will result as a normal image format.
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL De **${user.tag}**](${avatar})`)
  .setColor("#00FFFB")
  .setFooter('RandomBot')
  .setTimestamp()
  .setImage(avatar)
  
  return message.channel.send(embed);
}

  module.exports.config = {
  name: "avatar",
  description: "Display a user avatar",
  usage: "avatar [@user | user ID]",
  example: "avatar @ray#1337 \navatar"
}
