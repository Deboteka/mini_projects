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
        question: "Which Tag is used to link javascript with html?",
        answers:[
            {text: "link tag", correct: false},
            {text: "anchor tag", correct: false},
            {text: "form tag", correct: false},
            {text: "script tag", correct: true},
        ]
    },
    {
        question: "How are visited links displayed?",
        answers:[
            {text: "underlined and purple" , correct:true},
            {text: "underlined and red", correct:false},
            {text: "underlined and blue", correct: false},
            {text: "just purple", correct: false},
        ]
    },
    {
        question: "Whcih type of css have more priority than the others?",
        answers:[
            {text: "external css", correct: false},
            {text: "internal css", correct: false},
            {text: "The more specified one like with class or id", correct: true},
            {text: "inline css", correct: false},
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
