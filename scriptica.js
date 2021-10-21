const zadar = document.getElementById("zadar");
const šibenik = document.getElementById("šibenik");
const btn = document.getElementById("buttonDiv");

btn.onclick = () => {
  const chance = Math.random();
  if (chance < 0.5) {
    šibenik.style.display = "none"
    zadar.style.display = "flex"
  } else {
    zadar.style.display = "none"
    šibenik.style.display = "flex"
  }

};
