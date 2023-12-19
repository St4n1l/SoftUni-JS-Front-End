function subtract() 
{
    const num1 = Number(document.getElementById("firstNumber").value);
    const num2 = Number(document.getElementById("secondNumber").value);

    let result = document.getElementById("result");
    result.innerText = num1-num2; 
}