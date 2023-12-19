function solve() 
{
  let input = document.querySelector("#input").value;
  input = input.split(".");
  input = input.filter(s => s.length > 0).map(s => s += '.');

  while(input.length > 0)
  {
    let p = document.createElement('p');

    p.textContent = input.splice(0,3).join('');

    document.querySelector("#output").appendChild(p);
  }
}