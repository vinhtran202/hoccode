// Kiểm tra nếu trình duyệt hỗ trợ Web Speech API
if (!("webkitSpeechRecognition" in window)) {
  document.getElementById("status").innerText =
    "Trình duyệt của bạn không hỗ trợ Web Speech API";
} else {
  const startBtn = document.getElementById("start-btn");
  const statusDiv = document.getElementById("status");
  const recognition = new webkitSpeechRecognition();

  recognition.lang = "vi-VN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    statusDiv.innerText = "Đang lắng nghe...";
  };

  recognition.onerror = (event) => {
    statusDiv.innerText = "Có lỗi xảy ra: " + event.error;
  };

  recognition.onend = () => {
    statusDiv.innerText = "Đã dừng lắng nghe";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    statusDiv.innerText = "Bạn đã nói: " + transcript;
    handleVoiceCommand(transcript);
  };

  startBtn.addEventListener("click", () => {
    recognition.start();
  });

  function handleVoiceCommand(command) {
    if (command.includes("google")) {
      window.location.href = "https://www.google.com";
    } else if (command.includes("facebook")) {
      window.location.href = "https://www.facebook.com";
    } else if (command.includes("youtube")) {
      window.location.href = "https://www.youtube.com";
    } else if (command.includes("google drive")) {
      window.location.href = "https://drive.google.com";
    } else if (command.includes("google maps") || command.includes("bản đồ")) {
      window.location.href = "https://maps.google.com";
    } else if (
      command.includes("chỉ đường tới") ||
      command.includes("tới") ||
      command.includes("đường tới")
    ) {
      const destination = command
        .replace(/chỉ đường tới|tới|đường tới/gi, "")
        .trim();
      if (destination) {
        window.location.href = `https://www.google.com/maps/search/${destination}`;
      } else {
        statusDiv.innerText = "Không tìm thấy địa điểm cần chỉ đường";
      }
    } else if (
      command.includes("bài hát") ||
      command.includes("mở bài hát") ||
      command.includes("nghe bài hát")
    ) {
      const song = command
        .replace(/bài hát|mở bài hát|nghe bài hát/gi, "")
        .trim();
      if (song) {
        window.location.href = `https://zingmp3.vn/tim-kiem/tat-ca?q=${encodeURIComponent(
          song
        )}`;
      } else {
        statusDiv.innerText = "Không tìm thấy bài hát yêu cầu";
      }
    } else if (
      command.includes("video") ||
      command.includes("mở video") ||
      command.includes("xem video")
    ) {
      const video = command.replace(/video|mở video|xem video/gi, "").trim();
      if (video) {
        window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(
          video
        )}`;
      } else {
        statusDiv.innerText = "Không tìm thấy video yêu cầu";
      }
    } else {
      statusDiv.innerText = "Không thực hiện được yêu cầu";
    }
  }
}
