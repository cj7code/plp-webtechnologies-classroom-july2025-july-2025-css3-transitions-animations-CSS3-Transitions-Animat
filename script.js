/* =======================
PART 2: JavaScript Functions
- Demonstrates scope, parameters, return values
- Controls DOM + CSS animations
======================= */

// Global variables (demonstrating scope use)
let totalCups = 0;         
const maxCups = 8;         

// Function with parameter + return value
function addCup(amount) {
  let newTotal = totalCups + amount;
  if (newTotal > maxCups) newTotal = maxCups; 
  return newTotal; // return updated value
}

// Function updates DOM and CSS animation
function updateGlass(newTotal) {
  totalCups = newTotal; 
  const glassCount = document.getElementById("glassCount");
  const water = document.getElementById("water");

  glassCount.textContent = totalCups;

  // Use parameter value to control CSS transition
  const percent = (totalCups / maxCups) * 100;
  water.style.height = percent + "%"; 
}

// Function shows feedback based on return values
function showMessage(cups) {
  const msg = document.getElementById("message");
  if (cups < 5) {
    msg.textContent = `Good! Keep going 💪 (${cups} cups)`;
  } else if (cups < maxCups) {
    msg.textContent = `Excellent! You're well hydrated 🌊 (${cups} cups)`;
  } else {
    msg.textContent = `👏 Amazing! You've reached your daily goal (${cups} cups)`;
  }
}

// Array + function for random tips
const tips = [
  "Take a short walk every hour to boost circulation.",
  "Aim for 7–8 hours of sleep each night.",
  "Eat at least 5 servings of fruits and vegetables daily.",
  "Limit sugary drinks — water is the best choice!",
  "Stretch for 5 minutes to reduce muscle stiffness.",
  "Practice mindful breathing to reduce stress.",
  "Wash your hands regularly to prevent infections."
];

function getRandomTip() {
  const index = Math.floor(Math.random() * tips.length);
  return tips[index]; // return useful value
}

function showTip() {
  const tipBox = document.getElementById("tip");
  tipBox.textContent = getRandomTip();

  // Trigger CSS keyframe animation dynamically
  tipBox.classList.add("fade");
  setTimeout(() => tipBox.classList.remove("fade"), 800);
}

/* =======================
PART 3: Combining CSS + JS
- JS adds/removes classes & styles to trigger animations
======================= */

const waterBtn = document.getElementById("waterBtn");
const resetBtn = document.getElementById("resetBtn");

// Drink Water Button: triggers CSS transition + feedback
waterBtn.addEventListener("click", () => {
  const newTotal = addCup(1);    
  updateGlass(newTotal);         
  showMessage(newTotal);         
  showTip();                     

  // Disable button when goal reached
  if (newTotal >= maxCups) {
    waterBtn.disabled = true;
    waterBtn.textContent = "Goal Reached 🎉";
  }
});

// Reset Button: resets all animations and values
resetBtn.addEventListener("click", () => {
  totalCups = 0; 
  updateGlass(totalCups); 
  document.getElementById("message").textContent = ""; 
  document.getElementById("tip").textContent = "";     
  
  waterBtn.disabled = false;           
  waterBtn.textContent = "Drink Water"; 
});

/* =======================
Assignment Deliverables:
✔ Part 1: CSS transitions (button hover, glass fill) & keyframes (tip fade-in).
✔ Part 2: JS functions with parameters, return values, scope (addCup, showMessage, getRandomTip).
✔ Part 3: Integration — JS dynamically triggers CSS animations & DOM updates.
✔ Deliverables: index.html, styles.css, script.js — clean, modular, documented.
======================= */
