var React = require('react');
var connect = require('react-redux').connect;

var Guesses = require('./guesses');
var actions = require('./actions');

var Game = React.createClass({
	getInitialState: function() {
		return {
			input: '',
			numGenerated: false
		}
	},
	onInputChanged: function(event) {
		var text = event.target.value;
		this.setState({input: text});
	},
	onSubmitGuess: function(event) {
		event.preventDefault();
		this.props.dispatch(
			actions.submitGuess(this.state.input)
		);
		this.props.dispatch(
			actions.evalGuess(this.state.input)
		);
	},
	onNewGame: function(event) {
		event.preventDefault();
		this.props.dispatch(
			actions.newRandomNumber()
		);
	},
	componentWillMount: function() {
		if (!this.state.numGenerated) {
			this.setState({numGenerated: false});
			this.props.dispatch(actions.newRandomNumber());
		}
	},
	render: function () {
		return (
			<section className="game">
			
				<h2 id="feedback">{this.props.feedback}</h2>

				<form>
					<input type="text" onChange={this.onInputChanged} name="userGuess" id="userGuess" className="text" maxLength="3" placeholder="Enter Your Guess"/>
	      			<button id="guessButton" onClick={event.preventDefault(), this.onSubmitGuess}>Guess</button>
	      			<button id="playAgain">Play Again</button>
				</form>
				
	      		<p>Guess #<span id="count">{this.props.count}</span>!</p>
				
				<Guesses />
			</section>
		);
	}
});

var mapStateToProps = function(state, props) {
	return {
		feedback: state.eval.feedback,
		count: state.guess.count
	};
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;