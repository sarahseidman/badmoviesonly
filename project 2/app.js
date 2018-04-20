var movies = new Vue({
 	el: "#display",
 	data: {
 		searchedmovie: {
 			obj: null,
 			title: "",
 			dir: "",
 			stars: "",
 			rating: null,
 			bad: true
 		},
 		find: "",
 		moviesList: [],

 	},

 	methods: {
 		findMovie: function(){ 			
 			var url =  "http://www.omdbapi.com/?t=" + this.find + "&y=&plot=full&r=json&apikey=6ebc7ebd"
 			axios.get(url).then(function(response){
            movies.searchedmovie.obj = response.data;
            movies.searchedmovie.title = response.data.Title;
            movies.searchedmovie.dir = response.data.Director;
            movies.searchedmovie.stars = response.data.Actors;
            movies.searchedmovie.rating = parseInt(response.data.Metascore);
            movies.checkScore(movies.searchedmovie.rating);
 			})
 			
 		},
 		checkScore: function(score){
 			if(score > 50){
 				this.searchedmovie.bad = false;
 			}
 			else {
 				this.searchedmovie.bad = true;
 			}
 		},
 		addToList: function(){
 			movies.moviesList.push(movies.searchedmovie.title);

 		},
 		remove: function(toRemove){
 			for(var i=0; i<movies.moviesList.length; i++){
 				if(movies.moviesList[i] == toRemove){
 					movies.moviesList.splice(i, 1);
 				}
 			}
 		}


 	}
})


