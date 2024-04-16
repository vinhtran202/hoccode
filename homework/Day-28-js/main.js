var slider = document.querySelector(".slider .list");
var items = document.querySelectorAll(".slider .list .item");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var dotsContainer = document.querySelector(".slider .dots");

var lengthItems = items.length - 1;
var active = 0;
var refreshInterval;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);

  updateDots();
}

function updateDots() {
  var dots = document.querySelectorAll(".slider .dots li");
  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      active = index;
      reloadSlider();
    });
    if (index === active) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function createDots() {
  for (var i = 0; i <= lengthItems; i++) {
    var dot = document.createElement("li");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

createDots();

window.onresize = function (event) {
  reloadSlider();
};
