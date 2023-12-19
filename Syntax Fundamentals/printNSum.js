function printNSum(start, end)
{
    let sum = 0;

    let stringResult ="";

    for(let i = start; i <= end; i++)
    {
        sum += i;
        stringResult += `${(i).toString()} `;
    }

    stringResult = stringResult.slice(0 , -1);
    console.log(stringResult);
    console.log(`Sum: ${sum}`);
}

printNSum(5,10)