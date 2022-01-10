const createuser = require('./createuser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "createguild",
    async execute(message) {
        const guild_id = message.guild.id;
        const guild_baseurl = 'http://localhost:5000/guild';
        const guild_data = {
            "guild_id": guild_id.toString(),
            "member_count": message.guild.memberCount
        }
        const post_guild = guild_baseurl;
        const presponse = await fetch(post_guild, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guild_data)
        });
        if (presponse.status == 200) {
            console.log("guild is created");
            await createuser.execute(message);
        }
        else {
            console.log("guild is not created");
        }
    }
}