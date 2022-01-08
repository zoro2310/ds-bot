const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "removexp",
    async execute(message,xp) {
        const guild_id = message.guild.id;
        const user_baseurl = 'http://localhost:5000/users';
        const removexp_url = `${user_baseurl}/removexp/${guild_id}/${message.author.id}/${xp}`;
        const uresponse = await fetch(removexp_url, {
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
            console.log("Xp removed");
        }
        else {
            console.log("cannot remove xp");
        }
    }
}