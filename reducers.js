var actions = require('./actions');
var combineReducers = require('redux').combineReducers;

var initialGuessState = [];
var initialGuessFeedback = 'Make Your Guess';
var initialGeneratedNumber = null;
var initialState = {
	eval: {
		number: 0,
		feedback: 'Make Your Guess'
	},
	guess: {
		guesses: [],
		count: 0
	}
};

var guessReducer = function(state, action) {
	state = state || initialState.guess;
	if (action.type === actions.SUBMIT_GUESS) {
		var gss = state.guesses.concat(action.guess);
		var cnt = state.count + 1;
		state = {
			guesses: gss,
			count: cnt
		};
	} else if (action.type === actions.START_NEW_GAME) {
		state =  {
			guesses: [],
			count: 0
		}
	}
	return state;
};

var evalReducer = function(state, action) {
	state = state || initialState.eval;
	if(action.type === actions.GEN_NEW_RANDOM_NUMBER) {
		var nmbr = Math.floor((Math.random() * 100) + 1);
		state = {
			number: nmbr,
			feedback: 'Make Your Guess'
		};
	} else if (action.type === actions.EVAL_GUESS) {
		var nmbr = state.number;
		var guess = action.guess;
		var fb = '';
		if (guess == nmbr) {
			fb = 'Correct Guess, Great Job!';
		}
		else if (guess <= nmbr - 50 || guess >= nmbr + 50) {
			fb ='Ice Cold';
		}
		else if (guess <= nmbr - 30 || guess >= nmbr + 30) {
			fb ='Cold';
		}
		else if (guess <= nmbr - 20 || guess >= nmbr + 20) {
			fb = 'Warm';
		}	
		else if (guess <= nmbr - 10 || guess >= nmbr + 10) {
			fb ='Hot';
		}
		else if (guess > nmbr - 10 || guess < nmbr + 10) {
			fb = 'Very Hot';
		}
		state = {
			number: nmbr,
			feedback: fb
		};
	}
	return state;
};

var reducer = combineReducers({
	guess: guessReducer,
	eval: evalReducer,
});

exports.guessReducer = guessReducer;
exports.evalReducer = evalReducer;
exports.reducer = reducer;