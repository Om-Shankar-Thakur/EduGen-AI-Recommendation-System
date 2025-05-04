// Questions Database
const questionsDatabase = {
  WebDevelopment: [
    {
      question: "Which HTML element is used to define a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      answer: "<a>",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "font-weight", "text-size"],
      answer: "font-size",
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Manager",
        "Document Operation Manager",
        "Data Object Module",
      ],
      answer: "Document Object Model",
    },
    {
      question: "Which HTML tag is used to create an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ol>",
    },
    {
      question:
        "Which JavaScript function is used to print content to the console?",
      options: ["console.log()", "print()", "document.write()", "log.print()"],
      answer: "console.log()",
    },
    {
      question: "Which tag is used to define an image in HTML?",
      options: ["<img>", "<picture>", "<image>", "<src>"],
      answer: "<img>",
    },
    {
      question: "What is the default position of an HTML element in CSS?",
      options: ["static", "relative", "absolute", "fixed"],
      answer: "static",
    },
    {
      question: "Which HTTP method is used to request data from a server?",
      options: ["GET", "POST", "PUT", "DELETE"],
      answer: "GET",
    },
    {
      question: "Which CSS property is used for making a website responsive?",
      options: ["media queries", "flexbox", "grid", "all of the above"],
      answer: "all of the above",
    },
    {
      question: "What does the `<title>` tag define in an HTML document?",
      options: ["Document title", "Main heading", "A hyperlink", "A script"],
      answer: "Document title",
    },
  ],
  UIDesign: [
    {
      question:
        "Which design principle focuses on keeping interfaces simple and user-friendly?",
      options: ["Consistency", "Simplicity", "Hierarchy", "Usability"],
      answer: "Simplicity",
    },
    {
      question: "Which tool is widely used for UI design?",
      options: ["Photoshop", "Figma", "Premiere Pro", "After Effects"],
      answer: "Figma",
    },
    {
      question: "What is the purpose of wireframing?",
      options: [
        "To design logos",
        "To create interactive prototypes",
        "To structure the layout of a page",
        "To animate UI elements",
      ],
      answer: "To structure the layout of a page",
    },
    {
      question: "Which color model is primarily used for digital screens?",
      options: ["CMYK", "RGB", "Pantone", "HEX"],
      answer: "RGB",
    },
    {
      question:
        "Which UI design principle helps guide users through an interface?",
      options: ["Contrast", "Alignment", "Visual Hierarchy", "Balance"],
      answer: "Visual Hierarchy",
    },
    {
      question:
        "Which typography term refers to the spacing between characters?",
      options: ["Kerning", "Leading", "Tracking", "Baseline"],
      answer: "Kerning",
    },
    {
      question: "Which font type is best for readability in long paragraphs?",
      options: ["Serif", "Sans-serif", "Monospace", "Script"],
      answer: "Serif",
    },
    {
      question: "Which of these UI components improves user accessibility?",
      options: [
        "Small text",
        "High contrast colors",
        "Complex animations",
        "Hidden elements",
      ],
      answer: "High contrast colors",
    },
    {
      question: "What does UX stand for?",
      options: [
        "User Experience",
        "User Exchange",
        "Unified Experience",
        "User Extension",
      ],
      answer: "User Experience",
    },
    {
      question: "What is a mockup in UI design?",
      options: [
        "A sketch",
        "A low-fidelity wireframe",
        "A high-fidelity visual representation",
        "A working prototype",
      ],
      answer: "A high-fidelity visual representation",
    },
  ],
  NodeJS: [
    {
      question: "What is Node.js primarily used for?",
      options: [
        "Frontend development",
        "Backend development",
        "Database management",
        "Designing UI",
      ],
      answer: "Backend development",
    },
    {
      question: "Which package manager is commonly used with Node.js?",
      options: ["NPM", "Yarn", "Composer", "Pip"],
      answer: "NPM",
    },
    {
      question: "Which of the following is a built-in Node.js module?",
      options: ["fs", "http", "path", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which command is used to initialize a Node.js project?",
      options: ["node init", "npm start", "npm init", "node start"],
      answer: "npm init",
    },
    {
      question: "What does 'require()' do in Node.js?",
      options: [
        "Defines a new module",
        "Imports a module",
        "Executes an API call",
        "Declares a variable",
      ],
      answer: "Imports a module",
    },
    {
      question:
        "Which framework is commonly used with Node.js for building web applications?",
      options: ["Django", "Flask", "Express", "Spring Boot"],
      answer: "Express",
    },
    {
      question: "Which of these is an asynchronous method in Node.js?",
      options: [
        "fs.readFile()",
        "fs.readFileSync()",
        "fs.existsSync()",
        "console.log()",
      ],
      answer: "fs.readFile()",
    },
    {
      question: "Which of these databases works well with Node.js?",
      options: ["MySQL", "MongoDB", "PostgreSQL", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which event-driven architecture does Node.js use?",
      options: [
        "Single-threaded, non-blocking",
        "Multi-threaded, blocking",
        "Parallel processing",
        "Synchronous",
      ],
      answer: "Single-threaded, non-blocking",
    },
    {
      question:
        "Which command is used to install a package globally in Node.js?",
      options: [
        "npm install package-name",
        "npm install -g package-name",
        "node install package-name",
        "npm global package-name",
      ],
      answer: "npm install -g package-name",
    },
  ],
  JavaScript: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What will `typeof null` return?",
      options: ["null", "undefined", "object", "number"],
      answer: "object",
    },
    {
      question:
        "Which method is used to remove the last element from an array?",
      options: ["pop()", "shift()", "splice()", "slice()"],
      answer: "pop()",
    },
    {
      question: "What is the correct syntax for an arrow function?",
      options: [
        "function() => {}",
        "() => {}",
        "=> function {}",
        "() => function",
      ],
      answer: "() => {}",
    },
    {
      question:
        "Which JavaScript loop executes at least once before checking the condition?",
      options: ["for", "while", "do...while", "foreach"],
      answer: "do...while",
    },
    {
      question: "Which operator is used for strict equality comparison?",
      options: ["==", "!=", "===", "!=="],
      answer: "===",
    },
    {
      question: "How do you convert a string to a number in JavaScript?",
      options: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What does `JSON.stringify()` do?",
      options: [
        "Parses JSON string",
        "Converts object to JSON string",
        "Stringifies an array",
        "Converts JSON to XML",
      ],
      answer: "Converts object to JSON string",
    },
    {
      question: "Which keyword is used to define a constant variable?",
      options: ["var", "let", "const", "define"],
      answer: "const",
    },
    {
      question: "What will `[1,2,3].map(x => x * 2)` return?",
      options: ["[1,2,3]", "[2,4,6]", "[1,4,9]", "[2,3,4]"],
      answer: "[2,4,6]",
    },
  ],
};

