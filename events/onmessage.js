const checkpresence=require('../server/checkpresence');
//const userpresence=require('../server/userpresence');

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        console.log(message.content);
        await guildpresence.execute(message);
        //await userpresence.execute(message);
    }
}