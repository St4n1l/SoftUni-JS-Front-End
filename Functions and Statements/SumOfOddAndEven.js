function sumOfOddAndEven(num)
{
    let evenSum = 0;
    let oddSum = 0;
    num = Math.abs(num).toString();

    for (let index = 0; index < num.length; index++)
    {
        let currentNum = parseInt(num[index]);

        if(currentNum % 2 == 0)
        {
            evenSum += currentNum;
        }
        else
        {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

sumOfOddAndEven(1000435)