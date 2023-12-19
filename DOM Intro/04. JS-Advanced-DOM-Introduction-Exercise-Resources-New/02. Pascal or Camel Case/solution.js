function solve() 
{
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let sentence = [];

  if (convention === "Camel Case")
  {
    text = text.toLowerCase();

    text = text.split(' ');
    sentence.push(text[0]);

    for (let index = 1; index < text.length; index++) 
    {
      let currentWord = text[index];
      let remainder = currentWord.slice(1);
      currentWord = currentWord[0].toUpperCase() + remainder;
      sentence.push(currentWord);
    }

  }
  else if (convention === "Pascal Case") 
  {
    text = text.toLowerCase();
    text = text.split(' ');

    for (let index = 0; index < text.length; index++)
    {
      let currentWord = text[index];
      let remainder = currentWord.slice(1);
      currentWord = currentWord[0].toUpperCase() + remainder;
      sentence.push(currentWord);
    }

  }
  else 
  {
    sentence.push("Error!");
  }

  let result = document.getElementById("result");
  result.innerText = sentence.join("");
}