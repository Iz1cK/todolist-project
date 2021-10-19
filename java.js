let addButton = document.getElementById("addToList");
let addText = document.getElementById("inputText");
let toDoListDiv = document.querySelector(".toDoListDiv");

addButton.addEventListener("click", () => {
    if (addText.value != "") {
        var delButton = document.createElement("button");
        delButton.textContent = "✕";
        var checkButton = document.createElement("button");
        checkButton.textContent = "✓";
        var editButton = document.createElement("button");
        editButton.textContent = "⚙";
        var toDoText = document.createElement("p");
        toDoText.appendChild(document.createTextNode(addText.value));
        addText.value = "";
        var parBut = document.createElement("div");

        parBut.appendChild(delButton);
        parBut.appendChild(editButton);
        parBut.appendChild(checkButton);
        parBut.appendChild(toDoText);

        parBut.classList.add("alignToDoList");

        toDoListDiv.appendChild(parBut);
        delButton.addEventListener("click", () => {
            toDoListDiv.removeChild(parBut);
        })
        checkButton.addEventListener("click", () => {
            toDoText.classList.toggle("dashedText");
        })
        editButton.addEventListener("click", () => {
            let editText = document.createElement("input");
            editText.type = "text";
            editText.value = toDoText.textContent;

            let editConfirm = document.createElement("button");
            editConfirm.textContent = "OK"

            parBut.removeChild(toDoText);
            parBut.appendChild(editConfirm);
            parBut.appendChild(editText);

            editConfirm.addEventListener("click", () => {
                if (editText.value != "") {
                    toDoText.textContent = editText.value;
                    parBut.appendChild(toDoText);
                    parBut.removeChild(editConfirm);
                    parBut.removeChild(editText);
                }
            })
        })
    }
})
