const buttonList = document.getElementById("buttonList");
const menulist = document.getElementById("menulist");
buttonList.addEventListener("click", (event) => {
  if (menulist.getAttribute("class") === "mobile-menu-hidden") {
    menulist.setAttribute("class", "mobile-menu-visible");
  } else {
    menulist.setAttribute("class", "mobile-menu-hidden");
  }
});
const searchMobileMenu = document.getElementById("searchMobileMenu");
console.log("searchMobileMenu");
const searchInputMobileMenu = document.getElementById("searchInputMobileMenu");
console.log("searchInputMobileMenu");
const searchGlassMobileMenu = document.getElementById("searchGlassMobileMenu");
console.log("searchGlassMobileMenu");

searchGlassMobileMenu.addEventListener("click", (event) => {
  console.log("searchInputMobileMenu value: ", searchInputMobileMenu.value);
  const className = searchMobileMenu.getAttribute("class");
  if (className.indexOf("overflow-hidden") > -1) {
    searchMobileMenu.setAttribute(
      "class",
      className.replace("overflow-hidden", "")
    );
    searchInputMobileMenu.focus();
  } else {
    searchMobileMenu.setAttribute("class", `${className} overflow-hidden`);
    searchInputMobileMenu.value = "";
  }
});
