function sort(values)
{
    values.sort((a,b) => a - b);
    let resultArray = [];
    let size = values.length;

    for (let index = 0; index < size; index++)
    {
        resultArray.push(values.shift())
        
        resultArray.push(values.pop())
    }

    return resultArray;
}

sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);