let h1 = document.querySelector("h1");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let red = (x / window.innerWidth) * 100;
  let green = (y / window.innerHeight) * 100;
  let blue = (red + green) / 2;

  h1.textContent = `Jesteś na ${x} pikselu szerokości i na ${y} pikselu wysokości okna`;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
  h1.style.color = `rgb(${100 - red}%, ${100 - green}%, ${100 - blue}%)`;
});
