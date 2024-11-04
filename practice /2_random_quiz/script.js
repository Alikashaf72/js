const apiKey = "gyHjFPApO0pVUx2KMP0RK2TQwZLA80KBWjijsVsM";
const apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=code&difficulty=Medium&limit=3&tags=HTML`;
let score = 0;
let answeredQuestions = 0; // Track how many questions have been answered

// Function to fetch questions
async function fetchQuestions() {
  try {
    const response = await fetch(apiUrl);
    const questions = await response.json();
    console.log("Fetched questions:", questions); // Log the fetched questions

    // Check if questions is an array
    if (Array.isArray(questions)) {
      displayQuestions(questions);
    } else {
      console.error("Unexpected format for questions:", questions);
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}

// Function to display questions
function displayQuestions(questions) {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = ""; // Clear previous content
  document.getElementById("score").textContent = ""; // Clear score

  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    // Log the question to check its structure
    console.log(`Question ${index}:`, question);

    // Convert answers object to an array
    const answers = Object.entries(question.answers).filter(
      ([key, value]) => value !== null
    );

    questionDiv.innerHTML = `
                    <p>${index + 1}. ${question.question}</p>
                    ${answers
                      .map(
                        ([key, value], i) => `
                        <div class="radio-container">
                            <input type="radio" name="question${index}" id="answer${index}${i}" value="${key}" onclick="disableOptions(${index})">
                            <label for="answer${index}${i}">${value}</label>
                        </div>
                    `
                      )
                      .join("")}
                    <div class="feedback" id="feedback${index}"></div>
                `;

    quizContainer.appendChild(questionDiv);
  });

  // Set button to "Submit All Answers" initially
  const submitButton = document.getElementById("submitAll");
  submitButton.textContent = "Submit All Answers";
  submitButton.onclick = () => submitAllAnswers(questions);
}

// Function to disable answer options after submission
function disableOptions(questionIndex) {
  const options = document.querySelectorAll(`input[name="question${questionIndex}"]`);
  options.forEach(option => {
    option.disabled = true;
  });
  answeredQuestions++; // Increment answered question count
}

// Function to check all answers and show score
function submitAllAnswers(questions) {
  questions.forEach((question, index) => {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    const feedbackDiv = document.getElementById(`feedback${index}`);

    if (selectedAnswer) {
      if (selectedAnswer.value === question.correct_answer) {
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.style.color = "green";
        score++;
      } else {
        feedbackDiv.textContent = "Incorrect! The correct answer is: " + question.correct_answer;
        feedbackDiv.style.color = "red";
      }
    } else {
      feedbackDiv.textContent = "You did not answer this question.";
      feedbackDiv.style.color = "orange";
    }
  });

  // Display the score
  document.getElementById("score").textContent = `Your score is: ${score}/${questions.length}`;

  // Change button to "Reset Quiz"
  const submitButton = document.getElementById("submitAll");
  submitButton.textContent = "Reset Quiz";
  submitButton.onclick = resetQuiz;
}

// Function to reset the quiz
function resetQuiz() {
  score = 0; // Reset score
  answeredQuestions = 0; // Reset answered questions count
  fetchQuestions(); // Re-fetch questions to restart quiz
}

// Fetch questions on page load
fetchQuestions();
