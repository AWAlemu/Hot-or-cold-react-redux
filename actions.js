var START_NEW_GAME = 'START_NEW_GAME';
var startNewGame = function() {
	return {
		type: START_NEW_GAME
	};
};

var GEN_NEW_RANDOM_NUMBER = 'GEN_NEW_RANDOM_NUMBER';
var newRandomNumber = function() {
	return {
		type: GEN_NEW_RANDOM_NUMBER
	};
};

var SUBMIT_GUESS = 'SUBMIT_GUESS';
var submitGuess = function(guess) {
	return {
		type: SUBMIT_GUESS,
		guess: guess
	};
};

var EVAL_GUESS = 'EVAL_GUESS';
var evalGuess = function(guess) {
	return {
		type: EVAL_GUESS,
		guess: guess
	}
}

exports.SUBMIT_GUESS = SUBMIT_GUESS;
exports.submitGuess = submitGuess;
exports.GEN_NEW_RANDOM_NUMBER = GEN_NEW_RANDOM_NUMBER;
exports.newRandomNumber = newRandomNumber;
exports.EVAL_GUESS = EVAL_GUESS;
exports.evalGuess = evalGuess;
exports.START_NEW_GAME = START_NEW_GAME;
exports.startNewGame = startNewGame;