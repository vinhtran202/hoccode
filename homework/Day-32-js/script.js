let list = document.querySelector(".list");
let moduleIndex = 0; // Số thứ tự của module
let lessonIndex = 0; // Số thứ tự của lesson

const getMouseOffset = (e) => {
  const rect = e.target.getBoundingClientRect();
  const offset = {
    x: e.pageX - rect.left,
    y: e.pageY - rect.top,
  };
  return offset;
};

const getElVerticalCenter = (el) => {
  const rect = el.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

const sortable = (rootEl, onUpdate) => {
  let dragEl;

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const target = e.target;
    if (target && target !== dragEl && target.classList.contains("list-item")) {
      const offset = getMouseOffset(e);
      const middleY = getElVerticalCenter(dragEl);

      if (offset.y < middleY) {
        // up
        if (target.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target.nextElementSibling);
        }
      } else {
        // down
        rootEl.insertBefore(dragEl, target);
      }
    }
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    rootEl.removeEventListener("dragover", handleDragOver);
    rootEl.removeEventListener("dragend", handleDragEnd);
    dragEl.classList.remove("ghost");

    // Update indices
    render(rootEl);

    // Call the onUpdate callback
    onUpdate(dragEl);
  };

  // Render
  render(rootEl);

  // Sort start
  rootEl.addEventListener("dragstart", (e) => {
    dragEl = e.target;

    rootEl.addEventListener("dragover", handleDragOver);
    rootEl.addEventListener("dragend", handleDragEnd);
    dragEl.classList.add("ghost");
  });
};

const render = (rootEl) => {
  moduleIndex = 0; // Reset module index
  lessonIndex = 0; // Reset lesson index

  Array.from(rootEl.children).forEach((itemEl) => {
    itemEl.draggable = true;

    let type = "Bài";
    if (itemEl.classList.contains("active")) {
      type = "Module";
      moduleIndex++;
    } else {
      lessonIndex++;
    }

    if (!itemEl.children.length) {
      itemEl.innerHTML = `${type} : ${
        type === "Module" ? moduleIndex : lessonIndex
      }<span>${itemEl.innerText}</span>`;
    } else {
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessonIndex
      }<span>  ${itemEl.children[0].innerText}</span>`;
    }
  });
};

// Using
sortable(list, (item) => {
  lessonIndex = 0;
  moduleIndex = 0;
  render(list);
});
