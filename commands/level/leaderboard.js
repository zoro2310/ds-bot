const { SlashCommandBuilder } = require('@discordjs/builders');
const getleaderboard = require('../../server/getrank');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('View the leaderboard'),
    async execute(interaction) {
        const leaderboard= await getleaderboard.execute(interaction.guild.id);
        console.log(leaderboard);

        const Eembed = new MessageEmbed()
            .setTitle('Leaderboard')
            .setColor('#0099ff')
            .setThumbnail(interaction.guild.iconURL())
            .setDescription('This is the leaderboard')
            .setTimestamp();

        await interaction.reply("ok");
    }
};
