"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _components = require("components");

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {

  /*var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
    {id: 3, author: "Mellanie Deam", text: "This is third!"}
  ];*/

  var Comment = React.createClass({
    displayName: "Comment",

    render: function render() {
      return React.createElement(
        "div",
        { className: "movie" },
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.year
        ),
        React.createElement(
          "p",
          null,
          this.props.children
        )
      );
    }
  });

  var CommentList = React.createClass({
    displayName: "CommentList",

    render: function render() {
      var commentNodes = this.props.data.map(function (movie) {
        return React.createElement(
          Comment,
          { title: movie.title, year: movie.year },
          movie.imdb
        );
      });
      return React.createElement(
        "div",
        { className: "commentList" },
        commentNodes
      );
    }
  });

  var CommentForm = function (_React$Component) {
    _inherits(CommentForm, _React$Component);

    function CommentForm() {
      _classCallCheck(this, CommentForm);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).apply(this, arguments));
    }

    _createClass(CommentForm, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "commentForm" },
          "Hello, world! I am a CommentForm."
        );
      }
    }]);

    return CommentForm;
  }(React.Component);

  var CommentBox = function (_React$Component2) {
    _inherits(CommentBox, _React$Component2);

    function CommentBox() {
      _classCallCheck(this, CommentBox);

      var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this));

      _this2.state = { data: [] };
      return _this2;
    }

    _createClass(CommentBox, [{
      key: "componentDidMount",
      value: function componentDidMount() {
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
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          { className: "commentBox" },
          React.createElement(
            "h1",
            null,
            "Hello, world! I am Mark"
          ),
          React.createElement(CommentList, { data: this.state.data })
        );
      }
    }]);

    return CommentBox;
  }(React.Component);

  var PhotoWall = function (_React$Component3) {
    _inherits(PhotoWall, _React$Component3);

    function PhotoWall() {
      _classCallCheck(this, PhotoWall);

      var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoWall).call(this));

      _this3.state = { count: 0 };
      return _this3;
    }

    _createClass(PhotoWall, [{
      key: "handleClick",
      value: function handleClick() {
        this.setState({ count: this.state.count + 1 });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(_components2.default, null),
          React.createElement(
            "h1",
            { onClick: this.handleClick.bind(this) },
            " Photo Wall: ",
            this.state.count,
            " "
          )
        );
      }
    }]);

    return PhotoWall;
  }(React.Component);

  ReactDOM.render(React.createElement(CommentBox, { url: "/api/movies" }), document.getElementById('albums'));

  ReactDOM.render(React.createElement(PhotoWall, null), document.getElementById('photo_wall'));

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