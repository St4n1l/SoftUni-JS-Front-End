function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tableContents = document.querySelectorAll("tbody tr");
    let search = document.getElementById("searchField");

    for (const element of tableContents)
   {
      element.classList.remove("select");

      if (element.innerHTML.includes(search.value)) 
      {
        console.log(element.innerHTML);
        element.classList.add("select");
      }
   }

    search.value = "";
  }
}
