const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
            
        ]
    }, 
    {
        question: "Which is smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
            
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
            
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
            
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Montreal", correct: false},
            { text: "Toronto", correct: false},
            { text: "Ottawa", correct: true},
            { text: "Vancouver", correct: false},
        ]
    },
    {
        question: "Which planet in our solar system is the closest to the sun?",
        answers: [
            { text: "Venus", correct: false},
            { text: "Mars", correct: false},
            { text: "Mercury", correct: true},
            { text: "Jupiter", correct: false},
        ]
    },
    {
        question: "Who wrote the Harry Potter series of books?",
        answers: [
            { text: "J.K. Rowling", correct: true},
            { text: "Stephenie Meyer", correct: false},
            { text: "Suzanne Collins", correct: false},
            { text: "Veronica Roth", correct: false},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: true},
            { text: "Nile River", correct: false},
            { text: "Yangtze River", correct: false},
            { text: "Mississippi River", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
            { text: "Mars", correct: false},
        ]
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        answers: [
            { text: "Brazil", correct: true},
            { text: "Colombia", correct: false},
            { text: "Vietnam", correct: false},
            { text: "Indonesia", correct: false},
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
          { text: "Alexander Graham Bell", correct: true },
          { text: "Thomas Edison", correct: false },
          { text: "Nikola Tesla", correct: false },
          { text: "Albert Einstein", correct: false },
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
          { text: "Brain", correct: false },
          { text: "Heart", correct: false },
          { text: "Liver", correct: false },
          { text: "Skin", correct: true },
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
          { text: "Tokyo", correct: true },
          { text: "Kyoto", correct: false },
          { text: "Osaka", correct: false },
          { text: "Hiroshima", correct: false },
        ]
    },
    {
        question: "What is the name of the tallest mountain in Africa?",
        answers: [
          { text: "Mount Kilimanjaro", correct: true },
          { text: "Mount Everest", correct: false },
          { text: "Mount Denali", correct: false },
          { text: "Mount McKinley", correct: false },
        ]
    },
    {
        question: "What is the name of the longest river in South America?",
        answers: [
          { text: "Amazon River", correct: true },
          { text: "Nile River", correct: false },
          { text: "Congo River", correct: false },
          { text: "Yangtze River", correct: false },
        ]
    },
    {
        question: "What is the largest country in the world by land area?",
        answers: [
            { text: "Russia", correct: true},
            { text: "Canada", correct: false},
            { text: "China", correct: false},
            { text: "United States", correct: false},
        ]
    },
    {
        question: "What is the name of the first man to walk on the moon?",
        answers: [
            { text: "Neil Armstrong", correct: true},
            { text: "Buzz Aldrin", correct: false},
            { text: "Michael Collins", correct: false},
            { text: "Alan Shepard", correct: false},
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
          { text: "K2", correct: false },
          { text: "Mount Kilimanjaro", correct: false },
          { text: "Mount Everest", correct: true },
          { text: "Mount Fuji", correct: false }
        ]
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        answers: [
          { text: "Australia", correct: true },
          { text: "New Zealand", correct: false },
          { text: "Fiji", correct: false },
          { text: "Papua New Guinea", correct: false }
        ]
    },
    {
        question: "Who is the current CEO of Amazon?",
        answers: [
          { text: "Jeff Bezos", correct: false },
          { text: "Sundar Pichai", correct: false },
          { text: "Tim Cook", correct: false },
          { text: "Andy Jassy", correct: true }
        ]
    },
    {
        question: "Which artist painted the Mona Lisa?",
        answers: [
          { text: "Pablo Picasso", correct: false },
          { text: "Leonardo da Vinci", correct: true },
          { text: "Vincent van Gogh", correct: false },
          { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
          { text: "Mars", correct: false },
          { text: "Venus", correct: false },
          { text: "Mercury", correct: true },
          { text: "Neptune", correct: false }
        ]
    }

];

console.log(questions.length);

const questionElement =document.getElementById('question');
const answerButtons =document.getElementById('answer-buttons');
const nextButton =document.getElementById('next-btn');

let askedQuestions = [];
const numQuestions = 5;

function getRandomQuestion() {
    let unansweredQuestions = questions.filter(q => !askedQuestions.includes(q));
    let index = Math.floor(Math.random() * unansweredQuestions.length);
    return unansweredQuestions[index];
}

function showRandomQuestion() {
    resetState();

    if (askedQuestions.length === numQuestions) {
        showScore();
        return;
    }

    let currentQuestion = getRandomQuestion();
    let questionNo = askedQuestions.length + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    askedQuestions.push(currentQuestion);
}

function startRandomQuiz() {
    askedQuestions = [];
    score = 0;
    nextButton.innerHTML = "Next";
    showRandomQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    handleRandomNextButton();
});


function showScore() {
    resetState();
    questionElement.innerHTML = `Your score ${score} out of 5!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    nextButton.removeEventListener("click", handleRandomNextButton);
    nextButton.addEventListener("click", startRandomQuiz);
}



function handleRandomNextButton() {
    if (askedQuestions.length < numQuestions) {
        showRandomQuestion();    
    } else {
        showScore();
    }
}



startRandomQuiz();