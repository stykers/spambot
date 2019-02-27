// noinspection JSUnresolvedFunction
const Discord = require("discord.js");
const client = new Discord.Client();
// noinspection JSUnresolvedFunction
const config = require('./config.json');
client.config = config;

console.log("Service started.");

client.on("message", async message => {
    const prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.id !== client.user.id || message.content.indexOf(client.config.prefix) !== 0) return;

    if (command === "launch") {
        // noinspection ES6ConvertVarToLetConst
        var count = 1;

        function sendMessage() {
            try {
                message.channel.send("-----RUN " + count + "START-----");
                message.channel.send("pls search");
                message.channel.send("pls beg");
                message.channel.send("-----RUN " + count + "ENDED-----");

                let minTime = Math.ceil(2112);
                let maxTime = Math.floor(3779);
                let waitTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
                setTimeout(sendMessage, waitTime);
            } catch (error) {
                sendMessage();
            }
        }

        message.delete().catch(O_o => {
        });
        sendMessage();
    }

});

// noinspection JSIgnoredPromiseFromCall
client.login(config.botToken);
