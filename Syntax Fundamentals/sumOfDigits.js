function sum(num)
{
    let amountOfDigits = Math.abs(num).toString().length;
    let sum = 0;

    for (let index = 0; index < amountOfDigits; index++)
    {
        let currentNum = num % 10;
        num /= 10;
        num = Math.floor(num);

        sum += currentNum;
    }

    console.log(sum)
}

sum(543)