/**
 * @typedef {Object} Config
 * @property {string} [botId] => Your's bot's client id
 * @property {string} [botToken] => The bot's token
 * @property {string} [ownerId] => The bot's owner's / developer's id
 * @note you can add other properties to this object by yourself and access them in your code using `client.config.<your-property>`
 */
const config = {
	botId: "1030095955262963722", //paste the bot id
	botToken:"MTAzMDA5NTk1NTI2Mjk2MzcyMg.Ggp4Ph.UBrjj_bq9IWdeBQNVnfkR9reOk6gjqgeY9DahA", // paste the bot token from discord developer portal
	ownerId: "369459822166409217", //paste the owner id
  channel: "" //channel id
};
module.exports = config;
