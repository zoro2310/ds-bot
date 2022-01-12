const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
    name:"getrank",
    async execute(guild_id,user_id) {
        const user_baseurl = 'http://localhost:5000/users';
        var get_rank_url = `${user_baseurl}/rank/${guild_id}`;
        if(user_id!=null){
            get_rank_url+=`/${user_id}`;
        }
        const response = await fetch(get_rank_url, {
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