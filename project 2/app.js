var movies = new Vue({
 	el: "#display",
 	data: {
 		searched-movie: []
 		movies: [
 		{title: "Titanic"}],
 		search: ""

 	},

 	methods: {
 		search: function(){
 			axios.get(url).then(function(response){
            this.results = response.data //put this data into movies object
 		}
 	}


 })

 var url = "";


