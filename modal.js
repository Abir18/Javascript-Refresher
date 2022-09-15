// Show Modal
const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");
const table = document.querySelector("table");
const editSection = document.querySelector(".edit-section");
// console.log(editUser);

const showModalWindow = () => {
  modalWindowOverlay.style.display = "flex";
  table.style.display = "none";
  editSection.style.display = "none";
};
openModalButton.addEventListener("click", showModalWindow);

// Hide Modal
const closeModalButton = document.getElementById("close-modal");

const hideModalWindow = () => {
  modalWindowOverlay.style.display = "none";
  table.style.display = "block";
  editSection.style.display = "block";
};

closeModalButton.addEventListener("click", hideModalWindow);

// Hide On Blur

const hideModalWindowOnBlur = (e) => {
  if (e.target === e.currentTarget) {
    console.log(e.target === e.currentTarget);
    hideModalWindow();
  }
};

modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur);
