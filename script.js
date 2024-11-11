const questions = [
	{
		question: 'What is the result of 2 + 2?',
		answers: ['3', '4', '5', '6'],
		correct: '4',
	},
	{
		question: 'What is the capital of France?',
		answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
		correct: 'Paris',
	},
	{
		question: 'Which language runs in a web browser?',
		answers: ['Java', 'C', 'Python', 'JavaScript'],
		correct: 'JavaScript',
	},
]

let currentQuestionIndex = 0
let correctAnswers = 0

function loadQuestion() {
	if (currentQuestionIndex < questions.length) {
		const currentQuestion = questions[currentQuestionIndex]
		document.getElementById('question').textContent = currentQuestion.question
		document.querySelectorAll('.answer').forEach((button, index) => {
			button.textContent = currentQuestion.answers[index]
			button.setAttribute('data-answer', currentQuestion.answers[index])
		})
	} else {
		document.getElementById('quiz-container').style.display = 'none'
		document.getElementById('result').textContent = `Quiz finished! You got ${correctAnswers} out of ${questions.length} correct.`
	}
}

document.querySelectorAll('.answer').forEach((button) => {
	button.addEventListener('click', function () {
		const userAnswer = this.getAttribute('data-answer')
		const currentQuestion = questions[currentQuestionIndex]

		if (userAnswer === currentQuestion.correct) {
			correctAnswers++
		} else {
			alert(`Wrong answer. The correct answer is: ${currentQuestion.correct}`)
		}

		currentQuestionIndex++
		loadQuestion()
	})
})

loadQuestion()
