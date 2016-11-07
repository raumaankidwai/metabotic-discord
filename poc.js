module.exports = {
	name: "poc",
	commands: [
		{
			word: "exponentiate",
			description: "Proof of Concept.",
			execute: function (m, p) {
				send(m, "~M~exponentiate");
				send(m, "~M~exponentiate");
			}
		}
	],
	initalize: null,
	close: null
};
