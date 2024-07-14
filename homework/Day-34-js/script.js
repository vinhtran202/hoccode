let countdown = 5;
let countdownInterval;
let pageVisible = true;

const countdownElement = document.getElementById("countdown");
const getLinkButton = document.getElementById("getLink");

function startCountdown() {
  countdownInterval = setInterval(() => {
    if (countdown > 0 && pageVisible) {
      countdown--;
      countdownElement.innerText = countdown;
    }

    if (countdown === 0) {
      clearInterval(countdownInterval);
      getLinkButton.disabled = false;
      getLinkButton.classList.add("enabled");
      getLinkButton.innerHTML = `<a href="https://www.google.com" style="color: white; text-decoration: none;">Get Link</a>`;
    }
  }, 1000);
}

startCountdown();

document.addEventListener("visibilitychange", () => {
  pageVisible = !document.hidden;

  if (pageVisible && countdown > 0) {
    startCountdown();
  } else {
    clearInterval(countdownInterval);
  }
});

getLinkButton.addEventListener("click", () => {
  if (countdown === 0) {
    window.location.href = "https://www.google.com/";
  }
});
