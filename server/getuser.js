const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name: "getuser",
    async execute(guild_id, user_id) {
        const user_baseurl = 'http://localhost:5000/users';
        const get_user_url = `${user_baseurl}/guilds/${guild_id}/users/${user_id}`;
        const response = await fetch(get_user_url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status == 200) {
            const body = await response.json();
            return body;
        }
    }
}