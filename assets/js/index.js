var countdown = 30
var index = 0

// selecting the elements
var timerEl = document.getElementById('time')
var startCardEl = document.getElementById('startCard')
var questionsCardEl = document.getElementById('questionsCard')
var gameOverCardEl = document.getElementById('gameOverCard')
var resultsCardEl = document.getElementById('resultsCard')
var startGameBtn = document.getElementById('start')
var submitBtn = document.getElementById('submit')

startGameBtn.onclick = startGame()

function startGame() {
	setInterval(clockTick, 1000)
}

// function to decrement the timer every one second.
function clockTick() {
	countdown--
	timerEl.textContent = countdown
}
// array of questions and possible answers
var questionBank = [
	{
		questions: 'Where do you link the javascript file?',
		options: ['script tag', 'html tag', 'navbar', 'css stylesheet'],
		answer: 'script tag',
	},
	{
		questions: 'Where do you like the css stylesheet?',
		options: ['body tag', 'html tag', 'javascript file', 'footer tag'],
		answer: 'html tag',
	},
	{
		questions: 'What do arrays store?',
		options: [
			'numbers and strings',
			'other arrays',
			'booleans',
			'all of the above',
		],
		answer: 'all of the above',
	},
	{
		questions: 'What file is used to style websites?',
		options: ['CSS', 'HTML', 'GitHub', 'JavaScript'],
		answer: 'CSS',
	},
	{
		questions: 'What attribute is used to group different elements together?',
		options: ['class', 'id', 'functions', 'event.listeners'],
		answer: 'class',
	},
]
