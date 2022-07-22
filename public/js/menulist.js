const buttonList = document.getElementById("buttonList");
const menulist = document.getElementById("menulist");
buttonList.addEventListener("click", (event) => {
  if (menulist.getAttribute("class") === "mobile-menu-hidden") {
    menulist.setAttribute("class", "mobile-menu-visible");
  } else {
    menulist.setAttribute("class", "mobile-menu-hidden");
  }
});
console.log("location: ", window.location.pathname);
