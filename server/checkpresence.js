var XMLHttpRequest = require('xhr2');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const createguild = require('./createguild');
const createuser = require('./createuser');

module.exports = {
    name: "check",
    async execute(message) {
        console.log("check");
        const guild_id = message.guild.id;
        const guild_baseurl='http://localhost:5000/guild';
        const check_guild = `${guild_baseurl}/${guild_id}`;

        const gresponse = await fetch(check_guild, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(gresponse.status ==200){
            console.log("guild is present");
            await createuser.execute(message);
        }
        else{
            console.log("guild is not present");
            await createguild.execute(message);
        }
    }
}