function solve() 
{
  let generateBtn = document.querySelector('div button');

  generateBtn.addEventListener('click', generate);

  function generate()
  {
    let array = document.querySelector('div textarea').value;
    let table = document.querySelector('div table tbody');
    let newRow = document.createElement('tr');
    let jsonArr = JSON.parse(array);
    let existingCheckBox = document.querySelector('td input');
    existingCheckBox.disabled = false;

    for (let index = 0; index < jsonArr.length; index++) 
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let img = document.createElement('img');
        let check = document.createElement('input');

        
        check.type = 'checkbox';
        img.src = jsonArr[index].img;
        p1.textContent = jsonArr[index].name;
        p2.textContent = jsonArr[index].price;
        p3.textContent = jsonArr[index].decFactor;
        td1.appendChild(img);
        td2.appendChild(p1);
        td3.appendChild(p2);
        td4.appendChild(p3);
        td5.appendChild(check);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);
        table.appendChild(row);
    }   
    
  }

  let buyBtn = document.querySelectorAll('div button')[1];
    buyBtn.addEventListener('click', buy);

    function buy(event)
    {
      let checkboxes = document.querySelectorAll('input[type=checkbox]');
      let boughtArr = [];

      for (const checkbox of checkboxes)
      {
        if(checkbox.checked)
        {
          var row = checkbox.closest('tr');

          boughtArr.push({
            name:row.cells[1].textContent,
            price:row.cells[2].textContent,
            decfactor: row.cells[3].textContent
          });
        } 
      }

      let targetArea = document.querySelectorAll('textarea')[1];
      let namesArr = [];
      let sum = 0;
      let avgDecFact = 0;

      for (let index = 0; index < boughtArr.length; index++) 
      {
          namesArr.push(boughtArr[index].name.trim());
          sum += Number(boughtArr[index].price);
        avgDecFact += Number(boughtArr[index].decfactor);
      }

      avgDecFact /= boughtArr.length;
      console.log(namesArr);
      let names = namesArr.join(', ');
      targetArea.textContent = `Bought furniture: ${names}\n` + `Total price: ${sum.toFixed(2)}\n` + `Average decoration factor: ${avgDecFact}`; 
      console.log(targetArea.textContent);
    }
}