// Get course from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCourse = urlParams.get("course");

// Load questions for selected course
let questions = questionsDatabase[selectedCourse] || [];
let currentQuestionIndex = 0;
let score = 0;
let answerSelected = false; // Flag to prevent multiple selections

// DOM Elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const feedbackButton = document.getElementById("feedback-btn");

// Function to Load a Question
function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showFeedbackForm();
    return;
  }

  answerSelected = false;
  let currentQuestion = questions[currentQuestionIndex];
  let questionElement = document.getElementById("question");
  let optionsElement = document.getElementById("options");

  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    let button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.onclick = () => checkAnswer(button, option, currentQuestion.answer);
    optionsElement.appendChild(button);
  });
}

// Function to Check Answer
function checkAnswer(selectedButton, selectedOption, correctAnswer) {
  if (answerSelected) return; // Prevent multiple selections

  answerSelected = true; // Mark answer as selected
  let buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => {
    btn.classList.add("disabled"); // Disable all options
    if (btn.innerText === correctAnswer) {
      btn.classList.add("correct"); // Highlight correct answer
    } else if (btn.innerText === selectedOption) {
      btn.classList.add("incorrect"); // Highlight incorrect answer
    }
  });

  if (selectedOption === correctAnswer) {
    score++;
    scoreElement.innerText = `Score: ${score}`;
  }

  // Wait 1 second, then move to the next question
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 1000);
}

// Show Quiz Completion Message
function showQuizCompletion() {
  questionElement.innerText = "🎉 Quiz Completed!";
  optionsElement.innerHTML = `<p>Your final score is <strong>${score}</strong> out of <strong>${questions.length}</strong></p>`;
  feedbackButton.style.display = "block"; // Show feedback button
}

// Show Feedback Form
function showFeedbackForm() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("feedback-container").style.display = "block";
  document.getElementById("final-score").value = score;
}

// Submit Feedback
function submitFeedback() {
  const interest = document.getElementById("interest").value.trim();
  const careerGoal = document.getElementById("career-goal").value.trim();

  if (!interest || !careerGoal) {
    alert("Please fill in both your area of interest and career goal.");
    return;
  }
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("feedback-container").style.display = "none";
  document.getElementById("loading").style.display = "block";

  fetch("http://localhost:5000/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      scores: Array.from({ length: 384 }, () => Math.random()), // proper random vector

      interest: interest,
      career_goal: careerGoal,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("loading").style.display = "none";

      if (data.error) {
        alert(data.error);
        return;
      }

      const recBox = document.getElementById("recommendation");
      recBox.innerHTML = `
      <h2>Recommended Courses:</h2>
      <ul>
        ${data.recommendations
          .map(
            (course) =>
              `<li><b>${course.course_name}</b>: ${course.description}</li>`
          )
          .join("")}
      </ul>
      <h2>Personalized Learning Path:</h2>
      <p>${data.learning_path}</p>
    `;
      recBox.style.display = "block";
    })
    .catch((error) => {
      document.getElementById("loading").style.display = "none";
      alert("An error occurred while getting recommendations.");
      console.error(error);
    });
}

// Function to go to next question on clicking 'Next'
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
  document.getElementById("next-btn").disabled = true; // Disable again
}

// Initialize Quiz
loadQuestion();
