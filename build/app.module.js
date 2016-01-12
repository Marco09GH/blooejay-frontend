(function () {

  var CommentBox = React.createClass({
    displayName: 'CommentBox',

    render: function () {
      return React.createElement(
        'div',
        { className: 'commentBox' },
        'Hello, world! I am a CommentBox.'
      );
    }
  });
  ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));

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