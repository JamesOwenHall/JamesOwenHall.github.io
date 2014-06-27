// ******
// CONFIG
// ******

var TERMINAL_SPEED = 50;

// ***********
// ENTRY POINT
// ***********

$(function() {
	animateTerminal();
});

// *******
// MODULES
// *******

// Terminal Typing

function animateTerminal() {
	typeTerminal('sudo rm -r /');

	window.setTimeout(function() {
		typeTerminal('James Hall');
	}, 1500);
}

// typeTerminal initiates the terminal typing animation.
function typeTerminal(text) {
	var $name = $('#name');
	var intervalID;
	var currentAnimation;

	var backspaceAnimation = function() {
		var textLength = $name.text().length;
		$name.text($name.text().substring(0, textLength - 1));
	};

	var typeAnimation = function() {
		var textLength = $name.text().length;
		$name.text(text.substring(0, textLength + 1));
	};

	var animate = function() {
		if (currentAnimation === backspaceAnimation) {
			if ($name.text().length > 0) {
				currentAnimation();
			} else {
				currentAnimation = typeAnimation;
			}
		} else {
			if ($name.text().length < text.length) {
				currentAnimation();
			} else {
				clearInterval(intervalID);
			}
		}
	};

	currentAnimation = backspaceAnimation;
	intervalID = window.setInterval(animate, TERMINAL_SPEED);
}
