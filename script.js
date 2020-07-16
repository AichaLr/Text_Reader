const main = document.querySelector("main"),
  voices = document.getElementById("voices"),
  textarea = document.getElementById("text"),
  close = document.getElementById("close"),
  btn_read = document.getElementById("read"),
  tooglebtn = document.getElementById("toogle");

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
  main.appendChild(box);
}
