const addxp = require('../server/addxp');
const checkpresence=require('../server/checkpresence');

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        console.log(message.content);
        await checkpresence.execute(message);
        await addxp.execute(null,message,1,null);
    }
}