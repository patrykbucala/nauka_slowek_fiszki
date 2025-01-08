const words = [
  { polish: "wiek", english: "age" },
  { polish: "piękny", english: "beautiful" },
   { polish: "narodziny", english: "birth" },
    { polish: "data urodzenia", english: "date of birth" },
    { polish: "miejsce urodzenia", english: "place of birth" },
    { polish: "obywatel", english: "citizen" },
    { polish: "rozwiedziony", english: "divorced" },
    { polish: "kobieta", english: "female" },
    { polish: "imię", english: "first name" },
    { polish: "zawód", english: "job" },
    { polish: "mężczyzna", english: "male" },
    { polish: "stan cywilny", english: "marital status" },
    { polish: "żonaty, zamężna", english: "married" },
    { polish: "narodowość", english: "nationality" },
    { polish: "zawód wymagający kwalifikacji", english: "occupation/profession" },
    { polish: "dane osobowe", english: "personal details" },
    { polish: "płeć", english: "sex" },
    { polish: "stanu wolnego", english: "single" },
    { polish: "nazwisko", english: "surname" },
    { polish: "wdowa", english: "widow" },
    { polish: "wdowiec", english: "widower" },
    { polish: "styl nieformalny, codzienny", english: "casual" },
    { polish: "elegancki styl", english: "elegant/smart" },
    { polish: "modny styl", english: "fashionable" },
    { polish: "styl", english: "style" },
    { polish: "kurtka przeciwdeszczowa", english: "anorak" },
    { polish: "bluzka", english: "blouse" },
    { polish: "bokserki", english: "boxer shorts" },
    { polish: "stanik", english: "bra" },
    { polish: "ubrania", english: "clothes" },
    { polish: "płaszcz", english: "coat" },
    { polish: "sukienka", english: "dress" },
    { polish: "bluza z kapturem", english: "hooded sweatshirt" },
    { polish: "marynarka, żakiet, kurtka", english: "jacket" },
    { polish: "dżinsy", english: "jeans" },
    { polish: "sweter", english: "jumper" },
    { polish: "majtki, spodnie", english: "pants" },
    { polish: "pulower", english: "pullover" },
    { polish: "piżama", english: "pyjamas" },
    { polish: "koszula", english: "shirt" },
    { polish: "szorty", english: "shorts" },
    { polish: "spódnica", english: "skirt" },
    { polish: "skarpetka", english: "sock" },
    { polish: "garnitur", english: "suit" },
    { polish: "sweter", english: "sweater" },
    { polish: "kąpielówki", english: "swimming trunks" },
    { polish: "kostium kąpielowy", english: "swimsuit" },
    { polish: "podkoszulka", english: "T-shirt" },
    { polish: "krawat", english: "tie" },
    { polish: "rajstopy", english: "tights" },
    { polish: "top", english: "top" },
    { polish: "dres", english: "tracksuit" },
    { polish: "spodnie", english: "trousers" },
    { polish: "slipy", english: "underpants" },
    { polish: "bielizna", english: "underwear" },
    { polish: "mundur", english: "uniform" },
    { polish: "mundurek szkolny", english: "school uniform" },
    { polish: "akcesoria", english: "accessories" },
    { polish: "czapka z daszkiem", english: "baseball cap" },
    { polish: "pasek", english: "belt" },
    { polish: "kozaki", english: "boots" },
    { polish: "teczka, aktówka", english: "briefcase" },
    { polish: "buty na płaskim obcasie", english: "flat shoes" },
    { polish: "okulary", english: "glasses" },
    { polish: "rękawiczki", english: "gloves" },
    { polish: "torebka", english: "handbag" },
    { polish: "kapelusz", english: "hat" },
    { polish: "buty na wysokim obcasie", english: "high heels" },
    { polish: "biżuteria", english: "jewellery" },
    { polish: "sandały", english: "sandals" },
    { polish: "szalik, apaszka", english: "scarf" },
    { polish: "buty", english: "shoes" },
    { polish: "buty sportowe", english: "trainers" },
    { polish: "czapka zimowa", english: "woolly hat" },
    { polish: "obszerny", english: "baggy" },
    { polish: "w kratę", english: "checked" },
    { polish: "dżinsowy", english: "denim" },
    { polish: "zrobiony na drutach", english: "knitted" },
    { polish: "skórzany", english: "leather" },
    { polish: "lekki", english: "lightweight" },
    { polish: "bez rękawów", english: "sleeveless" },
    { polish: "w paski", english: "striped" },
    { polish: "obcisły", english: "tight" },
    { polish: "nieprzemakalny", english: "waterproof" },
    { polish: "ubierać (się)", english: "dress" },
    { polish: "pasować (pod względem rozmiaru)", english: "fit" },
    { polish: "pasować (pod względem koloru, wzoru)", english: "match" },
    { polish: "pasować (do osoby, jej stylu)", english: "suit" },
    { polish: "nosić, mieć na sobie", english: "wear" },
    { polish: "ubierać się elegancko", english: "dress up" },
    { polish: "przebierać się za kogoś", english: "dress up as sb else" },
    { polish: "ubrać się", english: "get dressed" },
    { polish: "założyć coś na siebie", english: "put on" },
    { polish: "zdjąć z siebie, rozebrać się", english: "take off" },
    { polish: "kostka", english: "ankle" },
    { polish: "ręka", english: "arm" },
    { polish: "plecy", english: "back" },
    { polish: "ciało", english: "body" },
    { polish: "pupa", english: "bottom" },
    { polish: "klatka piersiowa", english: "chest" },
    { polish: "łokieć", english: "elbow" },
    { polish: "palec u dłoni", english: "finger" },
    { polish: "pięść", english: "fist" },
    { polish: "stopa", english: "foot" },
    { polish: "stopy", english: "feet" },
    { polish: "ręka", english: "hand" },
    { polish: "głowa", english: "head" },
    { polish: "pięta", english: "heel" },
    { polish: "biodro", english: "hip" },
    { polish: "kolano", english: "knee" },
    { polish: "noga", english: "leg" },
    { polish: "szyja", english: "neck" },
    { polish: "ramię", english: "shoulder" },
    { polish: "skóra", english: "skin" },
    { polish: "brzuch", english: "stomach" },
    { polish: "udo", english: "thigh" },
    { polish: "kciuk", english: "thumb" },
    { polish: "palec u stopy", english: "toe" },
    { polish: "talia", english: "waist" },
    { polish: "nadgarstek", english: "wrist" },
    { polish: "policzek", english: "cheek" },
    { polish: "podbródek", english: "chin" },
    { polish: "ucho", english: "ear" },
    { polish: "oko", english: "eye" },
    { polish: "rzęsa", english: "eyelash" },
    { polish: "twarz", english: "face" },
    { polish: "czoło", english: "forehead" },
    { polish: "szczęka", english: "jaw" },
    { polish: "warga", english: "lip" },
    { polish: "usta", english: "mouth" },
    { polish: "nos", english: "nose" },
    { polish: "gardło", english: "throat" },
    { polish: "język", english: "tongue" },
    { polish: "ząb", english: "tooth" },
    { polish: "zęby", english: "teeth" },
    { polish: "atrakcyjny", english: "attractive" },
    { polish: "piękny", english: "beautiful" },
    { polish: "przystojny, atrakcyjny", english: "good-looking" },
    { polish: "olśniewający", english: "gorgeous" }
  
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
