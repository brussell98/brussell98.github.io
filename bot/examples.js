function cleverbot() {
	return "💬 I don't know.";
}

function help() {
	return `]osu [mode] sig [username] [hex color] | [mode] <user|best|recent> [username]
sig: Get an osu!next styled signature for the specified account. You may provide a hex color.
user: Get the statistics for a user.
best: Get the top 5 plays for a user (by PP).
recent: Get the 5 most recent plays for a user.
mode: Mode can be used if you want to get data for a mode other than osu. You can use mania, taiko, or ctb.
Cooldown: 5 seconds
Can delete the activating message`
}

function id() {
	return 'Your ID is: 95286900801146880';
}

function ping() {
	return 'pong! | ' + ~~(Math.random() * 200 + 50);
}

function invite() {
	return 'Use this to bring me to your server:\n https://discordapp.com/oauth2/authorize?&client_id=168128745893396480&scope=bot&permissions=12659727';
}

function about() {
	return `[Author][Brussell]
[Library][Discord.js]
[Version][2.2.0]
[Official Server][https://discord.gg/0kvLlwb7slG3XCCQ]
[Info and Commands][http://brussell98.github.io/bot/index.html]`;
}

function dice() {
	return '🎲 Your 2d12 resulted in 11  (4 +7) ';
}
