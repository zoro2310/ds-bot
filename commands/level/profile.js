const { SlashCommandBuilder } = require('@discordjs/builders');
const getuser = require('../../server/getuser');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
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
        const user_data = await getuser.execute(guild_id, user_id);
        
		const user_xp = "" + user_data.user_xp;
		const user_level = "" + user_data.user_level;
		const user_warning = "" + user_data.user_warning;

        const Eembed = new MessageEmbed()
            .setTitle(`${user.username}'s profile`)
            .setColor('#0099ff')
            .setThumbnail(user.avatarURL())
            .addFields(
                { name: 'Level', value: user_level, inline: true },
                { name: 'XP', value: user_xp.toString(), inline: true },
                { name: 'warnings', value: user_warning, inline: true },
            );


        await interaction.reply({ embeds: [Eembed] });
    }
};
