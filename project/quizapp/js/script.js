const questions =[
    { 
        question: "Whuch is true about HTML?",
        answers:[
            {text: "It is a programming language", correct: false},
            {text: "Hyper Text Markup Language of the World Wide Web", correct: true},
            {text: "A link is written in thr body tag", correct: false},
            {text: "while saving the file .html and .htm are not the same", correct: false},
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
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerText = 'Wanna try again';
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
