(function () {

  var Comment = React.createClass({
    displayName: "Comment",

    render: function () {
      return React.createElement(
        "div",
        { className: "comment" },
        React.createElement(
          "h2",
          { className: "commentAuthor" },
          this.props.author
        ),
        marked(this.props.children.toString())
      );
    }
  });

  var CommentList = React.createClass({
    displayName: "CommentList",

    render: function () {
      return React.createElement(
        "div",
        { className: "commentList" },
        React.createElement(
          Comment,
          { author: "Pete Hunter" },
          "This is one comment"
        ),
        React.createElement(
          Comment,
          { author: "Jordan Walke" },
          "This is *another* comment"
        )
      );
    }
  });

  var CommentForm = React.createClass({
    displayName: "CommentForm",

    render: function () {
      return React.createElement(
        "div",
        { className: "commentForm" },
        "Hello, world! I am a CommentForm."
      );
    }
  });

  var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function () {
      return React.createElement(
        "div",
        { className: "commentBox" },
        React.createElement(
          "h1",
          null,
          "Hello, world! I am a CommentBox."
        ),
        React.createElement(CommentList, null),
        React.createElement(CommentForm, null)
      );
    }
  });
  ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('albums'));

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