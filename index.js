let score = 0;
const scoreDisplay = document.getElementById("score");

const holes = document.getElementsByClassName("hole");

function moleA() {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle("mole");
}

setInterval(moleA, 300);

const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    score++;
    clickEvent.target.classList.remove("mole");
    scoreDisplay.innerText = score;
  }
});
