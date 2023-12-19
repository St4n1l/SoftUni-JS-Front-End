function isPerfect(num)
{
    let sum = 0;

    for (let index = 1; index < num; index++) 
    {
        let currentNum = num / index;

        if(Number.isInteger(currentNum))
        {
            sum += index;
        }
    }

    if(sum == num)
    {
        console.log("We have a perfect number!")
    }
    else
    {
        console.log("It's not so perfect.")
    }
}

isPerfect(6)