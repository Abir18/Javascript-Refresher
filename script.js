// async function loadIntoTable(url, table) {
//   const tableBody = table.querySelector("tbody");
//   const response = await fetch(url);
//   //   const { id, name, email } = await response.json();
//   const dataa = await response.json();

//   console.log(dataa);

//   const rowElement = document.createElement("tr");

//   let tableData = "";
//   dataa.map((d) => {
//     tableData += `
//     <tr>
//     <td>${d.id}</td>
//     <td>${d.name}</td>
//     <td>${d.email}</td>
//     <td>${d?.address?.city || "Germany"}</td>

//     <td>
//     <button onclick="editUser()">Edit</button>
//     <button>Delete</button>
//     </td>

//     </tr>
//     `;
//     // console.log(tableData);
//   });
//   tableBody.innerHTML = tableData;

// tableBody.appendChild(tableData);

// const { id, name, email } = dataa[5];
// console.log(name);

// let cellElement;

// for (const data of dataa) {
//   // console.log(data);
//   const { id, name, email } = data;
//   // console.log(name, email, id);

//   cellElement = document.createElement("tr");
//   cellElement.textContent = data.name;

//   // const dataElement = document.querySelector("td");

//   // for (const key in data) {
//   //   // if (Object.hasOwnProperty.call(data, key)) {
//   //   //   const element = data[key];
//   //   //   console.log(element);
//   //   // }
//   //   // console.log(key);
//   //   console.log(key, ":", data[key]);
//   // }
//   // cellElement.textContent = data.id;
//   rowElement.appendChild(cellElement);
// }

// tableBody.appendChild(rowElement);
// tableBody.appendChild(cellElement);
// }

const userId = document.querySelector(".editId");
const userName = document.querySelector(".editName");
const userEmail = document.querySelector(".editEmail");
const userAddress = document.querySelector(".editAddress");
const list = document.querySelector("table");
const update = document.querySelector(".update");

// Users Information in Table
// const tableUserId = document.querySelector(`.tableUserId-${}`);
const tableUserId = document.querySelector(`.tableUserId-10`);
// const tableUserName = document.querySelector(".tableUserName-10");
const tableUserEmail = document.querySelector(".tableUserEmail");
const tableUserAddress = document.querySelector(".tableUserAddress");

console.log(tableUserId, "tableUserId");
// console.log(tableUserName, "tableUserName");

let id;

let users = [];

const fetchData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  users = [...data];
  console.log(users, "users");
};
fetchData();

// const addNewUser = () => {
//   console.log("add new user");
// };

const editUserInfo = async (id) => {
  // alert("Edit User");
  console.log("edit user info", id);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  // const data = await response.json();
  const { name, email, address } = await response.json();

  // console.log(name, email, "singleUser");

  const editUserId = document.querySelector(".editId");
  // console.log(editUserId, "ew");
  userId.value = id;
  userName.value = name;
  userEmail.value = email;
  userAddress.value = address?.city || "404 Not Found";
  // updateUserInfo(id);
};

// const deleteUser = async (id) => {
//   console.log("user deleted");
//   // const del = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//   //   method: "DELETE",
//   // });
//   // alert(id);
//   // const res = await del.json();
//   // console.log(res, "res");

//   // console.log("delete user", await del.json());

//   if (confirm("Are you sure to delete this user?")) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     //   const { id, name, email } = await response.json();
//     const data = await response.json();

//     const filtered = data.filter((d) => d.id !== id);
//     console.log(filtered);

//     const tableBody = document.querySelector("tbody");

//     let tableData = "";
//     filtered.map((d) => {
//       tableData += `
//       <tr>
//       <td id="userId">${d.id}</td>
//       <td>${d.name}</td>
//       <td>${d.email}</td>
//       <td>${d?.address?.city || "Germany"}</td>

//       <td>
//       <button  onclick="editUserInfo(${d.id})">Edit</button>

//       </td>

//       </tr>
//       `;
//       tableBody.innerHTML = tableData;
//     });
//   }
// };

// document.querySelector(".reset").addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.querySelector(".editName").value = "";
//   document.querySelector(".editEmail").value = "";
//   document.querySelector(".editAddress").value = "";
//   document.querySelector(".newUserName").value = "";
//   document.querySelector(".newUserEmail").value = "";
//   document.querySelector(".newUserAddress").value = "";
// });

