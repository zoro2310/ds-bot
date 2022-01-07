const checkpresence=require('../server/checkpresence');

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        console.log(message.content);
        checkpresence.execute(message);
    }
}