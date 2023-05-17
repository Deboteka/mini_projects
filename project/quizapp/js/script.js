const questions =[
    { 
        question: "egafyujgggdhfvgdvdjhagv",
        answers:[
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: true},
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: false},
        ]
    },
    {
        question: "egafyuvgdvdjhagv",
        answers:[
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: true},
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: false},
        ]
    },
    {
        question: "egafyudfghjkhgfdfghfvgdvdjhagv",
        answers:[
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: true},
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: false},
        ]
    },
    {
        question: "egafyujgggdhfdfghjkjhgffvgdvdjhagv",
        answers:[
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: true},
            {text: "cbcvbjhcb", correct: false},
            {text: "cbcvbjhcb", correct: false},
        ]
    }
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-button");
const nextButton= document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
