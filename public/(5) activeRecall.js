let flashcards = [];
let quizQueue = [];
let currentCard = null;

function addFlashcard() {
    let q = document.getElementById("question").value.trim();
    let a = document.getElementById("answerInput").value.trim();

    if (!q || !a) return alert("Please fill in both fields.");

    flashcards.push({ question: q, answer: a });
    renderFlashcards();

    document.getElementById("question").value = "";
    document.getElementById("answerInput").value = "";
}

function deleteFlashcard(i) {
    flashcards.splice(i, 1);
    renderFlashcards();
}

function renderFlashcards() {
    let container = document.getElementById("flashcards-container");
    container.innerHTML = "<h2>Your Flashcards</h2>";

    flashcards.forEach((fc, i) => {
        container.innerHTML += `
        <div class="flashcard">
            <div class="delete-btn" onclick="deleteFlashcard(${i})">×</div>
            <p><strong>Q:</strong> ${fc.question}</p>
            <p><strong>A:</strong> ${fc.answer}</p>
        </div>`;
    });
}

function startQuiz() {
    if (flashcards.length === 0) return alert("Add some flashcards first!");

    quizQueue = [...flashcards];
    document.querySelector(".thumbs").style.display = "none";
    nextCard();

    document.getElementById("quiz-card").style.display = "block";
}

function nextCard() {
    if (quizQueue.length === 0) {
        alert("Quiz Complete!");
        document.getElementById("quiz-card").style.display = "none";
        document.querySelector(".thumbs").style.display = "none";
        return;
    }

    currentCard = quizQueue.shift();
    document.getElementById("quiz-question").textContent = currentCard.question;
    document.getElementById("quiz-answer").textContent = currentCard.answer;

    let quizCard = document.getElementById("quiz-card");
    quizCard.classList.remove("show-answer");

    quizCard.onclick = () => {
        quizCard.classList.add("show-answer");
        document.querySelector(".thumbs").style.display = "flex";
        quizCard.onclick = null;
    };
}

function thumbUp() {
    nextCard();
}

function thumbDown() {
    quizQueue.push(currentCard);
    nextCard();
}