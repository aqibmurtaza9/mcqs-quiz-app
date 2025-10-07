// Maximum number of questions available
const MAX_QUESTIONS = questions.length; // currently 21, but you can expand```


const setupDiv = document.getElementById("setup");
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

const questionLimitInput = document.getElementById("questionLimit");
const timeLimitInput = document.getElementById("timeLimit");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const currentSpan = document.getElementById("current");
const totalSpan = document.getElementById("total");
const timeSpan = document.getElementById("time");
const questionBox = document.getElementById("questionBox");
const optionsBox = document.getElementById("optionsBox");
const scoreSpan = document.getElementById("score");
const totalScoreSpan = document.getElementById("totalScore");

// Variables
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0;
let timer = null;
let selectedOption = null;

// Start Quiz
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// function startQuiz() {
//   const limit = parseInt(questionLimitInput.value);
//   const timeLimit = parseInt(timeLimitInput.value) * 60; // in seconds

//   if (limit < 1 || limit > MAX_QUESTIONS) {
//     alert(`Please enter a number between 1 and ${MAX_QUESTIONS}`);
//     return;
//   }

//   if (timeLimit < 60 || timeLimit > 3600) {
//     alert("Time must be between 1 and 60 minutes.");
//     return;
//   }

//   // Shuffle and select limited questions
//   selectedQuestions = shuffleArray([...questions]).slice(0, limit);
//   currentQuestionIndex = 0;
//   score = 0;
//   timeLeft = timeLimit;
//   selectedOption = null;

//   // UI  setupDiv.classList.add("hidden");
//   quizDiv.classList.remove("hidden");
//   resultDiv.classList.add("hidden");
//   nextBtn.disabled = true;
//   nextBtn.style.display = "block";
//   totalSpan.textContent = limit;
//   currentSpan.textContent = 1;

//   showQuestion();
//   startTimer();
// }

function startQuiz() {
  const limit = parseInt(questionLimitInput.value);
  const timeLimit = parseInt(timeLimitInput.value) * 60; // in seconds

  if (limit < 1 || limit > MAX_QUESTIONS) {
    alert(`Please enter a number between 1 and ${MAX_QUESTIONS}`);
    return;
  }

  if (timeLimit < 60 || timeLimit > 3600) {
    alert("Time must be between 1 and 60 minutes.");
    return;
  }

  // Shuffle and select limited questions
  selectedQuestions = shuffleArray([...questions]).slice(0, limit);
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = timeLimit;
  selectedOption = null;

  // UI
  setupDiv.classList.add("hidden"); // <-- UNCOMMENT THIS LINE
  quizDiv.classList.remove("hidden");
  resultDiv.classList.add("hidden");
  nextBtn.disabled = true;
  nextBtn.style.display = "block";
  totalSpan.textContent = limit;
  currentSpan.textContent = 1;

  showQuestion();
  startTimer();
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.remove("correct", "incorrect", "selected");
    btn.onclick = () => selectOption(btn, i);
    optionsBox.appendChild(btn);
  });

  nextBtn.disabled = true;
  selectedOption = null;
}

function selectOption(button, index) {
  const buttons = optionsBox.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("selected"));

  selectedOption = index;
  button.classList.add("selected");
  nextBtn.disabled = false;
}

function nextQuestion() {
  const q = selectedQuestions[currentQuestionIndex];

  // Check answer
  const buttons = optionsBox.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    if (i === selectedOption) {
      if (selectedOption === q.correctIndex) {
        btn.classList.remove("selected");
        btn.classList.add("correct");
        if (selectedOption === q.correctIndex) score++;
      } else {
        btn.classList.remove("selected");
        btn.classList.add("incorrect");
      }
    }
    if (i === q.correctIndex) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextBtn.disabled = true;
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      currentSpan.textContent = currentQuestionIndex + 1;
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timeSpan.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  quizDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");
  scoreSpan.textContent = score;
  totalScoreSpan.textContent = selectedQuestions.length;
}

function restartQuiz() {
  resultDiv.classList.add("hidden");
  setupDiv.classList.remove("hidden");
  timeSpan.textContent = "00:00";
}

// Utility: Shuffle array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}