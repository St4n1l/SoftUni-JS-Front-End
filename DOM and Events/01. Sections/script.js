function create(words) 
{
   let mainDiv = document.getElementById('content');

      for (const word of words)
      {
         let div = document.createElement('div');
         let paragraph = document.createElement('p');
         paragraph.style.display = 'none';

         paragraph.innerText = word;
         div.appendChild(paragraph);

         mainDiv.appendChild(div);

         div.addEventListener('click', ()=>{
            paragraph.style.display = '';
         })
      }
}