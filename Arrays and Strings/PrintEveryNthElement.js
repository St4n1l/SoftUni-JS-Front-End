function everyNthElement(values, step)
{
    let array = values;
    let newArray = new Array();

    for (let index = 0; index < array.length; index+=step) 
    {
        newArray.push(array[index]);          
    }

    return newArray;
}

everyNthElement(['5','20','31','4','20'],2);
