const startQuizBtn = document.querySelector('#start-quiz');
const quiz = document.querySelector('#quiz');
const questionDiv = document.querySelector('.question');
const optionsDiv = document.querySelector('.options');
const questionNum = document.querySelector('#question-num');
const quizData = [
  {
    question: 'What is the extension of PDF?',
    options: [
      'Portable Document File',
      'Portable Document Folder',
      'Portable Document Format',
      'Permanant Document Format',
    ],
    correctAnswer: 'Portable Document Format',
  },
  {
    question: 'What does CSS stands for?',
    options: [
      'Course Code Stylesheet',
      'Cascading Stylesheet',
      'Complex Stylesheet',
      'Copycat Stylesheet',
    ],
    correctAnswer: 'Cascading Stylesheet',
  },
  {
    question: 'Expand RDBMS',
    options: [
        'Relational Data Book Management System',
        'Relational Data Base Management System',
        'Relational Disc Base Management System',
        'Relational Document Based Management System'
        ],
    correctAnswer: 'Relational Data Base Management System',
  },
  {
    question: 'What is SQL?',
    options: [
        'Structured Query Language',
        'Structured Queue Language',
        'Structured Quick Language',
        'Structured Quiz Language'
    ],
    correctAnswer: 'Structured Query Language',
  },
  {
    question: 'What does http stands for?',
    options: [
      'High text transfer protocol',
      'Hyper text type paragraph',
      'Hyper text transfer paragraph',
      'Hyper text transfer protocol',
    ],
    correctAnswer: 'Hyper text transfer protocol',
  },
];
const nextBtn = document.querySelector('#next');
let questionCount = 0;
let hasSelectOpt = false;
let score = 0;



startQuizBtn.addEventListener('click', () => {
  startQuizBtn.style.display = 'none';
  quiz.style.display = 'block';
  displayQuestion(
    quizData[questionCount].question,
    quizData[questionCount].options
  );
});

const createOption = (option) => {
  const opt = document.createElement('div');
  opt.innerHTML = option;
  opt.setAttribute('onclick', 'optSelect(this)');
  optionsDiv.appendChild(opt);
};

const displayQuestion = (question, options) => {
  questionDiv.innerHTML = question;
  questionNum.innerHTML = `Question ${questionCount + 1} of ${quizData.length}`;
  optionsDiv.innerHTML = '';
  options.forEach((option) => {
    createOption(option);
  });
};

const displayResult = () => {
  quiz.style.display = 'none';
  document.querySelector('#correct').innerHTML = `Correct Answers = ${score}`;
  document.querySelector('#wrong').innerHTML = `Wrong Answers= ${quizData.length - score}`;
  const percentage = (score / quizData.length) * 100;
  document.querySelector('#percentage').innerHTML = `Total Percentage: ${percentage}%`;
  percentage >= 50
    ? (document.querySelector('#percentage').style.color = '#009900')
    : (document.querySelector('#percentage').style.color = '#cc0001');
  document.querySelector('#result').style.display = 'block';
};

const optSelect = (e) => {
  if (!hasSelectOpt) {
    hasSelectOpt = true;
    if (e.innerHTML === quizData[questionCount].correctAnswer) {
      e.style = 'background-color:#009900; color:#fff';
      score++;
    } else {
      e.style = 'background-color:#cc0001; color:#fff';
    }
  }
};

nextBtn.addEventListener('click', () => {
  if (hasSelectOpt) {
    questionCount++;
    hasSelectOpt = false;
    if (questionCount < quizData.length) {
      displayQuestion(
        quizData[questionCount].question,
        quizData[questionCount].options
      );
    } else {
      displayResult();
    }
  }
});