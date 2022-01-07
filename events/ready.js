const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    name: "ready",
    once: true,
    execute(client, commands) {
        const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationCommands(process.env.CLIENT_ID),
                    { body: commands },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
            console.log(`Logged in as ${client.user.tag}!`);
        })();
    }
}