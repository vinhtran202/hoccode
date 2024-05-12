document.addEventListener("DOMContentLoaded", function () {
  var editor = document.getElementById("editor");

  function changeFont(txt, change) {
    if (change == "bold") {
      if (editor.style.fontWeight == "bold") editor.style.fontWeight = "normal";
      else editor.style.fontWeight = "bold";
    } else if (change == "italic") {
      if (editor.style.fontStyle == "italic") editor.style.fontStyle = "normal";
      else editor.style.fontStyle = "italic";
    } else if (change == "underline") {
      if (editor.style.textDecoration == "underline")
        editor.style.textDecoration = "none";
      else editor.style.textDecoration = "underline";
    } else if (change == "fontSize") {
      var fsize = document.getElementById("fsize");
      var fontSize = fsize.value;
      editor.style.fontSize = fontSize + "px";
    } else if (change == "adjustR") {
      if (editor.style.textAlign == "right") editor.style.textAlign = "left";
      else editor.style.textAlign = "right";
    } else if (change == "adjustC") {
      if (editor.style.textAlign == "right" || editor.style.textAlign == "left")
        editor.style.textAlign = "center";
      else editor.style.textAlign = "left";
    } else if (change == "adjustL") {
      editor.style.textAlign = "left";
    } else if (change == "fontFamily") {
      var fontFamily = document.getElementById("fontFamily");
      var value = fontFamily.value;
      if (value == 1) {
        editor.style.fontFamily = "Times New Roman";
      }
      if (value == 2) {
        editor.style.fontFamily = "Arial";
      }
      if (value == 3) {
        editor.style.fontFamily = "Verdana, Geneva, sans-serif";
      }
    }
  }
  function ShowSelectionInsideTextarea(editor) {
    var textComponent = document.getElementById(editor);
    var selectedText;
    if (document.selection != undefined) {
      textComponent.focus();
      var sel = document.selection.createRange();
      selectedText = sel.text;
    } else if (textComponent.selectionStart != undefined) {
      var startPos = textComponent.selectionStart;
      var endPos = textComponent.selectionEnd;
      selectedText = textComponent.value.substring(startPos, endPos);
    }

    console.log(selectedText);
  }

  function fileAction() {
    var option = document.getElementById("fileOptions").value;
    var fileName = document.getElementById("fileName").value;
    var content = document.getElementById("editor").value;

    if (!fileName.trim()) {
      alert("Please enter a file name.");
      return;
    }

    if (option === "new") {
      document.getElementById("editor").value = "";
    } else if (option === "saveTxt") {
      saveTextFile(fileName + ".txt", content);
    } else if (option === "savePdf") {
      savePdfFile(fileName + ".pdf", content);
    }
  }

  function saveTextFile(fileName, content) {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, fileName);
  }

  function savePdfFile(fileName, content) {
    var pdf = new jsPDF();
    pdf.text(content, 10, 10);
    pdf.save(fileName);
  }
  var button = document.querySelector("button");
  button.addEventListener("click", fileAction);
});
