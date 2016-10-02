var React = require('react');
var connect = require('react-redux').connect;

var Guesses = React.createClass({
	render: function() {
		var guesses = (this.props.guesses || []).map(function(guess) {
			return <li>{guess}</li>;
		});
		return (
			<ul id="guessList" className="guessBox clearfix">
				{guesses}
			</ul>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		guesses: state.guess.guesses
	};
};
var Container = connect(mapStateToProps)(Guesses);

module.exports = Container;