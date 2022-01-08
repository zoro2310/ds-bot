var XMLHttpRequest = require('xhr2');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "addxp",
    async execute() {
        const interaction = arguments[0];
        const message = arguments[1];
        const xp = arguments[2];
        const member = arguments[3];

        var guild_id = null;
        var user_id = null;

        if (message != null) {
            guild_id = message.guild.id;
            user_id = message.author.id;
        }
        if (interaction != null) {
            guild_id = interaction.guild.id;
            user_id = member.user.id;
        }

        const user_baseurl = 'http://localhost:5000/users';
        const addxp_url = `${user_baseurl}/addxp/${guild_id}/${user_id}/${xp}`;
        const uresponse = await fetch(addxp_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (uresponse.status == 200) {
            const body = await uresponse.json();
            if (body.level_change) {
                console.log("level up");
                if (message != null)
                    message.channel.send(`${message.author.username} has leveled up to level ${body.user_level}`);
            }
            console.log("Xp added");
        }
        else {
            console.log("cannot add xp");
        }
    }
}