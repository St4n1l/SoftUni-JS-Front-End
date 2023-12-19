function rotate(values, numToRotate)
{
    let array = values;

    for (let index = 0; index < numToRotate; index++) 
    {
        let element = array[0];
        array.shift();
        array.push(element);        
    }

    let result = array.join(" ");
    console.log(result);
}

rotate([51, 47, 32, 61, 21], 2)