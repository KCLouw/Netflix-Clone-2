let myVue = new Vue({
    el: '#myApp',

    data: {
        watchlist: []
    },

    methods: {
        addMovie(x) {
            this.watchlist.push(x)
        }
    }
})