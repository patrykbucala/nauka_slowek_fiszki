const words = [
  { polish: "wiek", english: "age" },
  { polish: "piękny", english: "beautiful" }
];

let currentPolishWordIndex = 0;
let currentEnglishWordIndex = 0;

function getRandomWord(language) {
  if (language === "Polish") {
    currentPolishWordIndex = Math.floor(Math.random() * words.length);
    document.getElementById("wordPolish").textContent = words[currentPolishWordIndex].polish;
    document.getElementById("userInputEnglish").value = "";
    document.getElementById("messageEnglish").textContent = "";
  } else if (language === "English") {
    currentEnglishWordIndex = Math.floor(Math.random() * words.length);
    document.getElementById("wordEnglish").textContent = words[currentEnglishWordIndex].english;
    document.getElementById("userInputPolish").value = "";
    document.getElementById("messagePolish").textContent = "";
  }
}

function checkWord(languageFrom) {
  let userInput;
  let currentWord;
  let messageElement;

  if (languageFrom === "English") {
    userInput = document.getElementById("userInputEnglish").value.trim().toLowerCase();
    currentWord = words[currentPolishWordIndex].english;
    messageElement = document.getElementById("messageEnglish");
  } else if (languageFrom === "Polish") {
    userInput = document.getElementById("userInputPolish").value.trim().toLowerCase();
    currentWord = words[currentEnglishWordIndex].polish;
    messageElement = document.getElementById("messagePolish");
  }

  if (userInput === currentWord) {
    messageElement.textContent = "DOBRZEEE!";
    messageElement.classList.remove("incorrect");
    messageElement.classList.add("correct");
  } else {
    messageElement.textContent = "Prawidłowa odpowiedź: " + currentWord;
    messageElement.classList.remove("correct");
    messageElement.classList.add("incorrect");
  }
}