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
    question: 'HTML and CSS Comes under',
    answers: [
      { text: 'AL', correct: false },
      { text: 'Web Dev', correct: true},
      { text: 'Data Science', correct: false },
      { text: 'ML', correct: false }
    ]
  },
  {
    question: 'In HTML, <br> tag is used for',
    answers: [
      { text: 'Word Break', correct: false },
      { text: 'Line Break', correct: true },
      { text: 'Para Break', correct: false },
      { text: 'List', correct: false}
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'How to add CSS file to HTML?',
    answers: [
      { text: '<span> Tag', correct: false },
      { text: '<link> Tag', correct: true }
    ]
  },
  {
    question: 'Correct HTML Tag for Largest Heading?',
    answers: [
      { text: '<H6>', correct: false },
      { text: '<Head>', correct: false },
      { text: '<h1>', correct: true },
      { text: '<h2>', correct: false }
    ]
  },
  {
    question: 'Which CSS property is used to change Font?',
    answers: [
      { text: 'font-size', correct: false },
      { text: 'font-family', correct: true },
      { text: 'font-weight', correct: false },
      { text: 'font', correct: false }
    ]
  },
  {
    question: 'In CSS,Dot(.) is used to represent?',
    answers: [
      { text: 'Class', correct: true },
      { text: 'Id', correct: false },
      { text: 'Tag', correct: false },
      { text: 'Attribute', correct: false }
    ]
  },
  {
    question: "Hex Color Code for 'White' in CSS?",
    answers: [
      { text: '#80A484', correct: false },
      { text: '#BA4433', correct: false },
      { text: '#FFFFFF', correct: true },
      { text: '#000000', correct: false }
    ]
  }

]