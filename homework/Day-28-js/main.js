let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dotsContainer = document.querySelector(".slider .dots");
let dots;

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  dotsContainer.innerHTML = "";

  for (let i = 0; i <= lengthItems; i++) {
    let dot = document.createElement("li");
    dot.addEventListener("click", () => {
      active = i;
      reloadSlider();
    });
    if (i === active) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);
  }

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 2500);

  dots = document.querySelectorAll(".slider .dots li");
}

reloadSlider();

window.onresize = function (event) {
  reloadSlider();
};
