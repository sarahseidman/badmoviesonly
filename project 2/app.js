var movies = new Vue({
 	el: "#display",
 	data: {
 		searchedmovie: {
 			obj: null,
 			title: "",
 			link: "",
 			dir: "",
 			stars: "",
 			rating: null,
 			bad: true
 		},
 		find: "",
 		moviesList: [],
 		scoreColor: "black"

 	},

 	methods: {
 		findMovie: function(){ 			
 			var url =  "http://www.omdbapi.com/?t=" + this.find + "&y=&plot=full&r=json&apikey=6ebc7ebd"
 			axios.get(url).then(function(response){
            movies.searchedmovie.obj = response.data;
            movies.searchedmovie.title = response.data.Title;
            movies.searchedmovie.link = response.data.Poster;
            movies.searchedmovie.dir = response.data.Director;
            movies.searchedmovie.stars = response.data.Actors;
            if(parseInt(response.data.Metascore)){
            	movies.searchedmovie.rating = parseInt(response.data.Metascore);
            }
            else {
            	movies.searchedmovie.rating = "not available";
            }
            movies.checkScore(movies.searchedmovie.rating);
 			})
 			
 		},
 		checkScore: function(score){
 			if(score > 50){
 				this.searchedmovie.bad = false;
 				this.scoreColor = "red";
 			}
 			else {
 				this.searchedmovie.bad = true;
 				this.scoreColor = "green";
 			}
 		},
 		addToList: function(){
 			movies.moviesList.push(movies.searchedmovie.title);
 			movies.searchedmovie.bad = false;

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


