var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();

module.exports = {
    name: "check",
    async execute(message) {
        console.log("check");
        const guild_id=message.guild.id;
        const check_guild=`http://localhost:5000/guild/${guild_id}`;
        console.log(check_guild);
        request.open('GET', check_guild);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    console.log("guild present");
                }
                else
                    console.log("guild not present");
            }
        };
        request.send();
    }
}