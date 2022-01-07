var XMLHttpRequest = require('xhr2');

module.exports = {
    name: "check",
    async execute(message) {
        console.log("check");
        const guild_id=message.guild.id;
        const check_guild=`http://localhost:5000/guild/${guild_id}`;
        var request = new XMLHttpRequest();
        request.open('GET', check_guild);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    console.log("guild present");
                }
                else{
                    console.log("guild not present");

                }
            }
        };
        request.send();
    }
}