(function(){
    
/*var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "Mellanie Deam", text: "This is third!"}
];*/
    
var Comment = React.createClass({
  render: function() {
    return (
      <div className="movie">
        <h1>{this.props.title}</h1>
        <h2>{this.props.year}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
});


var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(movie) {
        return (
            <Comment title={movie.title} year={movie.year}>{movie.imdb}</Comment>
        );    
    });
    return (
      <div className="commentList">
        {commentNodes}
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
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Hello, world! I am a CommentBox.</h1>
        <CommentList data={this.state.data} />
        /*<CommentForm />*/
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/api/get_movies" />,
  document.getElementById('albums')
);
    
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