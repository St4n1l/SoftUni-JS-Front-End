function find(word, sentence)
{
    wordArr = sentence.toLowerCase().split(" ");
    let output = `${word} not found!`

    for (let index = 0; index < wordArr.length; index++) 
    {
        if(wordArr[index] == word)
        {
            output = word;
        }
    }

    console.log(output)
}

find('javascript', 'JavaScript is the best programming language');