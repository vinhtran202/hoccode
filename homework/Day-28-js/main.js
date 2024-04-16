var slider = document.querySelector(".slider .list");
var items = document.querySelectorAll(".slider .list .item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var dotsContainer = document.querySelector(".slider .dots");
var dots;

var lengthItems = items.length - 1;
var active = 0;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

var refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  dotsContainer.innerHTML = "";

  for (var i = 0; i <= lengthItems; i++) {
    var dot = document.createElement("li");
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
