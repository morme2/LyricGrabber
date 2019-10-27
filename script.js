let app = new Vue({
    el: '#app',

    data: {
        artist: 'Aerosmith',
        title: 'Dream On',
        lyrics: '',
    },

    methods: {
        async getLyrics() {
            try{
            const response = await axios.get('https://api.lyrics.ovh/v1/' + this.artist + '/' + this.title);
            this.lyrics = response.data.lyrics;
            console.log(response);
            }catch(error){
                console.log(error);
                this.lyrics = "404-Song not found";
            }
        }
    },
});
