window.addEventListener("load", function () {
  var getTime = function (seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  var audio = document.querySelector("audio");
  var playerAction = document.querySelector(".player .player-action");
  var durationEl = document.querySelector(".duration");
  var currentTimeEl = document.querySelector(".current-time");
  var progressBar = document.querySelector(".progress-bar");
  var progress = progressBar.querySelector(".progress");
  var lyricsToggle = document.querySelector(".lyrics-toggle button");
  var lyricsContainer = document.querySelector(".lyrics-container");
  var lyricsDiv = document.querySelector(".lyrics");

  var lyrics = `
    Em, ngày em đánh rơi nụ cười vào anh
    Có nghĩ sau này em sẽ chờ
    Và vô tư cho đi hết những ngây thơ
    Anh, một người hát mãi những điều mong manh
    Lang thang tìm niềm vui đã lỡ
    Chẳng buồn dặn lòng quên hết những chơ vơ
    Ta yêu nhau bằng nỗi nhớ chưa khô trên những bức thư
    Ta đâu bao giờ có lỗi khi không nghe tim chối từ
    Chỉ tiếc rằng
    Em không là nàng thơ
    Anh cũng không còn là nhạc sĩ mộng mơ
    Tình này nhẹ như gió
    Lại trĩu lên tim ta những vết hằn
    Tiếng yêu này mỏng manh
    Giờ tan vỡ, thôi cũng đành
    Xếp riêng những ngày tháng hồn nhiên
    Trả lại...
    Mai, rồi em sẽ quên ngày mình khờ dại
    Mong em kỷ niệm này cất lại
    Mong em ngày buồn thôi ướt đẫm trên vai
    Mai, ngày em sải bước bên đời thênh thang
    Chỉ cần một điều em hãy nhớ
    Có một người từng yêu em tha thiết vô bờ
    Em không là nàng thơ
    Anh cũng không còn là nhạc sĩ mộng mơ
    Tình này nhẹ như gió
    Lại trĩu lên tim ta những vết hằn
    Tiếng yêu này mỏng manh
    Giờ tan vỡ, thôi cũng đành
    Xếp riêng những ngày tháng hồn nhiên
    Trả hết cho em
    Em không là nàng thơ
    Anh cũng không còn là nhạc sĩ mộng mơ
    Tình này nhẹ như gió
    Lại trĩu lên tim ta những vết hằn
    Tiếng yêu này mỏng manh
    Giờ tan vỡ, thôi cũng đành
    Xếp riêng những ngày tháng hồn nhiên
    Trả hết cho em
    `;

  lyricsToggle.addEventListener("click", function () {
    if (lyricsContainer.style.display === "none") {
      lyricsContainer.style.display = "block";
      lyricsDiv.innerHTML = lyrics;
    } else {
      lyricsContainer.style.display = "none";
    }
  });

  durationEl.innerText = getTime(audio.duration);

  playerAction.addEventListener("click", function () {
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

  progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
      var offsetX = e.offsetX;
      var percentage = (offsetX / progressBar.clientWidth) * 100;
      var newTime = (percentage * audio.duration) / 100;
      audio.currentTime = newTime;
    }
  });

  var initialClientX = 0;
  var initialOffsetX = 0;

  var handleDrag = function (e) {
    var offsetX = e.clientX - initialClientX;
    var newOffset = initialOffsetX + offsetX;
    var progressBarWidth = progressBar.clientWidth;

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

  progressBar.addEventListener("mousedown", function (e) {
    if (e.which === 1) {
      var offsetX = e.offsetX;
      var progressBarWidth = progressBar.clientWidth;

      var percentage = (offsetX / progressBarWidth) * 100;
      var newTime = (percentage * audio.duration) / 100;
      audio.currentTime = newTime;

      document.addEventListener("mousemove", handleDrag);

      initialClientX = e.clientX;
      initialOffsetX = offsetX;
    }
  });

  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", handleDrag);
  });
});
