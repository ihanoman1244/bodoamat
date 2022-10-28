const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
  MessageSelectMenu,
	Permissions,
} = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription("List all commands of bot"),

	async execute(interaction) {
		const commands = interaction.client.slashCommands;
		const client = interaction.client;

		const embed = new MessageEmbed()
        .setTitle(`Commands of ${client.user.username}`)
        .setColor('#2F3136')
        .setDescription('**Please Select a category to view all its commands**')
        .addField('INFORMATION',`[**RADIANT WRITES**](https://dsc.gg/radiantwrites)\n[**Radiant#1106**](https://dsc.gg/radiantwrites)`,)
        .setTimestamp()
        .setFooter(`Requested by ${interaction.user.username} | RADIANT WRITES`, interaction.user.displayAvatarURL());
        
          const giveaway = new MessageEmbed()
          .setTitle("Categories » MUSIC")
          .setColor('#2F3136')
          .setDescription("```yaml\nHere are the music commands:```")
          .addFields({ name: 'MUSIC COMMAND'  , value: `8D , autoplay , bassboost , clearqueue , earrape , jump , leave , lyrics , nowplaying , pause , play , previous , queue , repeat , requester , resume , reverse , save , seek , shuffle , skip , stop , volume`, inline: true }, )
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username} | RADIANT WRITES`, interaction.user.displayAvatarURL());
        
        
          const general = new MessageEmbed()
          .setTitle("Categories » INFORMATION")
          .setColor('#2F3136')
          .setDescription("```yaml\nHere are the information bot commands:```")
          .addFields({ name: 'INFO COMMAND'  , value: `help , dj_role , commands_channel , reset_commandschannel , eval , blacklist_role`, inline: true },)
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username} | RADIANT WRITES`, interaction.user.displayAvatarURL());
        
          const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId("help-menu")
                .setPlaceholder("Please Select a Category")
                .setDisabled(state)
                .addOptions([{
                        label: `MUSIC COMMAND`,
                        value: `giveaway`,
                        description: `View all the music based commands!`,
                        emoji: `<a:logo:916545532741173278>`
                    },
                    {
                        label: `INFORMATION COMMAND`,
                        value: `general`,
                        description: `View all the INFORMATION bot commands!`,
                        emoji: `<:667737932035129344:916560642234794015>`
                    }
                ])
            ),
        ];
        
        const initialMessage = await interaction.editReply({ embeds: [embed], components: components(false) });
        
        const filter = (interaction) => interaction.user.id === interaction.member.id;
        
                const collector = interaction.channel.createMessageComponentCollector(
                    {
                        filter,
                        componentType: "SELECT_MENU",
                        time: 300000
                    });
        
                collector.on('collect', (interaction) => {
                    if (interaction.values[0] === "giveaway") {
                        interaction.update({ embeds: [giveaway], components: components(false) });
                    } else if (interaction.values[0] === "general") {
                        interaction.update({ embeds: [general], components: components(false) });
                    }
                });
                collector.on('end', () => {
                  initialMessage.edit({ components: components(true) });
              }
              )
    },
};