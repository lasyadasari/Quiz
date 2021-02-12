const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: ' How many days do we have in a week?',
    answers: [
      { text: '4', correct: false },
      { text: '6', correct: false },
      { text: '7', correct: true },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'How many days are there in a normal year?',
    answers: [
      { text: '365', correct: true },
      { text: '360', correct: false },
      { text: '350', correct: false },
      { text: '369', correct: false }
    ]
  },
  {
    question: 'How many colors are there in a rainbow?',
    answers: [
      { text: '10', correct: false },
      { text: '7', correct: true },
      { text: '3', correct: false },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'Which animal is known as the ‘Ship of the Desert?',
    answers: [
      { text: 'lion', correct: false },
      { text: 'monkey', correct: false },
      { text: 'horse', correct: false },
      { text: 'camel', correct: true }
    ]
  },
  {
    question: 'How many letters are there in the English alphabet?',
    answers: [
      { text: '22', correct: false },
      { text: '20', correct: false },
      { text: '19', correct: false },
      { text: '26', correct: true}
    ]
  },
  {
    question: 'How many consonants are there in the English alphabet?',
    answers: [
      { text: '10', correct: false },
      { text: '30', correct: false},
      { text: '21', correct: true },
      { text: '31', correct: false }
    ]
  },
  {
    question: 'How many sides are there in a triangle?',
    answers: [
      { text: '3', correct: true },
      { text: '4', correct: false },
      { text: '5', correct: false },
      { text: '9', correct: false }
    ]
  },
  {
    question: 'Which month of the year has the least number of days?',
    answers: [
      { text: 'May', correct: false },
      { text: 'Febraury', correct: true },
      { text: 'August', correct: false },
      { text: 'November', correct: false }
    ]
  },
  {
    question: 'Which are the vowels in the English alphabet series?',
    answers: [
      { text: 'eioua', correct: false },
      { text: 'aeiou', correct: true  },
      { text: ' aueio', correct: false },
      { text: 'aioue', correct: false }
    ]
  },
  {
    question: 'How many primary colors are there?',
    answers: [
      { text: '5', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '9', correct: false }
    ]
  }
]