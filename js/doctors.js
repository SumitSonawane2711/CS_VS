// --- QUIZ QUESTIONS ---
const questions = [
  { q: "1. What is the primary purpose of financial planning?", options: ["To reduce taxes", "To manage income and expenses", "To invest in gold", "To spend more"], correct: 1 },
  { q: "2. Which investment option is generally safest?", options: ["Stocks", "Mutual Funds", "Fixed Deposits", "Cryptocurrency"], correct: 2 },
  { q: "3. What does insurance primarily provide?", options: ["Profit", "Protection", "Growth", "Tax evasion"], correct: 1 },
  { q: "4. What is the full form of SIP?", options: ["Systematic Investment Plan", "Savings Interest Policy", "Secure Investment Plan", "Simple Insurance Plan"], correct: 0 },
  { q: "5. Which one is a liability?", options: ["Home loan", "Car", "Mutual Fund", "Salary"], correct: 0 },
  { q: "6. Diversification means:", options: ["Investing in one stock", "Investing across multiple assets", "Avoiding investment", "Putting money in savings account"], correct: 1 },
  { q: "7. Emergency fund should cover:", options: ["1 month", "3-6 months", "1 year", "No need"], correct: 1 },
  { q: "8. What does a credit score represent?", options: ["Your income", "Your spending", "Your creditworthiness", "Your assets"], correct: 2 },
  { q: "9. Which tax-saving option is under Section 80C?", options: ["FD", "PPF", "NPS", "Crypto"], correct: 1 },
  { q: "10. Retirement planning should start:", options: ["After 50", "At 40", "Early in career", "Never"], correct: 2 },
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

  const finalScore = score * 10;
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
