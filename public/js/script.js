const logoClick = document.getElementById("logoClick");
console.log("logoClick: ", logoClick);
logoClick.addEventListener("click", (event) => {
  console.log("logoClickBlack");
  location.href = "/";
});
