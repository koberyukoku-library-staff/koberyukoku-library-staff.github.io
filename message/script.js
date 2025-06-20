const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

const goodImages = ["/bunzo1.jpg", "/bunzo2.png"];
const badImage = "/hajime.png";

function createCharacter() {
  const img = document.createElement("img");
  const isGood = Math.random() < 0.7; // 70% good, 30% bad

  if (isGood) {
    img.src = goodImages[Math.floor(Math.random() * goodImages.length)];
    img.dataset.point = 1;
  } else {
    img.src = badImage;
    img.dataset.point = -1;
  }

  img.classList.add("falling");
  img.style.left = Math.random() * (window.innerWidth - 60) + "px";
  img.style.top = "-60px";

  img.addEventListener("click", () => {
    score += parseInt(img.dataset.point);
    scoreDisplay.textContent = `スコア: ${score}`;
    img.remove();
  });

  gameArea.appendChild(img);

  let y = -60;
  const fallSpeed = 2 + Math.random() * 2;

  const fall = setInterval(() => {
    y += fallSpeed;
    img.style.top = y + "px";

    if (y > window.innerHeight) {
      img.remove();
      clearInterval(fall);
    }
  }, 16);
}

setInterval(createCharacter, 1000);
