/*
* @License GNU[2]
* @Author:HJGAMING
Copyright (C) 2021 HJ GAMING

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

/**
 * Ah yes requiring every fucking thing from this universe
 */
const { Collection, Intents, Client } = require("discord.js");
const { Player } = require("discord-player");
const { readdirSync } = require("fs");
const db = require("quick.db");

require("./shard");
const config = require("./musico.config");
const handleEvents = require("./handlers/eventsHandler");
const handleInteractions = require("./handlers/interactionHandlers");
const registrar = require("./handlers/registrar");
const handlePlayer = require("./handlers/playerEventsHandler");

const client = new Client({
	intents: [
		//yeah this sux
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
	],
});
/**
 * Global variables< Client and Player... etc.>
 */
const players = new Player(client);
client.slashCommands = new Collection();
client.contextCommands = new Collection();
client.db = db;
client.player = players;
client.config = config;
/**
 * Handle events , handle interactions and register commands
 */
handleEvents(client, `${__dirname}/events`);
handlePlayer(client, `${__dirname}/events/player`);
handleInteractions(client, __dirname);
registrar(client);

/**
* hm
*/


/**
* antiCrash
*/

process.on('multipleResolves', (type, promise, reason) => { // Needed
    console.log('=== [antiCrash] | [multipleResolves] | [start] ===');
    // console.log(type, promise, reason);
    console.log('=== [antiCrash] | [multipleResolves] | [end] ===');
  });
  process.on('unhandledRejection', (reason, promise) => { // Needed
    console.log('=== [antiCrash] | [unhandledRejection] | [start] ===');
    console.log(reason);
    console.log('=== [antiCrash] | [unhandledRejection] | [end] ===');
  });
  process.on('rejectionHandled', (promise) => { // If You Want You Can Use
    console.log('=== [antiCrash] | [rejectionHandled] | [start] ===');
    console.log(promise);
    console.log('=== [antiCrash] | [rejectionHandled] | [end] ===');
  })
  process.on("uncaughtException", (err, origin) => { // Needed
    console.log('=== [antiCrash] | [uncaughtException] | [start] ===');
    console.log(err);
    console.log('=== [antiCrash] | [uncaughtException] | [end] ===');
  });
  process.on('uncaughtExceptionMonitor', (err, origin) => { // Needed
    console.log('=== [antiCrash] | [uncaughtExceptionMonitor] | [start] ===');
    console.log(err);
    console.log('=== [antiCrash] | [uncaughtExceptionMonitor] | [end] ===');
  }); 


/**
 * Login to the bot
 */
client.login(client.config.botToken);
