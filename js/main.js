const navBar = document.getElementById("navbar");
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
let i = 0;
const spans = document.querySelectorAll(".count");
const spansContainer = document.getElementById("spans-container");
const countStart = () => {
  spans.forEach((span) => {
    const stop = () => {
      setInterval(() => {
        if (i < 2345) {
          i++;
          spans[0].innerHTML = `${scale(i, 0, 2345, 0, 2345)}`;
          spans[1].innerHTML = `${Math.trunc(scale(i, 0, 2345, 0, 6784))}`;
          spans[2].innerHTML = `${Math.trunc(scale(i, 0, 2345, 0, 1056))}`;
          spans[3].innerHTML = `${Math.trunc(scale(i, 0, 2345, 0, 9152))}`;
          console.log(i);
        } else {
          clearInterval(stop);
        }
      }, 150);
    };
    stop();
  });
};
window.addEventListener("scroll", (eo) => {
  if (window.scrollY > navBar.offsetHeight) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
  if (window.scrollY >= spansContainer.offsetTop) {
    countStart();
  }
});
