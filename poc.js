module.exports = {
	name: "poc",
	commands: [
		{
			word: "exponentiate",
			description: "Proof of Concept.",
			execute: function (m, p) {
				m.channel.sendMessage("~M~exponentiate");
				m.channel.sendMessage("~M~exponentiate");
			}
		}
	],
	initalize: null,
	close: null
};
