function factorialDivision(num1,num2)
{
    let result1 = factorial(num1);
    let result2 = factorial(num2);

    function factorial(numToFactor)
    {
        let factorResult = 1;

        for (let index = 1; index <= numToFactor; index++) 
        {        
            factorResult *= index;
        }

        return factorResult;
    }

    console.log(`${(result1/result2).toFixed(2)}`);
}



factorialDivision(6,2)