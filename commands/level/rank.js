const { SlashCommandBuilder } = require('@discordjs/builders');
const getrank = require('../../server/getrank');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rank')
        .setDescription('View your profile')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The user')
        ),
    async execute(interaction) {
        var user = interaction.options.getMember('user');
        if (!user) {
            user = interaction.user;
        }
        const user_id = user.id;
        const guild_id = interaction.guild.id;
        const user_data = await getrank.execute(guild_id, user_id);

        const rank = "" + user_data.rank;
        const user_xp = "" + user_data.user_xp;
        const user_level = "" + user_data.user_level;

        const Eembed = new MessageEmbed()
            .setTitle(`${user.username}'s rank`)
            .setColor('#0099ff')
            .setThumbnail(user.avatarURL())
            .addFields(
                { name: 'Rank', value: rank, inline: true },
                { name: 'Level', value: user_level, inline: true },
                { name: 'XP', value: user_xp, inline: true },
            );

        await interaction.reply({ embeds: [Eembed] });
    }
};
