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

var countdown = 30

// selecting the elements
var timerEl = document.getElementById('time')
var startCardEl = document.getElementById('startCard')
var questionsCardEl = document.getElementById('questionsCard')
var gameOverCardEl = document.getElementById('gameOverCard')
var resultsCardEl = document.getElementById('resultsCard')
var startGameBtn = document.getElementById('start')
var submitBtn = document.getElementById('submit')

// listening for when user clicks the start button to begin the quiz.
startGameBtn.addEventListener('click', startGame)

// function that starts the quiz game
function startGame() {
	startCardEl.setAttribute('data-initial', 'hidden')
	questionsCardEl.setAttribute('data-initial', 'visible')
	setInterval(clockTick, 1000)
	populateQuestions()
	let index = 0
	let questionIndex = questionBank[index]
	var questionTitleEl = document.getElementById('question-title')
	questionTitleEl.innerText = questionIndex.questions
	console.log(questionTitleEl)
}

function stopGame() {}

// function to decrement the timer every one second.
function clockTick() {
	countdown--
	timerEl.textContent = countdown

	if (countdown == 0) {
		stopGame()
	}
}
function populateQuestions() {
	// get the first question in the questions bank array
	let index = 0
	let questionIndex = questionBank[index]
	var questionTitleEl = document.getElementById('question-title')
	questionTitleEl.textContext = questionBank[0].questions
}

function calculateScore() {}
