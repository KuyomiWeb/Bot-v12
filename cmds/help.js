const Discord = require("discord.js");
const colours = require("../colours.json");
    
    
    module.exports.run = async (bot, message, args) => {
            
        if(args[0] == "help") return message.channel.send(`Just do ${prefix} help instead.`)
    
        if(args[0]) {
            let command = args[0];
            let prefix = (config.prefix)
            if(bot.commands.has(command)) {
                var SHembed = new Discord.MessageEmbed()
                .setColor(colours.blue_light)
                .setAuthor(`" LuffyBot`, bot.user.displayAvatarURL)
                .setThumbnail(bot.user.displayAvatarURL)
                .setDescription(`Le prefix du bot "ζ͜͡Luffy Bot" est : ?`)
                message.channel.send(SHembed)
                
            }}
    
        if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead`)
    
                let Nembed = new Discord.MessageEmbed()
                .setTitle(`Liste des commandes :`, bot.user.displayAvatarURL)
                .setDescription('<a:badge:762263025473421353> -  Le Préfix de **ζ͜͡Luffy Bot** est `+` Le bot contient actuellement `81 Commandes.`')
                .addFields(
                    { name: '<a:fleche:762262810146897960> <:badge2:762276852458455111> Administration - (11)', value: '`addrole`, `annonce`, `config`, `selogs`, `setprefix`, `clear`, `removerole`, `sondage`, `raidon`, `raidoff`, `lock`, `unlock`' },
                    { name: '<a:fleche:762262810146897960> <:555:762277725880582166> Configuration - (5)', value: '`config`, `setjoin`, `setleave`, `setlogs`, `setprefix`' },
                    { name: '<a:fleche:762262810146897960> :loudspeaker: Economy - (3)', value: '`daily`, `balance`, `transfer`' },
                    { name: '<a:fleche:762262810146897960> <a:111:762281547985846292> Fun - (14)', value: '`8ball`, `gay`, `calin`, `cat`, `dog`, `frapper`, `rps`, `hug`, `kiss`, `clap`, `love`, `bienvenue`, `blague`, `amitié`' },
                    { name: '<a:fleche:762262810146897960> <:modo2:762285797536956466> Modération - (8)', value: '`ban`, `kick`, `tempkick`, `tempban`, `warn`, `unwarn`, `mute`, `unmute`' },
                    { name: '<a:fleche:762262810146897960> <:musiqueedy:762286771727237150> Musique - (6)', value: '`join`, `leave`, `play`, `stopmusic`, `skip`, `back`' },
                    { name: '<a:fleche:762262810146897960> <:nsfw55:762288750737883156> NSFW - (8)', value: '`ass`, `boobs`, `fuck`, `gif`, `hentai`, `pussy`, `lick`, `slap`' },
                    { name: '<a:fleche:762262810146897960> <:999:762287445572059157> Divertissement - (18', value: '`about`, `spotify`, `leaderboard`, `say`, `avatar`, `botinfo`, `serverinfo`, `sondage`, `userinfo`, `channelinfo`, `embed`, `help`, `invite`, `ping`, `rank`, `stats`, `support`, `newticket`' },
                    { name: '<a:fleche:762262810146897960> <:11:762288900571922442> Owner - (7)', value: '`whitelist`, `blacklist`, `stop`, `eval`, `serverlist`, `uptime`, `reload`' },
                    { name: '<a:fleche:762262810146897960> Lien Utile', value: '([Support](https://discord.gg/luffybot) | [Invitation](https://discord.com/api/oauth2/authorize?client_id=770669520799924274&permissions=8&scope=bot) | [Site Web](https://google.com))' },
        
        
                )
                .setColor("#000000")
                .setThumbnail("https://media.discordapp.net/attachments/759130676003209216/763769425983045642/BD7NNLDHDYGL3UJAWCHHY2JKWU.jpg")
                .setImage("https://cdn.discordapp.com/attachments/768491022199291985/770260563024412742/AOvQBfm.jpeg")
                .setFooter("🎃・ζ͜͡Luffy Bot Modération !")
                .setTimestamp()
                message.channel.send(Nembed);
            }

    module.exports.config = {
    name: "help"
}