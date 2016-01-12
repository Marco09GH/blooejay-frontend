(function(){
    
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunter">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Hello, world! I am a CommentBox.</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('albums')
);
    
var app = angular.module('store', []);

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
}]); 

})();