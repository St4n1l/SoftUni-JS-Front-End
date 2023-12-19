function search()
{
   let towns = Array.from(document.querySelectorAll("li"));

   let query = document.getElementById("searchText").value;

   let count = 0;

   for (const li of towns) 
   {
      if(li.textContent.toLowerCase().includes(query.toLowerCase()))
      {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         count++;
      }
   }

   let result = document.getElementById("result");
   result.textContent = `${count} matches found`;
}
