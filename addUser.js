// const submit = document.querySelector(".submit");

// console.log(submit);

// submit.onsubmit = (e) => {
//   console.log("Submitted Form");
//   e.preventDefault();
// };

// submit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Submitted Form");

//   // const tbody = document.querySelector("tbody");
//   // const tr = document.querySelector("tr");
//   // const td = document.querySelector("td");
//   // const userId = document.getElementById("userId");
//   // console.log(userId);
//   // const newUserName = document.querySelector(".newUserName").value;
//   // const newUserEmail = document.querySelector(".newUserEmail").value;
//   // const newUserAddress = document.querySelector(".newUserAddress").value;

//   // console.log(newUserName, "neww");

//   // if (newUserName === "" || newUserEmail === "" || newUserAddress === "") {
//   //   alert("Please Insert Name, Email & Address Properly");
//   //   return;
//   // } else {
//   //   fetch("https://jsonplaceholder.typicode.com/users", {
//   //     method: "POST",
//   //     body: JSON.stringify({
//   //       name: newUserName,
//   //       email: newUserEmail,
//   //       address: newUserAddress,
//   //     }),
//   //     headers: {
//   //       "Content-type": "application/json; charset=UTF-8",
//   //     },
//   //   })
//   //     .then((response) => response.json())
//   //     .then((d) => {
//   //       users.push(d);
//   //       console.log(d, "postData");
//   //       console.log(users, "newAllData");
//   //       //   td.textContent = json;
//   //       //   tr.appendChild(td);

//   //       // let tableData = "";

//   //       let tableData = `
//   //         <tr data-id=${users.length}>
//   //         <td >${users.length}</td>
//   //         <td>${d.name}</td>
//   //         <td>${d.email}</td>
//   //         <td>${d?.address || "Germany"}</td>

//   //         <td>
//   //         <button onclick="editUserInfo(${d.id})">Edit</button>
//   //         <button id="delete-user-${users.length}">Delete</button>
//   //         </td>

//   //         </tr>
//   //         `;

//   //       //   tbody.appendChild(tableData);
//   //       tbody.innerHTML += tableData;

//   //       const modalWindowOverlay = document.getElementById("modal-overlay");
//   //       const table = document.querySelector("table");
//   //       const editSection = document.querySelector(".edit-section");

//   //       modal.style.display = "none";
//   //       resetForm();

//   //       // modalWindowOverlay.style.display = "none";
//   //       // table.style.display = "block";
//   //       // editSection.style.display = "block";
//   //     });
//   // }
// });

const addNewUser = (x) => {
  // console.log(x, "x");
  // x.disabled = true;
  // console.log(event);
  // alert("hello", event);
  // e.preventDefault();
  const tbody = document.querySelector("tbody");
  const tr = document.querySelector("tr");
  const td = document.querySelector("td");
  const userId = document.getElementById("userId");
  console.log(userId);
  const newUserName = document.querySelector(".newUserName").value;
  const newUserEmail = document.querySelector(".newUserEmail").value;
  const newUserAddress = document.querySelector(".newUserAddress").value;

  console.log(newUserName, "neww");

  const validName = usernameValidation();
  const validEmail = emailValidation();
  const validAddress = addressValidation();

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
  } else {
    x.disabled = true;
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: newUserName,
        email: newUserEmail,
        address: newUserAddress,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((d) => {
        users.push(d);
        console.log(d, "postData");
        console.log(users, "newAllData");
        //   td.textContent = json;
        //   tr.appendChild(td);

        // let tableData = "";

        let tableData = `
          <tr data-id=${users.length}>
          <td class="tableUserId-${users.length}">${users.length}</td>
          <td class="tableUserName-${users.length}">${d.name}</td>
          <td class="tableUserEmail-${users.length}">${d.email}</td>
          <td class="tableUserAddress-${users.length}">${
          d?.address || "Germany"
        }</td>

          <td>
          <button id="edit-user-${users.length}">Edit</button>
          <button id="delete-user-${users.length}">Delete</button>
          </td>

          </tr>
          `;

        //   tbody.appendChild(tableData);
        tbody.innerHTML += tableData;

        // const modalWindowOverlay = document.getElementById("modal-overlay");
        // const table = document.querySelector("table");
        // const editSection = document.querySelector(".edit-section");

        modal.style.display = "none";
        resetForm();

        // modalWindowOverlay.style.display = "none";
        // table.style.display = "block";
        // editSection.style.display = "block";
      });
  }
};
