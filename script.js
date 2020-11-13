const menu = document.getElementsByClassName("fa-bars")[0];
const mainMenu = document.getElementById("main-menu");
const dropBtn = document.getElementById("drop-btn");
const dropDown = document.getElementsByClassName("drop-down")[0];
const subDropBtn = document.getElementById("sub-drop-btn");
const subDropDown = document.getElementsByClassName("sub-drop-down")[0];



const displayDropdown = (event) => {
  event.preventDefault();

 if (event.target === menu) {
    mainMenu.classList.toggle("display");
  } else if (event.target === dropBtn) {
    dropDown.classList.toggle("display");
  } else if (event.target === subDropBtn) {
    subDropDown.classList.toggle("display");
  } else {
    return;
  }
};

menu.addEventListener("click", displayDropdown);
dropBtn.addEventListener("click", displayDropdown);
subDropBtn.addEventListener("click", displayDropdown);