let inputValue = document.querySelector("#taskInput").value;
console.log(inputValue);
let selecterId = [];
function addItem(e) {
  if (e.key == "13" || e.key == "Enter") {
    var inputValue = document.querySelector("#taskInput").value;

    if (inputValue.trim()) {
      const createLi = document.createElement("li");
      createLi.id = new Date().valueOf();

      const createChekBox = document.createElement("input");
      createChekBox.type = "checkbox";
      createChekBox.className = "checkox";

      const createDiv = document.createElement("div");
      createDiv.id = new Date().valueOf();

      const textOfDiv = document.createTextNode(inputValue);

      // const createDeleteBtn = document.createElement("button");
      // createDeleteBtn.classList.add("crossButton");
      // const textOfDeletebtn = document.createTextNode("delete");

      // createDeleteBtn.innerHTML = "X";

      // createDeleteBtn.addEventListener(("click", () => {}));

      createDiv.appendChild(textOfDiv);

      // createDeleteBtn.appendChild(textOfDeletebtn);

      createLi.appendChild(createChekBox);
      createLi.appendChild(createDiv);
      // createLi.appendChild(createDeleteBtn);

      document.getElementById("taskList").appendChild(createLi);
      document.querySelector("#taskInput").value = "";

      createLi.onchange = function () {
        if (createChekBox.checked) {
          selecterId.push(this.id);
          console.log("<>", selecterId);
        } else {
          let index = selecterId.indexOf(this.id);

          selecterId.splice(index, 1);
          console.log("<>", selecterId);

          // console.log(selecterId.length);
        }
      };
    } else alert("You must write something!");
  }
  // const remove = document.querySelectorAll(".crossButton");
  // for (let i = 0; i < remove.length; i++) {
  //   remove[i].addEventListener("click", () => {
  //     remove[i].parentElement.style.display = "none";
  //   });
  // }
}

function removeItem() {
  let ul = document.getElementById("taskList");
  // console.log("🚀 ~ file: todoApp.js:65 ~ removeItem ~ ul:", ul);

  // console.log(
  //   "🚀 ~ file: todoApp.js:68 ~ removeItem ~ selecterId:",
  //   selecterId
  // );
  for (let i = 0; i < selecterId.length; i++) {
    const id = selecterId[i];
    let toDoItem = document.getElementById(id);
    // console.log("🚀 ~ file: todoApp.js:74 ~ removeItem ~ toDoItem:", toDoItem);
    ul.removeChild(toDoItem);
    console.log(toDoItem);
  }
  selecterId = [];
  console.log(selecterId);
}

function completedTask() {
  let ul = document.getElementById("taskList");

  for (let i = 0; i < selecterId.length; i++) {
    const id = selecterId[i];
    let toDoItem = document.getElementById(id);
    console.log("🚀toDoItem:", toDoItem);

    let tex = toDoItem.getElementsByTagName("div")[0];
    console.log("🚀 ~ file: todoApp.js:89 ~ completedTask ~ tex:", tex);
    tex.style.textDecoration = "line-through";
  }
}

// document.getElementsByClassName("divTaxt").style.textDecoration =
//   "line-through";
