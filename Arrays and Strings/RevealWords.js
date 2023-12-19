function reveal(arrOfWords, sentence)
{
    let words = arrOfWords.split(", ");
    let sentenceToArray = sentence.split(" ");

    for (let index = 0; index < sentenceToArray.length; index++) 
    {
        if(sentenceToArray[index].startsWith("*",0))
        {
            for (let l = 0; l < words.length; l++)
            {
                if (sentenceToArray[index].length == words[l].length)
                {
                    sentenceToArray[index] = words[l];
                }
            }
        }
    }

    let result = sentenceToArray.join(" ");

    console.log(result);
}

reveal("great, learning", "softuni is ***** place for learning new programming languages");