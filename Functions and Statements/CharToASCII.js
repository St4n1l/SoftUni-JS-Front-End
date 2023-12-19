function toASCII(char1,char2)
{
    let stringArr = [];

    let ascii1 = char1.charCodeAt(0);
    let ascii2 = char2.charCodeAt(0);

    if(ascii1 > ascii2)
    {
        for (let index = ascii2 + 1; index < ascii1; index++) 
        {
            stringArr.push(String.fromCharCode(index));
        } 
    }
    else
    {
        for (let index = ascii1 + 1; index < ascii2; index++) 
        {
            stringArr.push(String.fromCharCode(index));
        }
    }
    

    console.log(stringArr.join(" "));
}

toASCII('a', 'd');