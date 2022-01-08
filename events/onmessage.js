const addxp = require('../server/addxp');
const checkpresence=require('../server/checkpresence');
//const userpresence=require('../server/userpresence');

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message) {
        if (message.author.bot) return;
        console.log(message.content);
        await checkpresence.execute(message);
        await addxp.execute(message,1);
        //await userpresence.execute(message);
    }
}