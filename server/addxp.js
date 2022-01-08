var XMLHttpRequest = require('xhr2');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "addxp",
    async execute(message,xp) {
        const guild_id = message.guild.id;
        const user_baseurl = 'http://localhost:5000/users';
        const addxp_url = `${user_baseurl}/addxp/${guild_id}/${message.author.id}/${xp}`;
        const uresponse = await fetch(addxp_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (uresponse.status == 200) {
            const body = await uresponse.json();
            if(body.level_change){
                console.log("level up");
                //message.channel.send(`${message.author.username} has leveled up to level ${body.user_level}`);
            }
            console.log("Xp added");
        }
        else {
            console.log("cannot add xp");
        }
    }
}