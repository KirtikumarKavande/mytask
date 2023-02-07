function saveToLocalStorage(event) {
  event.preventDefault();
  const Expense = event.target.Expense.value;
  const description = event.target.description.value;
  const category = event.target.category.value;

  const obj = {
    Expense,
    description,
    category,
  };

  axios
    .post(
      "https://crudcrud.com/api/4fe07e30f3504e91b47bc0543bd8613f/Expense",
      obj
    )
    .then((res) => {
      showNewUserOnScreen(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/4fe07e30f3504e91b47bc0543bd8613f/Expense")
    .then((response) => {
      response.data.map((item) => {
        console.log(item);
        return showNewUserOnScreen(item);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

function showNewUserOnScreen(user) {
  document.getElementById("description").value = "";
  document.getElementById("Expense").value = "";
  document.getElementById("category").value = "";
  if (localStorage.getItem(user.description) !== null) {
    removeUserFromScreen(user.description);
  }

  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user._id}> ${user.Expense} - ${user.description}-${user.category}
                                    <button onclick=deleteUser('${user._id}')> Delete User </button>
                                    <button onclick=editUserDetails('${user.description}','${user.Expense}','${user.category}','${user._id}')>Edit User </button>
                                 </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(description, Expense, category, _id) {
  document.getElementById("description").value = description;
  document.getElementById("Expense").value = Expense;
  document.getElementById("category").value = category;

  deleteUser(_id);
}

function deleteUser(_id) {
  axios
    .delete(
      `https://crudcrud.com/api/4fe07e30f3504e91b47bc0543bd8613f/Expense/${_id}`
    )
    .then((response) => {
      removeUserFromScreen(_id);
    })
    .catch((err) => {
      console.log(err);
    });

  removeUserFromScreen(_id);
}

function removeUserFromScreen(_id) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(_id);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
