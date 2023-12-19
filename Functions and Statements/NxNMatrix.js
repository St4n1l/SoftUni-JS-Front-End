function matrix(number)
{   
    function printRow(num)
    {
        let row = (num.toString() + ' ').repeat(num);
        console.log(row.trimEnd());
    }

    for (let index = 0; index < number; index++) 
    {
        printRow(number);   
    }
}

matrix(3)