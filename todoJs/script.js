const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  if (inputBox.value === "") {
    alert("Please enter");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // Tạo nút chỉnh sửa
    let editSpan = document.createElement("span");
    const newLocal = "edit";
    editSpan.innerHTML = newLocal; // Nút "Edit"
    editSpan.classList.add("edit"); // Thêm class cho chỉnh sửa
    li.appendChild(editSpan);

    // Tạo nút xóa
    let removeSpan = document.createElement("span");
    removeSpan.innerHTML = "X"; // Nút "X" để xóa
    removeSpan.classList.add("remove");
    li.appendChild(removeSpan);

    listContainer.appendChild(li);
  }

  inputBox.value = "";
  // saveData();
};

// Xử lý sự kiện click trên listContainer
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      // saveData();
    } else if (e.target.classList.contains("edit")) {
      // Chỉnh sửa nội dung của task
      let newTask = prompt(
        "Edit your task:",
        e.target.parentElement.firstChild.textContent
      );
      if (newTask) {
        e.target.parentElement.firstChild.textContent = newTask; // Cập nhật lại nội dung
        // saveData();
      }
    } else if (e.target.classList.contains("remove")) {
      // Xóa mục
      e.target.parentElement.remove();
      // saveData();
    }
  },
  false
);

// const saveData = () => {
//   localStorage.setItem("saveData", listContainer.innerHTML);
// };

// const showTask = () => {
//   listContainer.innerHTML = localStorage.getItem("saveData");
// };
