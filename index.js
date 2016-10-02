var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Header = require('./header');
var Game = require('./game');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<Game />
			</div>
		);
	}
});

$(document).ready(function() {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
	document.getElementById('app'));
});