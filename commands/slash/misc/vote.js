const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions , Discord , MessageEmbed } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName("vote")
		.setDescription("vote me on top.gg"),
		
	execute: async (interaction) => {
		const db = interaction.client.db;
		const guild = interaction.guildId;
    const client = interaction.client;

		const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("**VOTE ON TOP.GG**")
            .setThumbnail(interaction.user.displayAvatarURL())
            .setDescription("[TOP.GG](https://top.gg/bot/935101107888336926)")
        interaction.editReply({ embeds: [embed] })
    }
}