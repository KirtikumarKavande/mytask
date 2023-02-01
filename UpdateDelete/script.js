function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const phonenumber = event.target.phonenumber.value;
  // localStorage.setItem('name', name);
  // localStorage.setItem('email', email);
  // localStorage.setItem('phonenumber', phonenumber)
  const obj = {
    name,
    email,
    phonenumber,
  };
  // localStorage.setItem(obj.email, JSON.stringify(obj));
  axios
    .post(
      "https://crudcrud.com/api/56d6b523494341ac9c057ccde2988b79/appoinment",
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
  // const localStorageObj = localStorage;
  // const localstoragekeys = Object.keys(localStorageObj);
  axios
    .get("https://crudcrud.com/api/56d6b523494341ac9c057ccde2988b79/appoinment")
    .then((response) => {
      for (var i = 0; i < response.data.length; i++) {
      
        showNewUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showNewUserOnScreen(user) {
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("phonenumber").value = "";
  // console.log(localStorage.getItem(user.emailId))
  if (localStorage.getItem(user.email) !== null) {
    removeUserFromScreen(user.email);
  }

  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
                                    <button onclick=deleteUser('${user._id}')> Delete User </button>
                                    <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User </button>
                                 </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(emailId, name, phonenumber,_id) {
  document.getElementById("email").value = emailId;
  document.getElementById("username").value = name;
  document.getElementById("phonenumber").value = phonenumber;

  deleteUser(_id);
}

// deleteUser('abc@gmail.com')

function deleteUser(_id) {

    axios
    .delete(`https://crudcrud.com/api/56d6b523494341ac9c057ccde2988b79/appoinment/${_id}`)
    .then((response) => {

      
        removeUserFromScreen(_id);
      
    })
    .catch((err) => {
      console.log(err);
    });
  
  removeUserFromScreen(_id);
//   location.reload();

}

function removeUserFromScreen(_id) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(_id);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
