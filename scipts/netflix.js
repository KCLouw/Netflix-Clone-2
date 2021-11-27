

let myVue = new Vue({
    el: '#myApp',

    data: {
        watchlist: [],
        state: 'no-watchlist'
    },

    methods: {
        addMovie(x) {
           return this.watchlist.push(x);
        },

        dltMovie() {
            this.watchlist.pop()
        },
        save() {
            let myMovie = JSON.stringify(watchlist['title']);
            localStorage.setItem('userInput', myMovie);

            let savedMovie = localStorage.getItem('userInput');
            let returnedMovie = JSON.parse(savedMovie); 
        },

        changeState(newState) {
            this.state = newState;
        }
    },
})
            
            // return document.getElementById('savedList').innerHTML = returnedMovie;
// let myMovie = JSON.stringify(watchlist);
// localStorage.setItem('userInput', watchlist);

// let savedMovie = localStorage.getItem('userInput');
// let newMovie = JSON.parse(savedMovie);