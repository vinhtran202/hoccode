//tạo biến 'text' chứa đoạn văn bản
var text ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cupiditate porro perferendis nam autem repudiandae ut earum officiis magni est aperiam, officia vero ab? Veritatis assumenda molestiae voluptate optio saepe?";

//thêm biến vào id text
const container = document.getElementById("text");

//cắt text thành những từ riêng lẻ(dùng trim() để loại bỏ khoảng trắng đầu cuối, split(/\s+/) cắt văn bản thành các từ)
const words = text.trim().split(/\s+/);

//tạo biến 'index' gán giá trị bằng 0 : mục đích tạo thẻ span từ vị trí đầu tiên cho các từ
var index = 0;

//thêm thẻ span cho các từ với những thẻ có text có 'class' là char và thẻ rỗng có class là 'clear' 
while (index < words.length) {
    const wordElement = document.createElement("span");
    wordElement.textContent = words[index];
    wordElement.classList.add("char"); // thêm class char vào span có text
    container.appendChild(wordElement);
// sau mỗi từ sẽ thay khoảng trắng bảng 1 thẻ span rỗng
    if (index < words.length - 1) {
        const spaceElement = document.createElement("span");
        spaceElement.textContent = " ";
        spaceElement.classList.add("clear"); // thêm class clear vào span rỗng
        container.appendChild(spaceElement);
    }

    index++;
}
// reset index về không khi duyệt xong mảng text
function resetIndex() {
    index = 0;
  }
// tạo hàm để tô màu nền 
function highlightWord() {
  document.querySelectorAll(".char").forEach((char) => {
    char.style.backgroundColor = "transparent";
  });

  if (index < words.length) {
    const currentWord = document.querySelectorAll(".char")[index];
    currentWord.style.backgroundColor = "yellow"; 
    index++; 
  } else {
    resetIndex();
  }
}

setInterval(highlightWord, 1000);