const inputSearch = document.getElementById("inputSearch");
const searchGlass = document.getElementById("searchGlass");
searchGlass.addEventListener("click", (event) => {
  const className = inputSearch.getAttribute("class");
  if (className.indexOf("input-serch-hidden") > -1) {
    inputSearch.setAttribute(
      "class",
      className.replace("input-serch-hidden", "")
    );
    document.getElementById("search").focus();
  } else {
    inputSearch.setAttribute("class", `${className} input-serch-hidden`);
  }
});
