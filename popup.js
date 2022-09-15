var modal = document.getElementById("myModal");
var cancel = document.getElementById("close-modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// console.log(document.getElementsByClassName("close")[0]);

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.querySelector(".submit").disabled = false;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".newUserName").value = "";
  document.querySelector(".newUserEmail").value = "";
  document.querySelector(".newUserAddress").value = "";
  // resetForm();
};

// When the user clicks on Cancel button close the modal
cancel.addEventListener("click", () => {
  modal.style.display = "none";
  document.querySelector(".newUserName").value = "";
  document.querySelector(".newUserEmail").value = "";
  document.querySelector(".newUserAddress").value = "";
  // resetForm();
});

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
