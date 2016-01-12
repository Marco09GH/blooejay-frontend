(function () {

	ReactDOM.render(React.createElement(
		'h1',
		null,
		'Hello, Marek!'
	), document.getElementById('albums'));

	var app = angular.module('store', []);

	app.controller('StoreController', function () {
		this.products = gems;
	});

	app.controller('RestifyController', ['$http', function ($http) {

		this.movies = "";

		var temp = this;

		$http.get('/api/get_movies').success(function (data) {
			temp.movies = data;
		}).error(function (e) {
			//temp.greetings = e.message;
		});
	}]);
})();