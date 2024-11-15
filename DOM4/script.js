const listContainer = document.getElementById("dynamicList");
const addItemButton = document.getElementById("addItem");

// function to create new list item

function createrListItem(content) {
  // created an li
  const li = document.createElement("li");
  li.textContent = content;

  const moveupButton = document.createElement("button");
  moveupButton.textContent = "Move Up!!";

  moveupButton.classList.add("moveUp");

  const moveDownButton = document.createElement("button");
  moveDownButton.textContent = "Move Down!!";

  moveDownButton.classList.add("moveDown");

  li.appendChild(moveupButton);
  li.appendChild(moveDownButton);

  // add event listner for the buttons
  moveupButton.addEventListener("click", () => moveUpItem(li));
  moveDownButton.addEventListener("click", () => moveDownItem(li));

  return li;
}

// function to add a new item to the list

addItemButton.addEventListener("click", () => {
  const itemCount = listContainer.children.length;

  const newItem = createrListItem(`Item ${itemCount}`);

  listContainer.appendChild(newItem);
});
