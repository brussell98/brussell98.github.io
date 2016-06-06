/* eslint no-unused-vars: 0 */
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

function getid() {
	return 'Your ID is: 95286900801146880';
}

function ping() {
	return 'pong! | ' + ~~(Math.random() * 200 + 50);
}

function reverse() {
	var text = prompt('Input text', 'Hello World');
	if (!text)
		text = 'Hello World';
	alert(`\u202e ${text}`);
}

function invite() {
	return 'Use this to bring me to your server:\nhttps://goo.gl/umeCQF';
}

function about() {
	return `[Author][Brussell]
[Library][Discord.js]
[Version][2.2.0]
[Official Server][https://discord.gg/0kvLlwb7slG3XCCQ]
[Info and Commands][http://brussell98.github.io/bot/index.html]`;
}

function dice() {
	return ['🎲 Your 2d12 resulted in 11  (4 +7) ', '🎲 Your 2d12 resulted in 13  (2 +11) ', '🎲 Your 2d12 resulted in 19  (9 +10) ', '🎲 Your 2d12 resulted in 18  (8 +10) '][~~(Math.random() * 3)];
}

function roll() {
	var max = prompt('Max value', '10');
	if (!/^\d+$/.test(max))
		max = '10';
	alert(~~(Math.random() * parseInt(max)) + 1);
}

function info() {
	return `Info on Bot-chan#3157 (ID: 125367104336691200)
Status: online last playing with hakase
Nickname: Nano-chan
Joined on: Sun, 21 Feb 2016 03:58:06 GMT
Roles: Führer, JavaScript
Shared servers: 1596
Account created on Sat, 12 Dec 2015 22:44:06 GMT

Info on Brussell#0660 (ID: 95286900801146880)
Status: online
Joined on: Sat, 09 Jan 2016 21:34:56 GMT
Roles: JavaScript, The Bot Himself
Shared servers: 7
Account created on Sun, 20 Sep 2015 22:36:07 GMT`;
}