const resetForm = (e) => {
  // e.preventDefault();
  document.querySelector(".editName").value = "";
  document.querySelector(".editEmail").value = "";
  document.querySelector(".editAddress").value = "";
  document.querySelector(".newUserName").value = "";
  document.querySelector(".newUserEmail").value = "";
  document.querySelector(".newUserAddress").value = "";
};

// const editList = () => {
//   const list = document.querySelector("table");

//   list.addEventListener("click", (e) => {
//     console.log("list");
//     const url = `https://jsonplaceholder.typicode.com/users`;
//     const id = e.target.parentElement.parentElement.dataset.id;

//     let editButtonIsPressed = e.target.id === "edit-user";
//     let deleteButtonIsPressed = e.target.id === "delete-user";

//     if (editButtonIsPressed) {
//       console.log("User Edited");
//     }

//     if (deleteButtonIsPressed) {
//       console.log("User Deleted");
//       fetch(`${url}/${id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("deleted item", data);
//           // location.reload();
//         });
//     }
//   });
// };

const tableBody = document.querySelector("tbody");
const rowElement = document.createElement("tr");

const loadIntoTable = async (url, table) => {
  const editUserName = document.querySelector(".editName");
  const editUserEmail = document.querySelector(".editEmail");
  const editUserAddress = document.querySelector(".editAddress");
  const editUserId = document.querySelector(".editId");

  const response = await fetch(url);
  //   const { id, name, email } = await response.json();
  const dataa = await response.json();

  // console.log(dataa[0].name);
  // console.log(dataa[6].id);

  editUserId.value = users[0].id;
  // console.log(editUserId.value, "eii");
  editUserName.value = users[0].name;
  // console.log(editUserName.value, "val");
  editUserEmail.value = users[0].email;
  editUserAddress.value = users[0].address.city;

  let tableData = "";
  users.map((user) => {
    tableData += `
    <tr data-id=${user.id}>
    <td class="tableUserId-${user.id}">${user.id}</td>
    <td class="tableUserName-${user.id}">${user.name}</td>
    <td class="tableUserEmail-${user.id}">${user.email}</td>
    <td class="tableUserAddress-${user.id}">${
      user?.address?.city || "Germany"
    }</td>

    <td>
    ${
      /* Comment in Template String */
      /* <button id="edit-user" onclick="editUserInfo(${d.id})">Edit</button> */ ""
      /* <button class="edit" id="edit-user">Edit</button> */
    }
    
    <button class="edit" id="edit-user-${user.id}">Edit</button>

    <button id="delete-user-${user.id}" class='delete-btn'>Delete</button>
    </td>

    </tr>
    `;
    // console.log(tableData);
  });
  tableBody.innerHTML = tableData;

  editList();
};

const editList = () => {
  // console.log(update);

  list.addEventListener("click", async (e) => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    id = e.target.parentElement.parentElement.dataset.id;

    console.log(e.target.id, "e.target.id");
    console.log(id, "dataset.id");

    let editButtonIsPressed = e.target.id === `edit-user-${id}`;
    let deleteButtonIsPressed = e.target.id === `delete-user-${id}`;
    let updateButtonIsPressed = e.target.parentElement.className === "update";

    // console.log(e.target.parentElement, "parent");

    // update.addEventListener("click", () => {
    //   console.log("update button pressed");
    // });

    if (editButtonIsPressed) {
      // console.log("User Edited");
      // console.log(id);

      const tableUserId = document.querySelector(
        `.tableUserId-${id}`
      ).textContent;
      const tableUserName = document.querySelector(
        `.tableUserName-${id}`
      ).textContent;
      const tableUserEmail = document.querySelector(
        `.tableUserEmail-${id}`
      ).textContent;
      const tableUserAddress = document.querySelector(
        `.tableUserAddress-${id}`
      ).textContent;
      console.log(tableUserName, "tableUserName");

      // const response = await fetch(
      //   `https://jsonplaceholder.typicode.com/users/${id}`
      // );
      // const data = await response.json();
      // const { name, email, address } = await response.json();

      // console.log(name, email, "singleUser");
      console.log(userId, "userId");

      const editUserId = document.querySelector(".editId");
      // console.log(editUserId, "ew");
      userId.value = id;
      userName.value = tableUserName;
      userEmail.value = tableUserEmail;
      // userEmail.value = email;
      userAddress.value = tableUserAddress;
      // userAddress.value = address?.city || "404 Not Found";
    }

    if (updateButtonIsPressed) {
      console.log("update button pressed");
    }

    if (deleteButtonIsPressed) {
      console.log("User Deleted");
      // fetch(`${url}/${id}`, {
      //   method: "DELETE",
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log("deleted item", data);
      //     // location.reload();
      //   });

      if (confirm("Are you sure to delete this user?")) {
        const deleteId = document.querySelector(`#delete-user-${id}`);
        // const deleteId = document.getElementById("delete-user-" + id);
        console.log(deleteId, "idp");
        // console.log(id, "oo");

        console.log(deleteId.parentElement.parentElement.remove());
        resetForm();
      }
    }
  });
};

