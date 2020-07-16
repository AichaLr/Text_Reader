const main = document.querySelector("main"),
  Voices = document.getElementById("voices"),
  textarea = document.getElementById("text"),
  close = document.getElementById("close"),
  btn_read = document.getElementById("read"),
  tooglebtn = document.getElementById("toggle");

const data = [
  {
    image: "./img/happy.jpg",
    text: "i'm happy",
  },
  {
    image: "./img/eat.jpg",
    text: "i'm eating",
  },
  {
    image: "./img/cry.jpg",
    text: "i'm crying",
  },
  {
    image: "./img/sing.jpg",
    text: "i'm singing",
  },
];
data.forEach(boxmaker);
function boxmaker(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
   <img src="${image}"  />
   <p class="info">${text}</p>
      `;
  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    box.classList.add("active");
    setTimeout(() => box.classList.remove("active"), 800);
  });

  main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    Voices.appendChild(option);
  });
}

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

speechSynthesis.addEventListener("voiceschanged", getVoices);
tooglebtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);
close.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);
// Change voice
Voices.addEventListener("change", setVoice);

// Read text button
btn_read.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
