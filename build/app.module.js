(function () {

  var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "This is *another* comment" }, { id: 3, author: "Mellanie Deam", text: "This is third!" }];

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
        this.props.children
      );
    }
  });

  var CommentList = React.createClass({
    displayName: "CommentList",

    render: function () {
      var commentNodes = this.props.data.map(function (comment) {
        return React.createElement(
          Comment,
          { author: comment.author, key: comment.id },
          comment.text
        );
      });
      return React.createElement(
        "div",
        { className: "commentList" },
        commentNodes
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

    getInitialState: function () {
      return { data: [] };
    },
    componentDidMount: function () {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({ data: data });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function () {
      return React.createElement(
        "div",
        { className: "commentBox" },
        React.createElement(
          "h1",
          null,
          "Hello, world! I am a CommentBox."
        ),
        React.createElement(CommentList, { data: this.state.data }),
        React.createElement(CommentForm, null)
      );
    }
  });

  ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('albums'));

  /*var app = angular.module('store', []);
  
  app.controller('StoreController', function() {
  	this.products = gems;
  });
  
  app.controller('RestifyController', ['$http', function($http) {
  
  	this.movies = "";
  	var temp = this;
  
  	$http.get('/api/get_movies').success(function(data) {
  		temp.movies = data;
  	}).error(function(e) {
  		//temp.greetings = e.message;
  	}); 
  }]);*/
})();