update.addEventListener("click", (e) => {
  e.preventDefault();

  const validName = editedUsernameValidation();
  const validEmail = editedEmailValidation();
  const validAddress = editedAddressValidation();

  console.log(validName, validEmail, validAddress);

  // if (newUserName === "" || newUserEmail === "" || newUserAddress === "") {
  //   alert("Please Insert Name, Email & Address Properly");
  //   return;
  // }
  if (!validName || !validEmail || !validAddress) {
    // alert("Please Insert Information Correctly");
    return;
    console.log("invalid name", !usernameValidation());
    console.log("invalid email", !emailValidation());
    console.log("invalid address", !addressValidation());
  }
  if (
    userName.value === "" ||
    userEmail.value === "" ||
    userAddress.value === ""
  ) {
    alert("Please Insert Name, Email & Address Properly");
    return;
  }

  // if (!validName || !validEmail || !validAddress) {
  //   // alert("Please Insert Information Correctly");
  //   return;
  // }

  if (confirm("Are you sure to update this user?")) {
    console.log("update button pressed");
    // console.log(id, "lastID");
    console.log(userId, "userIdID");
    fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}`, {
      method: "PATCH",
      body: JSON.stringify({
        id: userId.value,
        name: userName.value,
        email: userEmail.value,
        address: userAddress.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(e.target.textContent);
        // if (e.target.textContent === data.id) {
        // }

        // location.reload();
        // history.go("/");

        const datasetId = document.querySelector("table tbody tr")?.dataset.id;
        // console.log(datasetId, "datasetId");

        console.log(datasetId, "datasetid");
        console.log(data.id, "data.id");
        console.log(userId.value, "userIdUp");

        if (userId.value === data.id) {
          console.log("ID matched");
          //     let tableData = `
          // <tr data-id=${data.id}>
          // <td>${data.id}</td>
          // <td>${data.name}</td>
          // <td>${data.email}</td>
          // <td>${data?.address || "Germany"}</td>

          // <td>
          // ${
          //   /* Comment in Template String */
          //   /* <button id="edit-user" onclick="editUserInfo(${d.id})">Edit</button> */ ""
          // }

          // <button class="edit" id="edit-user" >Edit</button>
          // <button id="delete-user" >Delete</button>
          // </td>

          // </tr>
          // `;

          const trow = tableBody.querySelector(`tr `);
          // console.log(trow.querySelector(`[data-id=${data.id}]`), "value");
          // console.log(document.querySelector(`[data-id='${data.id}']`), "value");

          let singRow = document.querySelector(`[data-id='${data.id}']`);
          console.log(singRow, "singRow");

          console.log(data, "updataaa");

          singRow.innerHTML = `
          <tr data-id=${data.id}>
          <td  class="tableUserId-${data.id}">${data.id}</td>
          <td class="tableUserName-${data.id}">${
            data?.name || "Leanne Graham"
          }</td>
          <td class="tableUserEmail-${data.id}">${
            data?.email || "abc@abc.com"
          }</td>
          <td class="tableUserAddress-${data.id}">${
            data?.address || "Germany"
          }</td>
          
          <td>
          ${
            /* Comment in Template String */
            /* <button id="edit-user" onclick="editUserInfo(${d.id})">Edit</button> */ ""
          }
          
          <button class="edit" id="edit-user-${data.id}" >Edit</button>
          <button id="delete-user-${data.id}" >Delete</button>
          </td>
          
          </tr>
          `;

          // console.log(singRow, "singRow");
          // resetForm();

          // const did = trow.getAttribute("data-id");
          // console.log(did.parentElement, "did");

          // tableBody.innerHTML = tableData;
          // tableBody.innerHTML = singRow;

          // console.log(tableBody);
        }
      });
  }
});

loadIntoTable(
  "https://jsonplaceholder.typicode.com/users",
  document.querySelector("table")
);

// console.log(rowElement.dataset.id);
