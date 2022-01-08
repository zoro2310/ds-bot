var XMLHttpRequest = require('xhr2');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "createguild",
    async execute(message) {
        const guild_id = message.guild.id;
        const user_baseurl = 'http://localhost:5000/users';
        const post_user = `${user_baseurl}/add/${guild_id}/${message.author.id}`;

        const user_check_url=`${user_baseurl}/guilds/${guild_id}/users/${message.author.id}`;
        const cresponse = await fetch(user_check_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(cresponse.status ==200){
            console.log("user is present");
        }
        else{
            console.log("user is not present");
            const uresponse = await fetch(post_user, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (uresponse.status == 200) {
                console.log("user is created");
            }
            else {
                console.log("user is not created");
            }
        }
    }
}