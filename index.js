const Discord = require('discord.js');
require("dotenv").config();
const bot = new Discord.Client();



bot.on('message', (message) => {

    switch (message.content.toLowerCase()) {

        case '*bs': // Bs = Bot Speed
            message.reply('Ok');
            break;

        case '*date':
            var date = new Date();
            message.reply(`The date is ${date}`);
            break;

        case '*si': // Server Info
            message.reply('Contact the owner of the server for server info!');
            break;

        case '*bc': // Bot Creator
            message.reply("This bot was created by Strikes#6969");
            break;


        case "*invite": // Bot Invite
            message.reply("https://discord.com/api/oauth2/authorize?client_id=798682069008908378&permissions=8&scope=bot")
             break;
    
        // case "Cmds": // BOT CMDS
        //     message.reply()
    
    
        case "*cmds": 
            message.reply("*bs: Bot Speed  |  *si:  Server Info  |  *date: Time&Date (Western Timezone)  |  *bc: Bot Creator  | *invite: Bot Invite (Invite My Bot In Your Server)")
       break
    
}
});















bot.on('ready', () => {
    console.log('This bot is online!')
    bot.user.setActivity("*cmds")
})





bot.login(process.env.token);

































































    // if (message.content.toLowerCase() == 'ping') {
    //     message.reply('Pong!');

    // }

    // if (message.content.toLowerCase() == 'hi' || message.content.toLowerCase() == "hello") {
    //     message.reply('Hi');

    // }


    // if (message.content.toLowerCase() == 'date') {
    //     var date = new Date();
    //     message.reply(`The date is ${date}`);

    // }

