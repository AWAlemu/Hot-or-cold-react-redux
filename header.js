var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');

var Header = React.createClass({
	onNewGame: function() {
		this.props.dispatch(actions.startNewGame());
		this.props.dispatch(actions.newRandomNumber());
	},
	render: function() {
		return (
			<header> 
				<nav> 
					<ul className="clearfix">
						<li><a className="what" href="#">What?</a></li>
						<li><a className="new" href="#" onClick={this.onNewGame}>+ New Game</a></li>
					</ul>
				</nav>

				<h1>HOT or COLD</h1>
			</header>
		);
	}
});

var Container = connect()(Header);
module.exports = Container;