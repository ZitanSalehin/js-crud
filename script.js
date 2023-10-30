const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

let editMode = false;
let editedItem = null;

addButton.addEventListener("click", () => {
    const name = nameInput.value;
    const email = emailInput.value;

    if (editMode) {
        if (editedItem) {
            editedItem.firstChild.textContent = `${name} (${email})`;
            addButton.textContent = "Add";
            editMode = false;
            editedItem = null;
        }
    } else {
        if (name && email) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${name} (${email}) <button class="edit">Edit</button> <button class="delete">Delete</button>`;
            list.appendChild(listItem);

            nameInput.value = "";
            emailInput.value = "";

            const editButton = listItem.querySelector(".edit");
            editButton.addEventListener("click", () => {
                nameInput.value = name;
                emailInput.value = email;
                addButton.textContent = "Update";
                editMode = true;
                editedItem = listItem;
            });

            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", () => {
                list.removeChild(listItem);
            });
        }
    }
});
