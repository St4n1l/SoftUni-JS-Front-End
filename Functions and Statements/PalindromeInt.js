function isPalindrome(numArr)
{
    let numArrToString = [];

    for (let index = 0; index < numArr.length; index++) 
    {
        let currentNum = numArr[index].toString();
        numArrToString.push(currentNum);
    }

    for (let index = 0; index < numArrToString.length; index++)
    {
        let currentNum = parseInt(numArrToString[index]);
        let reverseCharArr = numArrToString[index].split('').reverse();
        let reversedString = reverseCharArr.join('');
        let reversedNum = parseInt(reversedString);

        if(currentNum == reversedNum)
        {
            console.log(true)
        }
        else
        {
            console.log(false);
        }
    }
}

isPalindrome([123,323,421,121])