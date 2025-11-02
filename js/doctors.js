// --- QUIZ QUESTIONS ---
const questions = [
  { q: "1. Do you monitor your Income and Expenses?", options: ["yes","no"], correct: 0 },
  { q: "2. Do you take care of your Liquidity with informed Decisions?", options: ["yes","no"], correct: 0 },
  { q: "3. Whether your CA effectively helps in Tax Planning?", options: ["yes","no"], correct: 0 },
  { q: "4. Do you feel you, over rely upon CA?",options: ["yes","no"], correct: 1 },
  { q: "5. Are you knowing Tax Recovery Process?",options: ["yes","no"], correct: 0 },
  { q: "6. Do you have Fear of Scrutiny or Raids?", options: ["yes","no"], correct: 1 },  
  { q: "7. Do you Track your Returns?", options: ["yes","no"], correct: 0 },
  { q: "8. Do you have incurred Losses in Investments", options: ["yes","no"], correct: 0 },
  { q: "9. Do you rely on Brokers and Agents for your Investment Decisions?",options: ["yes", "no"],correct:0},
  { q: "10. Have you ever done your Risk Profiling?",options: ["yes","no"], correct : 1},
  { q: "11. Do you require any financial Discipline at this point of Life?",options: ["yes","no"], correct : 0},
  { q: "12. Are you Doing your Wealth Audit?",options: ["yes","no"], correct : 1},
  { q: "13. Are you requiring any help in Assets Building?",options: ["yes","no"], correct : 0},
  { q: "14. If we suggest you some systems at Mouse Click, would you Like it?",options: ["yes","no"], correct : 0},
];

// --- RENDER QUESTIONS ---
const container = document.getElementById("questionsContainer");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `
    <p>${q.q}</p>
    ${q.options.map((opt, idx) =>
      `<label><input type="radio" name="q${i}" value="${idx}" required> ${opt}</label><br>`
    ).join("")}
  `;
  container.appendChild(div);
});

document.addEventListener("click", (e) => {
  // Check if clicked element is the close button
  if (e.target.classList.contains("close-popup")) {
    document.getElementById("popup").style.display = "none";
  }
});

// --- HANDLE QUIZ SUBMIT ---
document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const answers = [];

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      answers.push(selected.value);
      if (parseInt(selected.value) === q.correct) score++;
    } else {
      answers.push("Not answered");
    }
  });

  const finalScore = (score/14) * 100;
  document.getElementById("scoreDisplay").textContent = finalScore;
  document.getElementById("scoreField").value = finalScore;
  document.getElementById("answersField").value = answers.join(", ");
  document.getElementById("popup").style.display = "flex";
});

// --- HANDLE LEAD FORM SUBMIT ---
document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // ⚠️ Replace this with your real Google Form POST URL
  const googleFormURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBe_rY5JVpyu72OJAjy6Lwzh7CzbNWOgWiu62Ytxd3TzGIzw/formResponse";

  fetch(googleFormURL, {
    method: "POST",
    body: new FormData(this),
    mode: "no-cors"
  }).then(() => {
    document.getElementById("leadForm").classList.add("hidden");
    document.getElementById("thankYou").classList.remove("hidden");
  }).catch(() => {
    alert("There was an error submitting the form. Please try again.");
  });
});
