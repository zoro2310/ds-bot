var XMLHttpRequest = require('xhr2');

module.exports = {
    name: "check",
    async execute(message) {
        console.log("check");
        const guild_id = message.guild.id;
        const check_guild = `http://localhost:5000/guild/${guild_id}`;
        var request = new XMLHttpRequest();
        request.open('GET', check_guild);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    console.log("guild present");
                }
                else {
                    console.log("guild not present");
                    const guild = {
                        "guild_id": guild_id,
                        "member_count": message.guild.memberCount
                    }
                    const post_guild = `http://localhost:5000/guild`;
                    var prequest = new XMLHttpRequest();
                    prequest.open('POST', post_guild);
                    prequest.setRequestHeader('Content-Type', 'application/json');
                    prequest.send(JSON.stringify(guild));
                    prequest.onreadystatechange = function () {
                        if (prequest.readyState === 4) {
                            if (prequest.status === 200) {
                                console.log("guild created");
                            }
                            else {
                                console.log("guild not created");
                            }
                        }
                    }
                }
            }
        };
        request.send();
    }
}