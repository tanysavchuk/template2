const inputSearch = document.getElementById("inputSearch");
const searchGlass = document.getElementById("searchGlass");
const search = document.getElementById("search");
searchGlass.addEventListener("click", (event) => {
  console.log("search value: ", search.value);
  const className = inputSearch.getAttribute("class");
  if (className.indexOf("input-serch-hidden") > -1) {
    inputSearch.setAttribute(
      "class",
      className.replace("input-serch-hidden", "")
    );
    search.focus();
  } else {
    inputSearch.setAttribute("class", `${className} input-serch-hidden`);
    search.value = "";
  }
});
