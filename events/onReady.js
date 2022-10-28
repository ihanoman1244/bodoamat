const chalk = require("chalk");
module.exports = {
	name: "ready",
	once: true,

	execute(client) {
		client.user.setActivity(`hi sayang`, { type: "LISTENING" });

		console.log(
			chalk.yellowBright.bold(`
MUSIC BOT  IS ONLINE MADE BY RADIAN                                                      
  `)
		);
		console.log(
			chalk.green.bold(`[] | L BOTogged in as ${client.user.tag}!`)
		);
		console.log(
			chalk.yellow.bold(`[MUSIC BOT BY RADIANT WRITES] | Servers! ["${client.guilds.cache.size}"]`)
		);
		console.log(
			chalk.red.bold(`[RADIANT OP] | water music Users! ["${client.users.cache.size}"]`)
		);
		console.log(
			chalk.cyan.bold(`[RADIANT OP]! ["${client.channels.cache.size}"]`)
		);
		console.log(chalk.greenBright(`[] |water musMUSIC BOTands`));
	},
};
