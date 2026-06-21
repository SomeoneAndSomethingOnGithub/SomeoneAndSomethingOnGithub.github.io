function decryptionfunction(a) {
    const bin = atob(a);
    const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
}

function checkAnswers() {
    const totalQuestions = 7;
    let score = 0;
    const result = document.getElementById("result");

    //Encrypted things to prevent someone from cheating
    const quizData = [
        { id: "q1", ans: "Yw==" },
        { id: "q2", ans: "MTQ=" },
        { id: "q3", ans: "MTgw" },
        { id: "q4", ans: "NDY=" },
        { id: "q5", ans: "NDA1" },
        { id: "q6", ans: "MTc=" },
        { id: "q7", ans: "MjA3" }        
    ];

    quizData.forEach((item, index) => {
        const inputElement = document.getElementById(item.id);
        const questionBox = document.getElementById(`question${index + 1}`);
        
        if (inputElement && questionBox) {
            const userAnswer = inputElement.value.trim();
            const correctAnswer = decryptionfunction(item.ans);

            if (userAnswer === correctAnswer) {
                questionBox.className = "rightquestion";
                score++;
            } else {
                questionBox.className = "wrongquestion";
            }
        }
    });

    if (score === 0) {
        result.textContent = "Keep practicing! You didn't get any correct this time.";
    } else {
        result.textContent = `Your Final Score: ${score} / ${totalQuestions}`;
    }
}