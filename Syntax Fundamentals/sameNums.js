function same(num)
{   

    let arr = Array.from(String(num), Number);

    let isSame = arr.every(n => n == arr[0]); 

    let amountOfDigits = Math.abs(num).toString().length;
    let sum = 0;

    for (let index = 0; index < amountOfDigits; index++)
    {
        let currentNum = num % 10;
        num /= 10;
        num = Math.floor(num);

        sum += currentNum;
    }

    if(isSame)
    {
        console.log("true");
        console.log(sum);
    }
    else
    {
        console.log("false");
        console.log(sum);
    }
    
}

same(2222222)