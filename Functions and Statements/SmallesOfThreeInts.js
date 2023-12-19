function printSmallest(num1, num2, num3)
{
    let numArr = [num1,num2,num3];

    numArr.sort((a,b) =>  a - b);

    console.log(numArr[0]);
}

printSmallest(25,21,4)