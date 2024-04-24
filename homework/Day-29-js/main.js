var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.children[0];
var progressSpan = progress.children[0];

//Tính width của progres-bar
var progressBarWidth = progressBar.clientWidth;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    //Tính offsetX tại vị trí click
    dragSpace = e.offsetX;
    //Tính phần trăm
    var rate = (dragSpace * 100) / progressBarWidth;
    //Cập nhật css
    progress.style.width = `${rate}%`;

    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
    initialSpace = dragSpace;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  initialSpace = dragSpace;
});
var initialClientX = 0;
var initialSpace = 0;
var dragSpace = 0;
var handleDrag = function (e) {
  var clientX = e.clientX;

  //Tính khoảng cách kéo
  dragSpace = clientX - initialClientX + initialSpace;

  //Tính phần trăm
  var rate = (dragSpace * 100) / progressBarWidth;

  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  //Cập nhật css
  progress.style.width = `${rate}%`;
};

//Code player nghe nhạc
var audio = document.querySelector("audio");
var playerAction = document.querySelector(".player .player-action");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;

window.addEventListener("load", function () {
  var getTime = function (seconds) {
    var mins = Math.floor(seconds / 60); //Làm tròn xuống và chỉ lấy phần nguyên
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };
  //Hiển thị thời lượng audio
  durationEl.innerText = getTime(audio.duration);
  //Lắng nghe sự kiện khi click vào nút play
  playerAction.addEventListener("click", function () {
    //Kiểm tra xem nhạc dừng hay phát
    if (audio.paused) {
      audio.play();
      this.children[0].classList.replace("fa-play", "fa-pause");
    } else {
      audio.pause();
      this.children[0].classList.replace("fa-pause", "fa-play");
    }
  });
  audio.addEventListener("timeupdate", function () {
    currentTimeEl.innerText = getTime(audio.currentTime);

    var rate = (audio.currentTime * 100) / audio.duration;
    progress.style.width = `${rate}%`;
  });
});

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;

    var percentage = (offsetX / progressBarWidth) * 100;

    var newTime = (percentage * audio.duration) / 100;
    audio.currentTime = newTime;
  }
});

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;

    var percentage = (offsetX / progressBarWidth) * 100;

    var newTime = (percentage * audio.duration) / 100;
    audio.currentTime = newTime;

    document.addEventListener("mousemove", handleDrag);

    initialClientX = e.clientX;
    initialOffsetX = offsetX;
  }
});

var handleDrag = function (e) {
  var offsetX = e.clientX - initialClientX;

  var newOffset = initialOffsetX + offsetX;
  if (newOffset < 0) {
    newOffset = 0;
  } else if (newOffset > progressBarWidth) {
    newOffset = progressBarWidth;
  }

  var percentage = (newOffset / progressBarWidth) * 100;

  var newTime = (percentage * audio.duration) / 100;
  audio.currentTime = newTime;

  progress.style.width = `${percentage}%`;
};

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
